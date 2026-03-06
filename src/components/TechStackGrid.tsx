import React from 'react';
import { ARCHITECTURE_DATA } from '../types';
import { motion } from 'motion/react';
import { Server, Shield, Cpu, Database, Network, Cloud, Zap } from 'lucide-react';

export const TechStackGrid: React.FC = () => {
  const allTech = ARCHITECTURE_DATA.flatMap(layer => 
    layer.technologies.map(tech => ({ ...tech, layerColor: layer.color, layerName: layer.name }))
  );

  return (
    <div className="h-full overflow-y-auto p-8 custom-scrollbar">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Infrastructure Summary Cards */}
        <div className="col-span-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Compute', value: 'GKE / vLLM', icon: Cpu, color: 'text-blue-500' },
            { label: 'Storage', value: 'Pinecone / BigQuery', icon: Database, color: 'text-emerald-500' },
            { label: 'Streaming', value: 'Kafka / PubSub', icon: Zap, color: 'text-yellow-500' },
            { label: 'Security', value: 'IAM / Cloud Armor', icon: Shield, color: 'text-rose-500' },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-4 rounded-xl bg-zinc-900 border border-white/5 flex items-center gap-4"
            >
              <div className={`p-2 rounded-lg bg-white/5 ${stat.color}`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">{stat.label}</p>
                <p className="text-sm font-semibold text-white">{stat.value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full Tech List */}
        {allTech.map((tech, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="p-5 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-all group"
          >
            <div className="flex items-center justify-between mb-3">
              <span 
                className="text-[10px] font-mono px-2 py-0.5 rounded-full uppercase tracking-tighter"
                style={{ backgroundColor: `${tech.layerColor}15`, color: tech.layerColor }}
              >
                {tech.layerName}
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-emerald-500 transition-colors" />
            </div>
            <h4 className="text-lg font-bold text-white mb-1">{tech.name}</h4>
            <p className="text-sm text-zinc-400 leading-relaxed">{tech.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
