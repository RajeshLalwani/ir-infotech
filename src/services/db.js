import { createClient } from '@supabase/supabase-js';

// 1. Initialize Supabase if credentials are provided in environment
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey && !supabaseUrl.includes('your-project'));

export const supabase = isSupabaseConfigured 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// 2. Local Fallback Database State (Reactive & Persistent via LocalStorage)
const STORAGE_PREFIX = 'irit_db_';
const STORAGE_KEYS = {
  SETTINGS: `${STORAGE_PREFIX}settings`,
  INTERNS: `${STORAGE_PREFIX}interns`,
  OFFERS: `${STORAGE_PREFIX}offers`,
  CERTIFICATES: `${STORAGE_PREFIX}certificates`,
  REVISIONS: `${STORAGE_PREFIX}revisions`,
  AUDIT_LOGS: `${STORAGE_PREFIX}audit_logs`,
  ADMIN_SESSION: `${STORAGE_PREFIX}admin_session`
};

export const DEFAULT_COMPANY_SETTINGS = {
  company_name: 'IR InfoTech',
  tagline: 'IDEAS | INNOVATION | IMPACT',
  website: 'https://ir-infotech-three.vercel.app/',
  email: 'info.irinfotech@gmail.com',
  contact_number: '+91 84889 84951',
  address: 'Anand, Gujarat, India - 388001',
  udyam_reg_no: 'UDYAM-GJ-03-0089721',
  offer_prefix: 'IRIT/INT',
  cert_prefix: 'IRIT/CERT',
  intern_prefix: 'IRIT-INT',
  authorized_signatory: 'Rajesh Lalwani, Founder & Director'
};

// Safe JSON parser helper
function getLocalItem(key, defaultValue) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : defaultValue;
  } catch (err) {
    console.error(`Error reading ${key} from storage:`, err);
    return defaultValue;
  }
}

function setLocalItem(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error(`Error writing ${key} to storage:`, err);
  }
}

// Official Initial Seed Records (Assigned Official 001 Intern Credential)
export const DEFAULT_OFFICIAL_INTERN = {
  id: 'intern_2026_0001',
  intern_id: 'IRIT-INT-2026-0001',
  full_name: 'RAHILMAHMAD VASIMMIYA MALEK',
  email: 'rahilmahmad.malek@gmail.com',
  mobile: '+91 84889 84951',
  gender: 'Male',
  college_name: 'Sardar Vallabhbhai Patel Institute of Computer Application',
  university_name: 'Sardar Patel University',
  course_degree: 'Master of Computer Applications (MCA)',
  department: 'Computer Applications',
  current_semester: 'Final Semester',
  domain: 'Software Development Intern',
  start_date: '2026-11-14',
  duration_months: 1,
  end_date: '2026-12-13',
  internship_mode: 'Hybrid',
  internship_type: 'Unpaid',
  stipend_amount: 0,
  assigned_mentor: 'Rajesh Lalwani, Founder & CEO',
  status: 'Offer Sent',
  created_at: '2026-11-07T10:00:00.000Z',
  updated_at: '2026-11-07T10:00:00.000Z'
};

export const DEFAULT_OFFICIAL_OFFER = {
  id: 'offer_2026_0001',
  reference_no: 'IRIT/INT/2026/0001',
  intern_id: 'intern_2026_0001',
  intern_name: 'RAHILMAHMAD VASIMMIYA MALEK',
  issue_date: '2026-11-07',
  acceptance_deadline: '2026-11-08',
  custom_responsibilities: '',
  custom_terms: '',
  status: 'ISSUED',
  revision_count: 1,
  created_at: '2026-11-07T10:00:00.000Z',
  updated_at: '2026-11-07T10:00:00.000Z'
};

export const DEFAULT_OFFICIAL_CERTIFICATE = {
  id: 'cert_2026_0001',
  certificate_id: 'IRIT/CERT/2026/0001',
  intern_id: 'intern_2026_0001',
  intern_name: 'RAHILMAHMAD VASIMMIYA MALEK',
  domain: 'Software Development Intern',
  college_name: 'Sardar Vallabhbhai Patel Institute of Computer Application',
  start_date: '2026-11-14',
  end_date: '2026-12-13',
  duration: '1 Month',
  issue_date: '2026-12-13',
  authorized_signatory: 'Rajesh Lalwani, Founder & CEO',
  status: 'VALID',
  revocation_reason: null,
  revoked_at: null,
  qr_verification_url: 'https://ir-infotech-three.vercel.app/verify-certificate?id=IRIT%2FCERT%2F2026%2F0001',
  created_at: '2026-11-07T10:00:00.000Z',
  updated_at: '2026-11-07T10:00:00.000Z'
};

// Ensure default settings exist in local database
if (!localStorage.getItem(STORAGE_KEYS.SETTINGS)) {
  setLocalItem(STORAGE_KEYS.SETTINGS, DEFAULT_COMPANY_SETTINGS);
}

// Automatically ensure official 001 intern record (RAHILMAHMAD VASIMMIYA MALEK) is seeded
function seedOfficialRecords() {
  const interns = getLocalItem(STORAGE_KEYS.INTERNS, []);
  const existingIdx = interns.findIndex(i => 
    i.intern_id === 'IRIT-INT-2026-0001' || 
    i.intern_id === '001' ||
    i.full_name?.toUpperCase().includes('RAHILMAHMAD')
  );

  if (existingIdx === -1) {
    interns.unshift(DEFAULT_OFFICIAL_INTERN);
  } else {
    interns[existingIdx] = { ...interns[existingIdx], ...DEFAULT_OFFICIAL_INTERN };
  }
  setLocalItem(STORAGE_KEYS.INTERNS, interns);

  const offers = getLocalItem(STORAGE_KEYS.OFFERS, []);
  if (!offers.some(o => o.reference_no === 'IRIT/INT/2026/0001')) {
    offers.unshift(DEFAULT_OFFICIAL_OFFER);
    setLocalItem(STORAGE_KEYS.OFFERS, offers);
  }

  const certs = getLocalItem(STORAGE_KEYS.CERTIFICATES, []);
  if (!certs.some(c => c.certificate_id === 'IRIT/CERT/2026/0001')) {
    certs.unshift(DEFAULT_OFFICIAL_CERTIFICATE);
    setLocalItem(STORAGE_KEYS.CERTIFICATES, certs);
  }

  if (!localStorage.getItem(STORAGE_KEYS.REVISIONS)) {
    setLocalItem(STORAGE_KEYS.REVISIONS, []);
  }
  if (!localStorage.getItem(STORAGE_KEYS.AUDIT_LOGS)) {
    setLocalItem(STORAGE_KEYS.AUDIT_LOGS, []);
  }
}
try {
  seedOfficialRecords();
} catch (e) {
  console.warn('Seeding official records fallback:', e);
}

// Helper: Record Audit Log
export async function logAuditEvent(action, entity, entityId, details, performedBy = 'Administrator') {
  const logEntry = {
    id: `audit_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
    action,
    entity,
    entity_id: entityId,
    performed_by: performedBy,
    details,
    created_at: new Date().toISOString()
  };

  if (isSupabaseConfigured) {
    try {
      await supabase.from('audit_logs').insert([logEntry]);
    } catch (e) {
      console.warn('Supabase audit log insert failed, logging locally:', e);
    }
  }

  // Always keep in local state for fast UI rendering
  const logs = getLocalItem(STORAGE_KEYS.AUDIT_LOGS, []);
  logs.unshift(logEntry);
  setLocalItem(STORAGE_KEYS.AUDIT_LOGS, logs.slice(0, 500)); // Keep last 500
  return logEntry;
}

// ------------------------------------------------------------------------------
// COMPANY SETTINGS API
// ------------------------------------------------------------------------------
export async function getCompanySettings() {
  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabase.from('company_settings').select('*').limit(1).single();
      if (!error && data) return data;
    } catch (e) {
      console.warn('Supabase getCompanySettings fallback to local:', e);
    }
  }
  return getLocalItem(STORAGE_KEYS.SETTINGS, DEFAULT_COMPANY_SETTINGS);
}

export async function updateCompanySettings(updates) {
  if (isSupabaseConfigured) {
    try {
      await supabase.from('company_settings').upsert([updates]);
    } catch (e) {
      console.warn('Supabase updateCompanySettings fallback to local:', e);
    }
  }
  const current = getLocalItem(STORAGE_KEYS.SETTINGS, DEFAULT_COMPANY_SETTINGS);
  const updated = { ...current, ...updates, updated_at: new Date().toISOString() };
  setLocalItem(STORAGE_KEYS.SETTINGS, updated);
  await logAuditEvent('UPDATE_SETTINGS', 'company_settings', '1', 'Updated company profile and document configurations');
  return updated;
}

// ------------------------------------------------------------------------------
// DASHBOARD STATS API (Calculated strictly from real database records)
// ------------------------------------------------------------------------------
export async function getDashboardStats() {
  const interns = await getInterns();
  const certificates = await getCertificates();
  const offers = await getOfferLetters();

  const total = interns.length;
  const active = interns.filter(i => i.status === 'Active').length;
  const selected = interns.filter(i => i.status === 'Selected' || i.status === 'Offer Sent').length;
  const completed = interns.filter(i => i.status === 'Completed').length;
  const certificatesIssued = certificates.filter(c => c.status === 'VALID').length;
  const pendingCompletion = interns.filter(i => i.status === 'Active').length;

  return {
    total,
    active,
    selected,
    completed,
    certificatesIssued,
    pendingCompletion,
    totalOffers: offers.length
  };
}

// ------------------------------------------------------------------------------
// INTERNS MANAGEMENT API
// ------------------------------------------------------------------------------
export async function getInterns(filters = {}, sort = { by: 'created_at', order: 'desc' }) {
  let list = [];
  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabase.from('interns').select('*');
      if (!error && data) list = data;
    } catch (e) {
      console.warn('Supabase getInterns fallback to local:', e);
    }
  }
  if (!list.length) {
    list = getLocalItem(STORAGE_KEYS.INTERNS, []);
  }

  // Filter application
  let result = [...list];
  if (filters.search) {
    const q = filters.search.toLowerCase().trim();
    result = result.filter(i => 
      (i.full_name && i.full_name.toLowerCase().includes(q)) ||
      (i.email && i.email.toLowerCase().includes(q)) ||
      (i.intern_id && i.intern_id.toLowerCase().includes(q)) ||
      (i.college_name && i.college_name.toLowerCase().includes(q))
    );
  }

  if (filters.domain && filters.domain !== 'ALL') {
    result = result.filter(i => i.domain === filters.domain);
  }

  if (filters.college && filters.college !== 'ALL') {
    result = result.filter(i => i.college_name === filters.college);
  }

  if (filters.status && filters.status !== 'ALL') {
    result = result.filter(i => i.status === filters.status);
  }

  if (filters.year && filters.year !== 'ALL') {
    result = result.filter(i => {
      const startYear = new Date(i.start_date || i.created_at).getFullYear().toString();
      return startYear === filters.year;
    });
  }

  // Sorting
  result.sort((a, b) => {
    const valA = new Date(a[sort.by] || 0).getTime();
    const valB = new Date(b[sort.by] || 0).getTime();
    return sort.order === 'asc' ? valA - valB : valB - valA;
  });

  return result;
}

export async function getInternById(id) {
  const interns = await getInterns();
  const clean = String(id).trim().toUpperCase();
  return interns.find(i => 
    i.id === id || 
    i.intern_id === id ||
    i.intern_id?.toUpperCase() === clean ||
    (clean === '001' && i.intern_id?.includes('0001')) ||
    (clean === '0001' && i.intern_id?.includes('0001')) ||
    i.full_name?.toUpperCase().includes(clean)
  ) || null;
}

// Auto-generate sequential unique Intern ID: IRIT-INT-2026-0001
export async function generateNextInternId() {
  const interns = getLocalItem(STORAGE_KEYS.INTERNS, []);
  const settings = await getCompanySettings();
  const currentYear = new Date().getFullYear();
  const prefix = `${settings.intern_prefix || 'IRIT-INT'}-${currentYear}-`;

  // Find all current sequential numbers
  let maxSeq = 0;
  interns.forEach(intern => {
    if (intern.intern_id && intern.intern_id.startsWith(prefix)) {
      const seqStr = intern.intern_id.replace(prefix, '');
      const seqNum = parseInt(seqStr, 10);
      if (!isNaN(seqNum) && seqNum > maxSeq) {
        maxSeq = seqNum;
      }
    }
  });

  const nextSeq = String(maxSeq + 1).padStart(4, '0');
  return `${prefix}${nextSeq}`;
}

export async function addIntern(formData) {
  // Validate duplicate email
  const existing = await getInterns();
  const emailDuplicate = existing.find(i => i.email.toLowerCase().trim() === formData.email.toLowerCase().trim());
  if (emailDuplicate) {
    throw new Error(`An intern with email ${formData.email} is already registered (ID: ${emailDuplicate.intern_id}).`);
  }

  const internId = await generateNextInternId();
  const newIntern = {
    id: `intern_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
    intern_id: internId,
    ...formData,
    status: formData.status || 'Selected',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };

  if (isSupabaseConfigured) {
    try {
      await supabase.from('interns').insert([newIntern]);
    } catch (e) {
      console.warn('Supabase addIntern fallback to local:', e);
    }
  }

  const interns = getLocalItem(STORAGE_KEYS.INTERNS, []);
  interns.unshift(newIntern);
  setLocalItem(STORAGE_KEYS.INTERNS, interns);

  await logAuditEvent('REGISTER_INTERN', 'interns', internId, `Registered new intern ${newIntern.full_name} (${newIntern.domain})`);
  return newIntern;
}

export async function updateIntern(id, updates) {
  const interns = getLocalItem(STORAGE_KEYS.INTERNS, []);
  const index = interns.findIndex(i => i.id === id || i.intern_id === id);
  if (index === -1) throw new Error('Intern record not found');

  const oldStatus = interns[index].status;
  const updated = {
    ...interns[index],
    ...updates,
    updated_at: new Date().toISOString()
  };

  interns[index] = updated;
  setLocalItem(STORAGE_KEYS.INTERNS, interns);

  if (isSupabaseConfigured) {
    try {
      await supabase.from('interns').update(updates).eq('id', updated.id);
    } catch (e) {
      console.warn('Supabase updateIntern fallback to local:', e);
    }
  }

  let auditNote = `Updated details for ${updated.full_name}`;
  if (updates.status && updates.status !== oldStatus) {
    auditNote = `Status changed from ${oldStatus} to ${updates.status} for ${updated.full_name}`;
  }

  await logAuditEvent('UPDATE_INTERN', 'interns', updated.intern_id, auditNote);
  return updated;
}

export async function deleteIntern(id) {
  const interns = getLocalItem(STORAGE_KEYS.INTERNS, []);
  const target = interns.find(i => i.id === id || i.intern_id === id);
  if (!target) throw new Error('Intern record not found');

  const filtered = interns.filter(i => i.id !== id && i.intern_id !== id);
  setLocalItem(STORAGE_KEYS.INTERNS, filtered);

  if (isSupabaseConfigured) {
    try {
      await supabase.from('interns').delete().eq('id', target.id);
    } catch (e) {
      console.warn('Supabase deleteIntern fallback to local:', e);
    }
  }

  await logAuditEvent('DELETE_INTERN', 'interns', target.intern_id, `Removed intern record ${target.full_name}`);
  return target;
}

// ------------------------------------------------------------------------------
// OFFER LETTER API
// ------------------------------------------------------------------------------
export async function getOfferLetters(internId = null) {
  let list = [];
  if (isSupabaseConfigured) {
    try {
      let query = supabase.from('offer_letters').select('*');
      if (internId) query = query.eq('intern_id', internId);
      const { data, error } = await query;
      if (!error && data) list = data;
    } catch (e) {
      console.warn('Supabase getOfferLetters fallback to local:', e);
    }
  }
  if (!list.length) {
    list = getLocalItem(STORAGE_KEYS.OFFERS, []);
  }
  if (internId) {
    return list.filter(o => o.intern_id === internId);
  }
  return list;
}

// Auto-generate sequential reference number: IRIT/INT/2026/0001
export async function generateNextOfferReference() {
  const offers = getLocalItem(STORAGE_KEYS.OFFERS, []);
  const settings = await getCompanySettings();
  const currentYear = new Date().getFullYear();
  const prefix = `${settings.offer_prefix || 'IRIT/INT'}/${currentYear}/`;

  let maxSeq = 0;
  offers.forEach(o => {
    if (o.reference_no && o.reference_no.startsWith(prefix)) {
      const seqStr = o.reference_no.replace(prefix, '');
      const seqNum = parseInt(seqStr, 10);
      if (!isNaN(seqNum) && seqNum > maxSeq) {
        maxSeq = seqNum;
      }
    }
  });

  const nextSeq = String(maxSeq + 1).padStart(4, '0');
  return `${prefix}${nextSeq}`;
}

export async function createOfferLetter(internId, options = {}) {
  const intern = await getInternById(internId);
  if (!intern) throw new Error('Intern not found');

  const refNo = options.reference_no || await generateNextOfferReference();
  const newOffer = {
    id: `offer_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
    reference_no: refNo,
    intern_id: intern.id,
    intern_name: intern.full_name,
    issue_date: options.issue_date || new Date().toISOString().split('T')[0],
    custom_responsibilities: options.custom_responsibilities || '',
    custom_terms: options.custom_terms || '',
    status: 'ISSUED',
    revision_count: 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };

  if (isSupabaseConfigured) {
    try {
      await supabase.from('offer_letters').insert([newOffer]);
    } catch (e) {
      console.warn('Supabase createOfferLetter fallback to local:', e);
    }
  }

  const offers = getLocalItem(STORAGE_KEYS.OFFERS, []);
  offers.unshift(newOffer);
  setLocalItem(STORAGE_KEYS.OFFERS, offers);

  // Update intern status to 'Offer Sent' if currently 'Selected'
  if (intern.status === 'Selected') {
    await updateIntern(intern.id, { status: 'Offer Sent' });
  }

  await logAuditEvent('GENERATE_OFFER_LETTER', 'offer_letters', refNo, `Issued Offer Letter for ${intern.full_name} (${refNo})`);
  return newOffer;
}

// ------------------------------------------------------------------------------
// CERTIFICATE MANAGEMENT & PUBLIC VERIFICATION API
// ------------------------------------------------------------------------------
export async function getCertificates(internId = null) {
  let list = [];
  if (isSupabaseConfigured) {
    try {
      let query = supabase.from('certificates').select('*');
      if (internId) query = query.eq('intern_id', internId);
      const { data, error } = await query;
      if (!error && data) list = data;
    } catch (e) {
      console.warn('Supabase getCertificates fallback to local:', e);
    }
  }
  if (!list.length) {
    list = getLocalItem(STORAGE_KEYS.CERTIFICATES, []);
  }
  if (internId) {
    return list.filter(c => c.intern_id === internId);
  }
  return list;
}

// Auto-generate sequential Certificate ID: IRIT/CERT/2026/0001
export async function generateNextCertificateId() {
  const certificates = getLocalItem(STORAGE_KEYS.CERTIFICATES, []);
  const settings = await getCompanySettings();
  const currentYear = new Date().getFullYear();
  const prefix = `${settings.cert_prefix || 'IRIT/CERT'}/${currentYear}/`;

  let maxSeq = 0;
  certificates.forEach(c => {
    if (c.certificate_id && c.certificate_id.startsWith(prefix)) {
      const seqStr = c.certificate_id.replace(prefix, '');
      const seqNum = parseInt(seqStr, 10);
      if (!isNaN(seqNum) && seqNum > maxSeq) {
        maxSeq = seqNum;
      }
    }
  });

  const nextSeq = String(maxSeq + 1).padStart(4, '0');
  return `${prefix}${nextSeq}`;
}

export async function issueCertificate(internId, options = {}) {
  const intern = await getInternById(internId);
  if (!intern) throw new Error('Intern record not found');

  // Business Rule: Certificate generation must only be permitted after the administrator marks the internship as successfully completed
  if (intern.status !== 'Completed' && !options.overrideCompleted) {
    throw new Error('Certificates can only be issued to interns whose status is marked as "Completed".');
  }

  const certId = options.certificate_id || await generateNextCertificateId();
  const settings = await getCompanySettings();
  const baseUrl = settings.website || 'https://ir-infotech-three.vercel.app/';
  const cleanBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  const qrVerificationUrl = `${cleanBase}/verify-certificate?id=${encodeURIComponent(certId)}`;

  const newCertificate = {
    id: `cert_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
    certificate_id: certId,
    intern_id: intern.id,
    intern_name: intern.full_name,
    domain: intern.domain,
    college_name: intern.college_name,
    start_date: intern.start_date,
    end_date: intern.end_date,
    duration: `${intern.duration_months} Months`,
    issue_date: options.issue_date || new Date().toISOString().split('T')[0],
    authorized_signatory: settings.authorized_signatory || 'Rajesh Lalwani, Founder & Director',
    status: 'VALID',
    revocation_reason: null,
    revoked_at: null,
    qr_verification_url: qrVerificationUrl,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };

  if (isSupabaseConfigured) {
    try {
      await supabase.from('certificates').insert([newCertificate]);
    } catch (e) {
      console.warn('Supabase issueCertificate fallback to local:', e);
    }
  }

  const certificates = getLocalItem(STORAGE_KEYS.CERTIFICATES, []);
  certificates.unshift(newCertificate);
  setLocalItem(STORAGE_KEYS.CERTIFICATES, certificates);

  await logAuditEvent('ISSUE_CERTIFICATE', 'certificates', certId, `Issued completion certificate ${certId} to ${intern.full_name}`);
  return newCertificate;
}

// Revoke Certificate API
export async function revokeCertificate(certId, reason) {
  if (!reason || !reason.trim()) {
    throw new Error('A recorded reason is mandatory to revoke a certificate.');
  }

  const certificates = getLocalItem(STORAGE_KEYS.CERTIFICATES, []);
  const index = certificates.findIndex(c => c.certificate_id === certId || c.id === certId);
  if (index === -1) throw new Error('Certificate record not found.');

  const cert = certificates[index];
  cert.status = 'REVOKED';
  cert.revocation_reason = reason.trim();
  cert.revoked_at = new Date().toISOString();
  cert.updated_at = new Date().toISOString();

  certificates[index] = cert;
  setLocalItem(STORAGE_KEYS.CERTIFICATES, certificates);

  if (isSupabaseConfigured) {
    try {
      await supabase.from('certificates').update({
        status: 'REVOKED',
        revocation_reason: reason.trim(),
        revoked_at: cert.revoked_at
      }).eq('certificate_id', cert.certificate_id);
    } catch (e) {
      console.warn('Supabase revokeCertificate fallback to local:', e);
    }
  }

  await logAuditEvent('REVOKE_CERTIFICATE', 'certificates', cert.certificate_id, `Revoked certificate ${cert.certificate_id}. Reason: ${reason.trim()}`);
  return cert;
}

// Reissue Certificate with Revision History
export async function reissueCertificate(certId, updatedData, changeReason) {
  if (!changeReason || !changeReason.trim()) {
    throw new Error('A recorded reason is required to reissue/update a certificate.');
  }

  const certificates = getLocalItem(STORAGE_KEYS.CERTIFICATES, []);
  const index = certificates.findIndex(c => c.certificate_id === certId || c.id === certId);
  if (index === -1) throw new Error('Certificate not found');

  const oldCert = certificates[index];

  // Save previous snapshot in revisions
  const revisions = getLocalItem(STORAGE_KEYS.REVISIONS, []);
  const revEntry = {
    id: `rev_${Date.now()}`,
    certificate_id: oldCert.id,
    certificate_code: oldCert.certificate_id,
    revision_number: revisions.filter(r => r.certificate_id === oldCert.id).length + 1,
    changed_reason: changeReason.trim(),
    changed_by: 'Administrator',
    previous_data: { ...oldCert },
    created_at: new Date().toISOString()
  };
  revisions.unshift(revEntry);
  setLocalItem(STORAGE_KEYS.REVISIONS, revisions);

  // Update certificate
  const updated = {
    ...oldCert,
    ...updatedData,
    updated_at: new Date().toISOString()
  };
  certificates[index] = updated;
  setLocalItem(STORAGE_KEYS.CERTIFICATES, certificates);

  await logAuditEvent('REISSUE_CERTIFICATE', 'certificates', oldCert.certificate_id, `Reissued certificate with corrections: ${changeReason.trim()}`);
  return updated;
}

// ------------------------------------------------------------------------------
// PUBLIC VERIFICATION ENDPOINT
// Strips confidential internal details and returns ONLY public verification fields
// ------------------------------------------------------------------------------
export async function verifyCertificatePublicly(searchId) {
  if (!searchId || !searchId.trim()) {
    return { status: 'NOT_FOUND', message: 'Please enter a valid Certificate ID.' };
  }

  const cleanId = searchId.trim().toUpperCase();

  // Try Supabase first if configured
  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabase
        .from('certificates')
        .select('certificate_id, intern_name, domain, college_name, start_date, end_date, duration, issue_date, status, revocation_reason')
        .eq('certificate_id', cleanId)
        .single();

      if (!error && data) {
        if (data.status === 'REVOKED') {
          return {
            status: 'REVOKED',
            certificate_id: data.certificate_id,
            intern_name: data.intern_name,
            domain: data.domain,
            issue_date: data.issue_date,
            revocation_reason: data.revocation_reason || 'Certificate revoked by administrative authority.'
          };
        }
        return {
          status: 'VALID',
          certificate_id: data.certificate_id,
          intern_name: data.intern_name,
          domain: data.domain,
          college_name: data.college_name,
          start_date: data.start_date,
          end_date: data.end_date,
          duration: data.duration,
          issue_date: data.issue_date,
          authorized_signatory: 'Rajesh Lalwani, Founder & Director'
        };
      }
    } catch (e) {
      console.warn('Supabase verify lookup fallback to local:', e);
    }
  }

  // Local storage lookup
  const certs = getLocalItem(STORAGE_KEYS.CERTIFICATES, []);
  const match = certs.find(c => 
    (c.certificate_id && c.certificate_id.trim().toUpperCase() === cleanId) ||
    (cleanId === '001' && c.certificate_id?.includes('0001')) ||
    (cleanId === 'IRIT-INT-2026-0001' && c.certificate_id?.includes('0001')) ||
    (cleanId === 'IRIT/INT/2026/0001' && c.certificate_id?.includes('0001')) ||
    (c.intern_name && c.intern_name.trim().toUpperCase() === cleanId)
  );

  if (!match) {
    return {
      status: 'NOT_FOUND',
      message: `No authentic credential found with Certificate ID: ${searchId}`
    };
  }

  if (match.status === 'REVOKED') {
    return {
      status: 'REVOKED',
      certificate_id: match.certificate_id,
      intern_name: match.intern_name,
      domain: match.domain,
      issue_date: match.issue_date,
      revocation_reason: match.revocation_reason || 'This certificate has been formally revoked by IR InfoTech authority.'
    };
  }

  return {
    status: 'VALID',
    certificate_id: match.certificate_id,
    intern_name: match.intern_name,
    domain: match.domain,
    college_name: match.college_name,
    start_date: match.start_date,
    end_date: match.end_date,
    duration: match.duration,
    issue_date: match.issue_date,
    authorized_signatory: match.authorized_signatory || 'Rajesh Lalwani, Founder & Director'
  };
}

// ------------------------------------------------------------------------------
// AUDIT LOGS RETRIEVAL
// ------------------------------------------------------------------------------
export async function getAuditLogs() {
  if (isSupabaseConfigured) {
    try {
      const { data, error } = await supabase.from('audit_logs').select('*').order('created_at', { ascending: false }).limit(200);
      if (!error && data) return data;
    } catch (e) {
      console.warn('Supabase getAuditLogs fallback:', e);
    }
  }
  return getLocalItem(STORAGE_KEYS.AUDIT_LOGS, []);
}

// ------------------------------------------------------------------------------
// EXPORT INTERNS DATA (CSV)
// ------------------------------------------------------------------------------
export async function exportInternsToCSV(filters = {}) {
  const interns = await getInterns(filters);
  if (!interns.length) return null;

  const headers = [
    'Intern ID', 'Full Name', 'Email', 'Mobile', 'College Name',
    'Course/Degree', 'Department', 'Domain', 'Start Date', 'End Date',
    'Duration (Months)', 'Mode', 'Type', 'Stipend Amount', 'Status', 'Registered Date'
  ];

  const rows = interns.map(i => [
    `"${i.intern_id || ''}"`,
    `"${i.full_name || ''}"`,
    `"${i.email || ''}"`,
    `"${i.mobile || ''}"`,
    `"${i.college_name || ''}"`,
    `"${i.course_degree || ''}"`,
    `"${i.department || ''}"`,
    `"${i.domain || ''}"`,
    `"${i.start_date || ''}"`,
    `"${i.end_date || ''}"`,
    `"${i.duration_months || ''}"`,
    `"${i.internship_mode || ''}"`,
    `"${i.internship_type || ''}"`,
    `"${i.stipend_amount || 0}"`,
    `"${i.status || ''}"`,
    `"${i.created_at ? i.created_at.split('T')[0] : ''}"`
  ]);

  const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  return csvContent;
}
