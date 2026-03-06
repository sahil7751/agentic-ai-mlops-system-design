import React from 'react';
import { motion } from 'motion/react';
import { 
  Activity, 
  BarChart3, 
  Cpu, 
  HardDrive, 
  LineChart, 
  AlertCircle, 
  CheckCircle2, 
  Zap,
  Clock,
  Database
} from 'lucide-react';
import { cn } from '../lib/utils';

const SYSTEM_METRICS = [
  { label: 'CPU Usage', value: '42%', status: 'normal', icon: Cpu },
  { label: 'Memory', value: '12.4 GB', status: 'normal', icon: Database },
  { label: 'Latency', value: '124ms', status: 'warning', icon: Clock },
  { label: 'Throughput', value: '8.2k req/s', status: 'normal', icon: Zap },
];

const MODEL_PERFORMANCE = [
  { name: 'Nexus-v4-Large', accuracy: '98.2%', drift: '0.02%', status: 'healthy' },
  { name: 'Nexus-v4-Flash', accuracy: '94.5%', drift: '0.05%', status: 'healthy' },
  { name: 'Agent-Reasoning-v1', accuracy: '91.8%', drift: '0.12%', status: 'warning' },
];

export const MonitoringView: React.FC = () => {
  return (
    <div className="h-full overflow-y-auto p-8 custom-scrollbar bg-white rounded-3xl border border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">Observability & Health</h3>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">System Monitoring</h2>
          <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-3xl">
            Real-time telemetry and model performance tracking across the entire Nexus AI ecosystem.
          </p>
        </div>

        {/* Real-time Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {SYSTEM_METRICS.map((metric, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-[2rem] bg-slate-50 border border-slate-100 shadow-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-white text-[#2A6EF3] shadow-sm">
                  <metric.icon className="w-6 h-6" />
                </div>
                <div className={cn(
                  "w-2 h-2 rounded-full animate-pulse",
                  metric.status === 'normal' ? 'bg-emerald-500' : 'bg-amber-500'
                )} />
              </div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{metric.label}</p>
              <p className="text-2xl font-black text-slate-800 tracking-tight">{metric.value}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Model Health Table */}
          <div className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm">
            <h4 className="text-sm font-bold text-slate-800 mb-8 uppercase tracking-wider flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#2A6EF3]" /> Model Performance
            </h4>
            <div className="space-y-4">
              {MODEL_PERFORMANCE.map((model, i) => (
                <div key={i} className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between group hover:border-blue-200 transition-all">
                  <div>
                    <h5 className="text-sm font-bold text-slate-800 mb-1">{model.name}</h5>
                    <div className="flex gap-4">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Acc: {model.accuracy}</span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Drift: {model.drift}</span>
                    </div>
                  </div>
                  <div className={cn(
                    "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest",
                    model.status === 'healthy' ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
                  )}>
                    {model.status}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Anomaly Detection Log */}
          <div className="p-8 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-[0.03] rounded-full -mr-32 -mt-32" />
            <h4 className="text-sm font-bold text-blue-200 mb-8 uppercase tracking-wider flex items-center gap-2">
              <AlertCircle className="w-4 h-4" /> Anomaly Detection
            </h4>
            <div className="space-y-4 font-mono text-[11px]">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-emerald-400">
                [21:24:02] INFO: Model registry sync completed.
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-amber-400">
                [21:24:05] WARN: Latency spike detected in US-EAST-1.
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-emerald-400">
                [21:24:08] INFO: Auto-scaling triggered: +2 nodes.
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-rose-400">
                [21:24:10] CRIT: Unauthorized API access attempt blocked.
              </div>
            </div>
            <button className="w-full mt-8 py-3 rounded-xl bg-white/10 border border-white/20 text-[10px] font-bold uppercase tracking-widest hover:bg-white/20 transition-all">
              View Full Telemetry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
