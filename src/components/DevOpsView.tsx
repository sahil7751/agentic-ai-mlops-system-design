import React from 'react';
import { motion } from 'motion/react';
import { 
  Workflow, 
  GitBranch, 
  Container, 
  Cloud, 
  Terminal, 
  Cpu, 
  Database, 
  Zap,
  CheckCircle2,
  ArrowRight,
  Layers,
  Sparkles
} from 'lucide-react';
import { cn } from '../lib/utils';

const DEVOPS_COMPONENTS = [
  { 
    id: 'ci-cd', 
    name: 'CI/CD Pipelines', 
    icon: GitBranch, 
    description: 'Automated testing, building, and deployment of AI models and microservices.',
    tech: ['GitHub Actions', 'ArgoCD', 'Jenkins'],
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  },
  { 
    id: 'k8s', 
    name: 'Kubernetes', 
    icon: Container, 
    description: 'Container orchestration for distributed model serving and auto-scaling.',
    tech: ['GKE', 'EKS', 'Helm'],
    color: 'text-violet-500',
    bg: 'bg-violet-50'
  },
  { 
    id: 'model-registry', 
    name: 'Model Registry', 
    icon: Database, 
    description: 'Centralized repository for model versioning, metadata, and artifacts.',
    tech: ['MLflow', 'Vertex AI', 'Weights & Biases'],
    color: 'text-emerald-500',
    bg: 'bg-emerald-50'
  }
];

export const DevOpsView: React.FC = () => {
  return (
    <div className="h-full overflow-y-auto p-8 custom-scrollbar bg-white rounded-3xl border border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">DevOps & MLOps Integration</h3>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Deployment Lifecycle</h2>
          <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-3xl">
            Nexus AI automates the entire lifecycle from model training to production serving with integrated CI/CD and Kubernetes orchestration.
          </p>
        </div>

        {/* Feature Store Section */}
        <div className="mb-16 p-10 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden shadow-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 opacity-[0.05] rounded-full -mr-32 -mt-32" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
            <div className="max-w-md">
              <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 border border-white/20">
                <Sparkles className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Centralized Feature Store</h3>
              <p className="text-blue-100 text-sm font-medium leading-relaxed mb-6">
                Ensure consistency between training and serving with our high-performance feature store. Supports point-in-time lookups and real-time feature engineering.
              </p>
              <div className="flex gap-4">
                <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-blue-200">Online: 2ms</div>
                <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-blue-200">Offline: 10PB+</div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {['User Features', 'Item Features', 'Contextual', 'Temporal'].map((feat, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-blue-100 uppercase tracking-tighter">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Component Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DEVOPS_COMPONENTS.map((component, i) => (
            <motion.div
              key={component.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="p-8 rounded-3xl bg-white border border-slate-100 hover:border-[#2A6EF3]/20 hover:shadow-xl transition-all group relative overflow-hidden"
            >
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm transition-transform group-hover:scale-110", component.bg, component.color)}>
                <component.icon className="w-8 h-8" />
              </div>
              
              <h4 className="text-xl font-extrabold text-slate-900 mb-3 tracking-tight">{component.name}</h4>
              <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">
                {component.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {component.tech.map((t, j) => (
                  <span key={j} className="text-[10px] font-bold text-slate-400 border border-slate-100 px-3 py-1 rounded-full bg-slate-50">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
