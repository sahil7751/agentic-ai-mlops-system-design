import React from 'react';
import { ARCHITECTURE_DATA } from '../types';
import { motion } from 'motion/react';
import { Server, Shield, Cpu, Database, Network, Cloud, Zap } from 'lucide-react';

export const TechStackGrid: React.FC = () => {
  const allTech = ARCHITECTURE_DATA.flatMap(layer => 
    layer.technologies.map(tech => ({ ...tech, layerColor: layer.color, layerName: layer.name }))
  );

  return (
    <div className="h-full overflow-y-auto p-8 custom-scrollbar bg-white rounded-3xl border border-slate-200 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Infrastructure Summary Cards */}
        <div className="col-span-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
            { label: 'Compute', value: 'GKE / vLLM', icon: Cpu, color: 'text-[#2A6EF3]', bg: 'bg-blue-50' },
            { label: 'Storage', value: 'Pinecone / BigQuery', icon: Database, color: 'text-emerald-600', bg: 'bg-emerald-50' },
            { label: 'Streaming', value: 'Kafka / PubSub', icon: Zap, color: 'text-amber-600', bg: 'bg-amber-50' },
            { label: 'Security', value: 'IAM / Cloud Armor', icon: Shield, color: 'text-rose-600', bg: 'bg-rose-50' },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-[2rem] bg-slate-50 border border-slate-100 flex items-center gap-5 shadow-sm hover:shadow-md transition-all"
            >
              <div className={`p-3 rounded-2xl ${stat.bg} ${stat.color} shadow-sm`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">{stat.label}</p>
                <p className="text-sm font-extrabold text-slate-800">{stat.value}</p>
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
            className="p-6 rounded-3xl bg-white border border-slate-100 hover:border-[#2A6EF3]/20 hover:shadow-xl transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 opacity-[0.03] -mr-8 -mt-8 rounded-full" style={{ backgroundColor: tech.layerColor }} />
            
            <div className="flex items-center justify-between mb-4">
              <span 
                className="text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter"
                style={{ backgroundColor: `${tech.layerColor}15`, color: tech.layerColor }}
              >
                {tech.layerName}
              </span>
              <div className="w-2 h-2 rounded-full bg-slate-100 group-hover:bg-[#2A6EF3] transition-colors" />
            </div>
            <h4 className="text-xl font-extrabold text-slate-900 mb-2 tracking-tight">{tech.name}</h4>
            <p className="text-sm text-slate-500 font-medium leading-relaxed">{tech.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
