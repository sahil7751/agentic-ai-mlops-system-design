import React from 'react';
import { motion } from 'motion/react';
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
    <div className="h-full overflow-y-auto p-8 custom-scrollbar">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-full mb-6">
          <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-2">Microservices Architecture</h3>
          <p className="text-zinc-400 text-sm max-w-2xl">
            The platform is built on a decoupled microservices architecture, allowing independent scaling and deployment of core AI and infrastructure components.
          </p>
        </div>

        {MICROSERVICES.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-white/10 transition-all group flex gap-5"
          >
            <div className={service.color}>
              <service.icon className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">{service.name}</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">{service.description}</p>
              
              <div className="mt-4 flex items-center gap-3">
                <span className="text-[10px] font-mono text-zinc-600 border border-zinc-800 px-2 py-0.5 rounded">gRPC</span>
                <span className="text-[10px] font-mono text-zinc-600 border border-zinc-800 px-2 py-0.5 rounded">Docker</span>
                <span className="text-[10px] font-mono text-zinc-600 border border-zinc-800 px-2 py-0.5 rounded">Go/Python</span>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Communication Pattern Card */}
        <div className="col-span-full mt-8 p-8 rounded-3xl bg-gradient-to-br from-zinc-900 to-black border border-white/5">
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="w-6 h-6 text-emerald-500" />
            <h3 className="text-xl font-bold text-white">Inter-Service Communication</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h5 className="text-sm font-semibold text-zinc-200 mb-2">Synchronous</h5>
              <p className="text-xs text-zinc-500 leading-relaxed">
                High-performance gRPC for low-latency inference and agent coordination.
              </p>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-zinc-200 mb-2">Asynchronous</h5>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Kafka-based event streaming for data ingestion and background training tasks.
              </p>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-zinc-200 mb-2">Service Mesh</h5>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Istio for traffic management, mutual TLS, and granular observability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
