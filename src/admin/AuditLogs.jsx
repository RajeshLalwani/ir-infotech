import React, { useState, useEffect } from 'react';
import { History, Shield, Clock, Search, RefreshCw, FileText } from 'lucide-react';
import { getAuditLogs } from '../services/db';

export default function AuditLogs() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');

  const fetchLogs = async () => {
    setLoading(true);
    const data = await getAuditLogs();
    setLogs(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchLogs();
  }, []);

  const filteredLogs = logs.filter(l => 
    (l.action && l.action.toLowerCase().includes(search.toLowerCase())) ||
    (l.details && l.details.toLowerCase().includes(search.toLowerCase())) ||
    (l.entity_id && l.entity_id.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold font-tech text-white flex items-center gap-2">
            <History className="w-5 h-5 text-cyan-400" />
            Administrative Audit Trail & Security Logs
          </h2>
          <p className="text-xs text-slate-400">
            Immutable log of all candidate registrations, document issuances, certificate revocations, and system updates.
          </p>
        </div>

        <button
          onClick={fetchLogs}
          disabled={loading}
          className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-white/5 border border-white/10 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          Refresh Audit Trail
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Filter audit events by action, intern ID, or keyword..."
          className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 text-xs"
        />
      </div>

      {/* Logs Table */}
      <div className="rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-white/[0.04] border-b border-white/10 text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-4">Timestamp</th>
                <th className="py-3 px-4">Action</th>
                <th className="py-3 px-4">Target Entity</th>
                <th className="py-3 px-4">Identifier / Ref</th>
                <th className="py-3 px-4">Operator</th>
                <th className="py-3 px-4">Audit Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              {filteredLogs.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-8 text-center text-slate-500">
                    No matching audit log records found.
                  </td>
                </tr>
              ) : (
                filteredLogs.map((log) => (
                  <tr key={log.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-3 px-4 whitespace-nowrap text-slate-400 font-mono text-[11px]">
                      {new Date(log.created_at).toLocaleString()}
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-950/40 text-cyan-300 border border-cyan-500/20">
                        {log.action}
                      </span>
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap text-slate-400">
                      {log.entity}
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap font-mono text-cyan-400">
                      {log.entity_id || '—'}
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap text-slate-400">
                      {log.performed_by || 'Admin'}
                    </td>
                    <td className="py-3 px-4 text-slate-300 max-w-md truncate" title={log.details}>
                      {log.details}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
