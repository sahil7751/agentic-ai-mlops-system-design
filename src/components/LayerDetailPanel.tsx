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
    <div className="h-full flex flex-col items-center justify-center text-center p-8 text-zinc-500">
      <Box className="w-12 h-12 mb-4 opacity-20" />
      <p className="text-sm font-mono uppercase tracking-widest">Select a layer to explore details</p>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="h-full flex flex-col overflow-hidden"
    >
      <div className="p-8 border-b border-white/5">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 uppercase tracking-widest">
            Detailed View
          </span>
          <div className="h-px flex-1 bg-white/5" />
        </div>
        
        <h2 className="text-3xl font-bold text-white mb-3 flex items-center gap-3">
          <div className="w-2 h-8 rounded-full" style={{ backgroundColor: layer.color }} />
          {layer.name}
        </h2>
        <p className="text-zinc-400 leading-relaxed">
          {layer.description}
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar">
        {/* Sub-components Section */}
        <section>
          <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
            <Zap className="w-3 h-3" /> Core Components
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {layer.subComponents.map((comp, i) => (
              <div 
                key={i}
                className="flex items-center gap-3 p-3 rounded-lg bg-white/2 border border-white/5 hover:border-white/10 transition-colors group"
              >
                <CheckCircle2 className="w-4 h-4 text-zinc-600 group-hover:text-emerald-500 transition-colors" />
                <span className="text-sm text-zinc-300 group-hover:text-white transition-colors">{comp}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Stack Section */}
        <section>
          <h3 className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-4 flex items-center gap-2">
            <Code2 className="w-3 h-3" /> Technology Stack
          </h3>
          <div className="space-y-3">
            {layer.technologies.map((tech, i) => (
              <div 
                key={i}
                className="p-4 rounded-xl bg-zinc-900/50 border border-white/5 hover:bg-zinc-900 transition-all"
              >
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-semibold text-zinc-200">{tech.name}</h4>
                  <ExternalLink className="w-3 h-3 text-zinc-600" />
                </div>
                <p className="text-xs text-zinc-500">{tech.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Security & Scalability Context */}
        <section className="p-6 rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-950 border border-white/5">
          <div className="flex items-center gap-2 mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <h3 className="text-sm font-semibold text-zinc-200">Security & Scalability</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex gap-3 text-xs text-zinc-400">
              <div className="w-1 h-1 rounded-full bg-zinc-700 mt-1.5 flex-shrink-0" />
              <span>Implements zero-trust architecture with granular IAM controls.</span>
            </li>
            <li className="flex gap-3 text-xs text-zinc-400">
              <div className="w-1 h-1 rounded-full bg-zinc-700 mt-1.5 flex-shrink-0" />
              <span>Horizontal auto-scaling based on real-time traffic patterns.</span>
            </li>
            <li className="flex gap-3 text-xs text-zinc-400">
              <div className="w-1 h-1 rounded-full bg-zinc-700 mt-1.5 flex-shrink-0" />
              <span>Multi-region redundancy for 99.99% availability.</span>
            </li>
          </ul>
        </section>
      </div>
    </motion.div>
  );
};
