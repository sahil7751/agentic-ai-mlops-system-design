import React from 'react';
import { motion } from 'motion/react';
import { 
  BarChart3, 
  CheckCircle2, 
  Database, 
  FileText, 
  History, 
  ShieldCheck, 
  TrendingUp, 
  Workflow,
  ArrowRight,
  Activity,
  AlertCircle
} from 'lucide-react';
import { cn } from '../lib/utils';

const GOVERNANCE_METRICS = [
  { label: 'Data Lineage Coverage', value: '98.4%', icon: Workflow, color: 'text-blue-600', bg: 'bg-blue-50' },
  { label: 'Compliance Score', value: '100%', icon: ShieldCheck, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  { label: 'Model Version Count', value: '1,240', icon: History, color: 'text-violet-600', bg: 'bg-violet-50' },
  { label: 'Audit Log Integrity', value: 'VERIFIED', icon: CheckCircle2, color: 'text-amber-600', bg: 'bg-amber-50' },
];

const AUDIT_LOGS = [
  { id: 1, action: 'Model Deployment', user: 'system-admin', time: '2 mins ago', status: 'success' },
  { id: 2, action: 'Data Schema Update', user: 'data-engineer', time: '15 mins ago', status: 'success' },
  { id: 3, action: 'Access Policy Change', user: 'security-lead', time: '1 hour ago', status: 'warning' },
  { id: 4, action: 'Dataset Versioning', user: 'ml-researcher', time: '3 hours ago', status: 'success' },
];

export const GovernanceView: React.FC = () => {
  return (
    <div className="h-full overflow-y-auto p-8 custom-scrollbar bg-white rounded-3xl border border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">Data & Model Governance</h3>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Compliance Dashboard</h2>
          <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-3xl">
            Nexus AI ensures full transparency and accountability through automated data lineage, model versioning, and real-time compliance monitoring.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {GOVERNANCE_METRICS.map((metric, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-[2rem] bg-slate-50 border border-slate-100 flex items-center gap-5 shadow-sm hover:shadow-md transition-all"
            >
              <div className={cn("p-3 rounded-2xl shadow-sm", metric.bg, metric.color)}>
                <metric.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">{metric.label}</p>
                <p className="text-sm font-extrabold text-slate-800">{metric.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Data Lineage Visualization */}
          <div className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 relative overflow-hidden">
            <h4 className="text-sm font-bold text-slate-800 mb-8 uppercase tracking-wider flex items-center gap-2">
              <Workflow className="w-4 h-4 text-blue-500" /> Data Lineage
            </h4>
            
            <div className="space-y-6">
              {[
                { name: 'Raw Ingestion', type: 'S3/GCS', status: 'verified' },
                { name: 'ETL Processing', type: 'Dataflow', status: 'verified' },
                { name: 'Feature Store', type: 'Vertex AI', status: 'verified' },
                { name: 'Model Training', type: 'Training Job', status: 'verified' }
              ].map((step, i, arr) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-blue-500">
                    <Database className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-sm font-bold text-slate-800">{step.name}</h5>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{step.type}</p>
                  </div>
                  {i < arr.length - 1 && (
                    <div className="absolute left-[52px] h-6 w-px bg-slate-200 mt-10" />
                  )}
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                </div>
              ))}
            </div>
          </div>

          {/* Audit Logs */}
          <div className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm overflow-hidden">
            <h4 className="text-sm font-bold text-slate-800 mb-8 uppercase tracking-wider flex items-center gap-2">
              <History className="w-4 h-4 text-violet-500" /> Recent Audit Logs
            </h4>
            
            <div className="space-y-4">
              {AUDIT_LOGS.map((log) => (
                <div key={log.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-4 hover:border-blue-200 transition-colors cursor-pointer group">
                  <div className={cn(
                    "w-2 h-2 rounded-full",
                    log.status === 'success' ? 'bg-emerald-500' : 'bg-amber-500'
                  )} />
                  <div className="flex-1">
                    <h5 className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{log.action}</h5>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{log.user} • {log.time}</p>
                  </div>
                  <FileText className="w-4 h-4 text-slate-300 group-hover:text-slate-400" />
                </div>
              ))}
            </div>
            
            <button className="w-full mt-6 py-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-500 hover:bg-slate-50 hover:text-slate-700 transition-all uppercase tracking-widest">
              View Full Audit History
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
