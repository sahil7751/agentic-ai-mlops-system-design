import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';
import { 
  Box, 
  Cpu, 
  Database, 
  MessageSquare, 
  Shield, 
  Zap, 
  Search, 
  Settings,
  Share2,
  Workflow
} from 'lucide-react';

const MICROSERVICES = [
  { id: 'auth', name: 'Identity Service', icon: Shield, description: 'AuthN/AuthZ, JWT management, and API key validation.', color: 'text-blue-500' },
  { id: 'gateway', name: 'API Gateway', icon: Share2, description: 'Request routing, rate limiting, and protocol translation.', color: 'text-zinc-400' },
  { id: 'agent', name: 'Agent Controller', icon: Workflow, description: 'Orchestrates multi-agent tasks and state management.', color: 'text-emerald-500' },
  { id: 'inference', name: 'Inference Engine', icon: Cpu, description: 'Distributed model serving and dynamic batching.', color: 'text-violet-500' },
  { id: 'vector', name: 'Vector Service', icon: Search, description: 'Semantic search and embedding generation for RAG.', color: 'text-indigo-500' },
  { id: 'feature', name: 'Feature Service', icon: Database, description: 'Online feature serving and point-in-time lookups.', color: 'text-amber-500' },
  { id: 'monitor', name: 'Observability', icon: Settings, description: 'Drift detection, logging, and performance metrics.', color: 'text-rose-500' },
  { id: 'stream', name: 'Stream Processor', icon: Zap, description: 'Real-time event processing and data enrichment.', color: 'text-yellow-500' },
];

export const MicroservicesView: React.FC = () => {
  return (
    <div className="h-full overflow-y-auto p-8 custom-scrollbar bg-white rounded-3xl border border-slate-200 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="col-span-full mb-8">
          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">Microservices Architecture</h3>
          <p className="text-slate-500 text-sm max-w-2xl font-medium leading-relaxed">
            The platform is built on a decoupled microservices architecture, allowing independent scaling and deployment of core AI and infrastructure components.
          </p>
        </div>

        {MICROSERVICES.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#2A6EF3]/30 hover:bg-white transition-all group flex gap-6 shadow-sm hover:shadow-md"
          >
            <div className={cn("p-4 rounded-2xl bg-white shadow-sm transition-transform group-hover:scale-110", service.color)}>
              <service.icon className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-xl font-extrabold text-slate-900 mb-2 tracking-tight">{service.name}</h4>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">{service.description}</p>
              
              <div className="mt-6 flex items-center gap-3">
                <span className="text-[10px] font-bold text-slate-400 border border-slate-200 px-3 py-1 rounded-full bg-white">gRPC</span>
                <span className="text-[10px] font-bold text-slate-400 border border-slate-200 px-3 py-1 rounded-full bg-white">Docker</span>
                <span className="text-[10px] font-bold text-slate-400 border border-slate-200 px-3 py-1 rounded-full bg-white">Go/Python</span>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Communication Pattern Card */}
        <div className="col-span-full mt-10 p-10 rounded-[2.5rem] bg-[#FBE8D3]/30 border border-[#FBE8D3] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FBE8D3] opacity-20 rounded-full -mr-32 -mt-32" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-sm">
                <MessageSquare className="w-6 h-6 text-[#2A6EF3]" />
              </div>
              <h3 className="text-2xl font-extrabold text-slate-800 tracking-tight">Inter-Service Communication</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
              <div>
                <h5 className="text-sm font-bold text-slate-800 mb-3 uppercase tracking-wider">Synchronous</h5>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  High-performance gRPC for low-latency inference and agent coordination.
                </p>
              </div>
              <div>
                <h5 className="text-sm font-bold text-slate-800 mb-3 uppercase tracking-wider">Asynchronous</h5>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Kafka-based event streaming for data ingestion and background training tasks.
                </p>
              </div>
              <div>
                <h5 className="text-sm font-bold text-slate-800 mb-3 uppercase tracking-wider">Service Mesh</h5>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Istio for traffic management, mutual TLS, and granular observability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
