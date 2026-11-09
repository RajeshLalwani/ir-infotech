import React, { useState, useEffect } from 'react';
import { Download, FileSpreadsheet, Filter, CheckCircle2, AlertCircle, Database } from 'lucide-react';
import { getInterns, exportInternsToCSV } from '../services/db';

export default function ExportData() {
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [domainFilter, setDomainFilter] = useState('ALL');
  const [yearFilter, setYearFilter] = useState('ALL');
  const [loading, setLoading] = useState(false);
  const [previewCount, setPreviewCount] = useState(0);

  // Available options
  const [domains, setDomains] = useState([]);
  const [years, setYears] = useState([]);

  useEffect(() => {
    getInterns().then(all => {
      const dSet = new Set();
      const ySet = new Set();
      all.forEach(i => {
        if (i.domain) dSet.add(i.domain);
        if (i.start_date) ySet.add(new Date(i.start_date).getFullYear().toString());
        else if (i.created_at) ySet.add(new Date(i.created_at).getFullYear().toString());
      });
      setDomains(Array.from(dSet));
      setYears(Array.from(ySet));
    });
  }, []);

  useEffect(() => {
    getInterns({
      status: statusFilter,
      domain: domainFilter,
      year: yearFilter
    }).then(list => setPreviewCount(list.length));
  }, [statusFilter, domainFilter, yearFilter]);

  const handleExportCSV = async () => {
    setLoading(true);
    try {
      const csv = await exportInternsToCSV({
        status: statusFilter,
        domain: domainFilter,
        year: yearFilter
      });

      if (!csv) {
        alert('No intern records match the selected filter criteria.');
        setLoading(false);
        return;
      }

      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', `IR_InfoTech_Interns_Export_${statusFilter}_${new Date().toISOString().split('T')[0]}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      alert('Export failed: ' + err.message);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold font-tech text-white flex items-center gap-2">
          <FileSpreadsheet className="w-5 h-5 text-cyan-400" />
          Export Intern Database Records
        </h2>
        <p className="text-xs text-slate-400">
          Generate secured and structured CSV / Spreadsheet exports of candidate profiles, internship lifecycles, and verification logs.
        </p>
      </div>

      {/* Export Filters Panel */}
      <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/10 space-y-6">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 border-b border-white/5 pb-2">
          <Filter className="w-4 h-4" />
          Filter Export Dataset
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div>
            <label className="text-slate-300 block mb-1 font-medium">Internship Status</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-[#090d16] border border-white/10 text-white focus:outline-none focus:border-cyan-400"
            >
              <option value="ALL">All Statuses (Complete Roster)</option>
              <option value="Active">Active Interns Only</option>
              <option value="Completed">Completed Interns Only</option>
              <option value="Selected">Selected Candidates</option>
              <option value="Offer Sent">Offer Sent Candidates</option>
              <option value="Withdrawn">Withdrawn</option>
              <option value="Terminated">Terminated</option>
            </select>
          </div>

          <div>
            <label className="text-slate-300 block mb-1 font-medium">Technical Domain</label>
            <select
              value={domainFilter}
              onChange={(e) => setDomainFilter(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-[#090d16] border border-white/10 text-white focus:outline-none focus:border-cyan-400"
            >
              <option value="ALL">All Domains</option>
              {domains.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-slate-300 block mb-1 font-medium">Joining / Enrollment Year</label>
            <select
              value={yearFilter}
              onChange={(e) => setYearFilter(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-[#090d16] border border-white/10 text-white focus:outline-none focus:border-cyan-400"
            >
              <option value="ALL">All Years</option>
              {years.map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Selected Record Count Indicator */}
        <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Database className="w-5 h-5 text-cyan-400" />
            <div>
              <p className="text-sm font-bold text-white">
                {previewCount} Matching Records Selected
              </p>
              <p className="text-xs text-slate-400">
                Exports conform to administrative data retention and privacy policies.
              </p>
            </div>
          </div>

          <button
            onClick={handleExportCSV}
            disabled={loading || previewCount === 0}
            className="px-5 py-2.5 rounded-xl font-tech text-xs tracking-wider uppercase font-semibold text-black bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center gap-2 shadow-lg shadow-cyan-500/10 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <Download className="w-4 h-4" />
            {loading ? 'Exporting...' : 'Download CSV Dataset'}
          </button>
        </div>
      </div>
    </div>
  );
}
