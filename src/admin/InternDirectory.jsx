import React, { useState, useEffect } from 'react';
import { Search, Filter, Plus, UserPlus, Eye, FileText, Award, MoreVertical, Edit2, Trash2, ArrowUpDown, CheckCircle, ExternalLink } from 'lucide-react';
import { getInterns, deleteIntern } from '../services/db';

const STATUS_COLORS = {
  Selected: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Offer Sent': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  Active: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Completed: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  Withdrawn: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  Terminated: 'bg-red-500/10 text-red-400 border-red-500/20'
};

export default function InternDirectory({
  onOpenAddIntern,
  onOpenProfile,
  onOpenOffer,
  onOpenCertificate
}) {
  const [interns, setInterns] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');
  const [domainFilter, setDomainFilter] = useState('ALL');
  const [collegeFilter, setCollegeFilter] = useState('ALL');
  const [yearFilter, setYearFilter] = useState('ALL');
  const [sortBy, setSortBy] = useState('created_at');
  const [sortOrder, setSortOrder] = useState('desc');

  // Filter option collections
  const [domainOptions, setDomainOptions] = useState([]);
  const [collegeOptions, setCollegeOptions] = useState([]);
  const [yearOptions, setYearOptions] = useState([]);

  const loadData = async () => {
    setLoading(true);
    const all = await getInterns();
    
    // Extract filter sets
    const dSet = new Set();
    const cSet = new Set();
    const ySet = new Set();
    all.forEach(i => {
      if (i.domain) dSet.add(i.domain);
      if (i.college_name) cSet.add(i.college_name);
      if (i.start_date) ySet.add(new Date(i.start_date).getFullYear().toString());
      else if (i.created_at) ySet.add(new Date(i.created_at).getFullYear().toString());
    });
    setDomainOptions(Array.from(dSet));
    setCollegeOptions(Array.from(cSet));
    setYearOptions(Array.from(ySet));

    const filtered = await getInterns({
      search,
      status: statusFilter,
      domain: domainFilter,
      college: collegeFilter,
      year: yearFilter
    }, {
      by: sortBy,
      order: sortOrder
    });

    setInterns(filtered);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, [search, statusFilter, domainFilter, collegeFilter, yearFilter, sortBy, sortOrder]);

  const handleDelete = async (intern, e) => {
    e.stopPropagation();
    if (confirm(`Are you sure you want to remove ${intern.full_name} (${intern.intern_id})?`)) {
      await deleteIntern(intern.id);
      loadData();
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Controls Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold font-tech text-white">
            Internship Roster & Record Directory
          </h2>
          <p className="text-xs text-slate-400">
            Search, manage candidate lifecycles, and generate authenticated credentials across enterprise cohorts.
          </p>
        </div>

        <button
          onClick={onOpenAddIntern}
          className="px-4 py-2 rounded-xl font-tech text-xs tracking-wider uppercase font-semibold text-black bg-cyan-400 hover:bg-cyan-300 transition-colors flex items-center gap-2 shadow-lg shadow-cyan-500/10 cursor-pointer"
        >
          <UserPlus className="w-4 h-4" />
          Add New Intern
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-3xl bg-white/[0.03] border border-white/10 space-y-3">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by intern name, official email, or Intern ID (e.g. IRIT-INT-2026-0001)..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 text-xs"
          />
        </div>

        {/* Filter Dropdowns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2 text-xs">
          <div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full px-2.5 py-1.5 rounded-xl bg-[#090d16] border border-white/10 text-slate-300 focus:outline-none focus:border-cyan-400 text-[11px]"
            >
              <option value="ALL">All Statuses</option>
              <option value="Selected">Selected</option>
              <option value="Offer Sent">Offer Sent</option>
              <option value="Active">Active</option>
              <option value="Completed">Completed</option>
              <option value="Withdrawn">Withdrawn</option>
              <option value="Terminated">Terminated</option>
            </select>
          </div>

          <div>
            <select
              value={domainFilter}
              onChange={(e) => setDomainFilter(e.target.value)}
              className="w-full px-2.5 py-1.5 rounded-xl bg-[#090d16] border border-white/10 text-slate-300 focus:outline-none focus:border-cyan-400 text-[11px]"
            >
              <option value="ALL">All Domains</option>
              {domainOptions.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>

          <div>
            <select
              value={collegeFilter}
              onChange={(e) => setCollegeFilter(e.target.value)}
              className="w-full px-2.5 py-1.5 rounded-xl bg-[#090d16] border border-white/10 text-slate-300 focus:outline-none focus:border-cyan-400 text-[11px]"
            >
              <option value="ALL">All Colleges</option>
              {collegeOptions.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>

          <div>
            <select
              value={yearFilter}
              onChange={(e) => setYearFilter(e.target.value)}
              className="w-full px-2.5 py-1.5 rounded-xl bg-[#090d16] border border-white/10 text-slate-300 focus:outline-none focus:border-cyan-400 text-[11px]"
            >
              <option value="ALL">All Years</option>
              {yearOptions.map(y => <option key={y} value={y}>{y}</option>)}
            </select>
          </div>

          <div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full px-2.5 py-1.5 rounded-xl bg-[#090d16] border border-white/10 text-slate-300 focus:outline-none focus:border-cyan-400 text-[11px]"
            >
              <option value="created_at">Sort: Registration Date</option>
              <option value="start_date">Sort: Start Date</option>
              <option value="full_name">Sort: Candidate Name</option>
            </select>
          </div>

          <div>
            <button
              onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
              className="w-full py-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white flex items-center justify-center gap-1 text-[11px] cursor-pointer"
            >
              <ArrowUpDown className="w-3 h-3 text-cyan-400" />
              {sortOrder === 'desc' ? 'Newest First' : 'Oldest First'}
            </button>
          </div>
        </div>
      </div>

      {/* Interns Table */}
      <div className="rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-white/[0.04] border-b border-white/10 text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-4">Intern ID</th>
                <th className="py-3 px-4">Candidate Name</th>
                <th className="py-3 px-4">Domain / Role</th>
                <th className="py-3 px-4">College / Institute</th>
                <th className="py-3 px-4">Duration & Mode</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-slate-300">
              {interns.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-slate-500">
                    <p className="text-sm font-semibold text-slate-400">No interns found</p>
                    <p className="text-xs text-slate-500 mt-1">Add a new intern or modify your search filters.</p>
                  </td>
                </tr>
              ) : (
                interns.map((intern) => (
                  <tr
                    key={intern.id}
                    onClick={() => onOpenProfile(intern)}
                    className="hover:bg-cyan-950/20 transition-colors cursor-pointer group"
                  >
                    <td className="py-3.5 px-4 font-mono font-bold text-cyan-400 whitespace-nowrap">
                      {intern.intern_id}
                    </td>
                    <td className="py-3.5 px-4 font-medium text-white">
                      <div>{intern.full_name}</div>
                      <div className="text-[11px] text-slate-500">{intern.email}</div>
                    </td>
                    <td className="py-3.5 px-4 text-slate-300 font-medium">
                      {intern.domain}
                    </td>
                    <td className="py-3.5 px-4 text-slate-400 max-w-[180px] truncate" title={intern.college_name}>
                      {intern.college_name}
                    </td>
                    <td className="py-3.5 px-4 text-slate-400 whitespace-nowrap">
                      <div>{intern.duration_months} {parseInt(intern.duration_months, 10) === 1 ? 'Month' : 'Months'} ({intern.internship_mode})</div>
                      <div className="text-[10px] text-slate-500">{intern.start_date} to {intern.end_date}</div>
                    </td>
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${STATUS_COLORS[intern.status] || STATUS_COLORS.Selected}`}>
                        {intern.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right whitespace-nowrap" onClick={(e) => e.stopPropagation()}>
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => onOpenOffer(intern)}
                          title="Generate Offer Letter"
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-cyan-500/20 text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer"
                        >
                          <FileText className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => onOpenCertificate(intern)}
                          title="Issue Certificate (if completed)"
                          className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                            intern.status === 'Completed'
                              ? 'bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400'
                              : 'bg-white/5 text-slate-600 hover:text-slate-400'
                          }`}
                        >
                          <Award className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={() => onOpenProfile(intern)}
                          title="View Full Profile"
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        <button
                          onClick={(e) => handleDelete(intern, e)}
                          title="Delete Intern"
                          className="p-1.5 rounded-lg bg-white/5 hover:bg-red-500/20 text-slate-400 hover:text-red-400 transition-colors cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
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
