import React, { createContext, useContext, useState, useEffect } from 'react';
import { isSupabaseConfigured, supabase, logAuditEvent } from '../services/db';

const AdminAuthContext = createContext(null);

const SESSION_KEY = 'irit_admin_auth_session';

export function AdminAuthProvider({ children }) {
  const [adminUser, setAdminUser] = useState(() => {
    try {
      const saved = sessionStorage.getItem(SESSION_KEY) || localStorage.getItem(SESSION_KEY);
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Check Supabase session on load if configured
  useEffect(() => {
    if (isSupabaseConfigured && supabase) {
      supabase.auth.getSession().then(({ data: { session } }) => {
        if (session?.user) {
          const userObj = {
            id: session.user.id,
            email: session.user.email,
            role: 'Administrator',
            isSupabaseAuth: true
          };
          setAdminUser(userObj);
          sessionStorage.setItem(SESSION_KEY, JSON.stringify(userObj));
        }
      });
    }
  }, []);

  const login = async (email, password, remember = false) => {
    setLoading(true);
    setError(null);

    const cleanEmail = email.trim().toLowerCase();

    // 1. If Supabase is configured, use Supabase Auth
    if (isSupabaseConfigured && supabase) {
      try {
        const { data, error: sbError } = await supabase.auth.signInWithPassword({
          email: cleanEmail,
          password
        });
        if (sbError) throw sbError;

        const userObj = {
          id: data.user.id,
          email: data.user.email,
          role: 'Super Administrator',
          isSupabaseAuth: true
        };
        setAdminUser(userObj);
        const storage = remember ? localStorage : sessionStorage;
        storage.setItem(SESSION_KEY, JSON.stringify(userObj));
        await logAuditEvent('ADMIN_LOGIN', 'admin_users', data.user.id, `Admin ${cleanEmail} authenticated via Supabase Auth`);
        setLoading(false);
        return { success: true };
      } catch (err) {
        console.warn('Supabase login failed, checking local credentials fallback:', err);
      }
    }

    // 2. Local Fallback Verification (Staging / Development credentials)
    const validUser = (import.meta.env.VITE_ADMIN_DEFAULT_USER || 'admin@irinfotech.in').toLowerCase();
    const validPass = import.meta.env.VITE_ADMIN_DEFAULT_PASS || 'IRIT@2026#Admin';

    if (cleanEmail === validUser && password === validPass) {
      const userObj = {
        id: 'admin_master_1',
        email: cleanEmail,
        role: 'Chief Administrator',
        isSupabaseAuth: false,
        loginAt: new Date().toISOString()
      };
      setAdminUser(userObj);
      const storage = remember ? localStorage : sessionStorage;
      storage.setItem(SESSION_KEY, JSON.stringify(userObj));
      await logAuditEvent('ADMIN_LOGIN', 'admin_users', 'master', `Admin ${cleanEmail} logged in successfully`);
      setLoading(false);
      return { success: true };
    }

    setLoading(false);
    const errMessage = 'Invalid administrative credentials. Access restricted to authorized personnel.';
    setError(errMessage);
    return { success: false, error: errMessage };
  };

  const logout = async () => {
    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.auth.signOut();
      } catch (err) {
        console.warn('Supabase signOut error:', err);
      }
    }
    if (adminUser) {
      await logAuditEvent('ADMIN_LOGOUT', 'admin_users', adminUser.id || 'admin', `Admin ${adminUser.email} logged out`);
    }
    setAdminUser(null);
    sessionStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(SESSION_KEY);
  };

  return (
    <AdminAuthContext.Provider value={{
      adminUser,
      isAuthenticated: Boolean(adminUser),
      loading,
      error,
      login,
      logout
    }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
}
