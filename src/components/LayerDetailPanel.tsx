import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArchitectureLayer } from '../types';
import { 
  CheckCircle2, 
  ExternalLink, 
  Cpu, 
  Database, 
  ShieldCheck, 
  Zap,
  Box,
  Code2
} from 'lucide-react';
import { cn } from '../lib/utils';

interface Props {
  layer: ArchitectureLayer | null;
  onClose: () => void;
}

export const LayerDetailPanel: React.FC<Props> = ({ layer, onClose }) => {
  if (!layer) return (
    <div className="h-full flex flex-col items-center justify-center text-center p-12 text-slate-300">
      <div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center mb-6">
        <Box className="w-10 h-10 opacity-20" />
      </div>
      <p className="text-xs font-bold uppercase tracking-[0.2em]">Select a layer to explore details</p>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="h-full flex flex-col overflow-hidden bg-white"
    >
      <div className="p-8 border-b border-slate-100">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-500 uppercase tracking-widest">
            Detailed View
          </span>
          <div className="h-px flex-1 bg-slate-100" />
        </div>
        
        <h2 className="text-4xl font-extrabold text-slate-900 mb-4 flex items-center gap-4 tracking-tight">
          <div className="w-2.5 h-10 rounded-full" style={{ backgroundColor: layer.color }} />
          {layer.name}
        </h2>
        <p className="text-slate-500 leading-relaxed font-medium">
          {layer.description}
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-8 space-y-10 custom-scrollbar">
        {/* Sub-components Section */}
        <section>
          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
            <Zap className="w-3 h-3" /> Core Components
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {layer.subComponents.map((comp, i) => (
              <div 
                key={i}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-[#2A6EF3]/30 hover:bg-white transition-all group shadow-sm hover:shadow-md"
              >
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-sm group-hover:text-[#2A6EF3] transition-colors">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-sm font-bold text-slate-700 group-hover:text-slate-900 transition-colors">{comp}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section>
          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
            <Code2 className="w-3 h-3" /> Technology Stack
          </h3>
          <div className="space-y-4">
            {layer.technologies.map((tech, i) => (
              <div 
                key={i}
                className="p-5 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 transition-all shadow-sm hover:shadow-md group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-slate-800 group-hover:text-[#2A6EF3] transition-colors">{tech.name}</h4>
                  <ExternalLink className="w-3 h-3 text-slate-300 group-hover:text-slate-400" />
                </div>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{tech.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Security & Scalability Context */}
        <section className="p-8 rounded-[2rem] bg-[#FBE8D3]/30 border border-[#FBE8D3] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FBE8D3] opacity-20 rounded-full -mr-16 -mt-16" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                <ShieldCheck className="w-5 h-5 text-[#2A6EF3]" />
              </div>
              <h3 className="text-lg font-bold text-slate-800">Security & Scalability</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Implements zero-trust architecture with granular IAM controls.",
                "Horizontal auto-scaling based on real-time traffic patterns.",
                "Multi-region redundancy for 99.99% availability."
              ].map((item, i) => (
                <li key={i} className="flex gap-4 text-xs font-semibold text-slate-600 leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2A6EF3] mt-1.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </motion.div>
  );
};
