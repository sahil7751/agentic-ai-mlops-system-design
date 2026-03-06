import React from 'react';
import { motion } from 'motion/react';
import { 
  Brain, 
  Cpu, 
  Database, 
  Network, 
  Search, 
  Workflow, 
  Zap,
  ArrowRight,
  Layers,
  Sparkles
} from 'lucide-react';
import { cn } from '../lib/utils';

const AI_COMPONENTS = [
  { 
    id: 'deep-learning', 
    name: 'Deep Learning', 
    icon: Network, 
    description: 'Multi-layer neural networks for pattern recognition and feature extraction.',
    tech: ['TensorFlow', 'PyTorch', 'CUDA'],
    color: 'text-blue-500',
    bg: 'bg-blue-50'
  },
  { 
    id: 'transformers', 
    name: 'Transformers', 
    icon: Sparkles, 
    description: 'Attention-based models for large-scale language and multimodal processing.',
    tech: ['Gemini', 'BERT', 'GPT-4'],
    color: 'text-violet-500',
    bg: 'bg-violet-50'
  },
  { 
    id: 'agentic-ai', 
    name: 'Agentic AI', 
    icon: Workflow, 
    description: 'Autonomous agents capable of reasoning, planning, and tool usage.',
    tech: ['LangGraph', 'AutoGPT', 'ReAct'],
    color: 'text-emerald-500',
    bg: 'bg-emerald-50'
  },
  { 
    id: 'rag', 
    name: 'RAG Pipeline', 
    icon: Search, 
    description: 'Retrieval Augmented Generation for grounding LLMs with private data.',
    tech: ['LangChain', 'LlamaIndex'],
    color: 'text-amber-500',
    bg: 'bg-amber-50'
  },
  { 
    id: 'vector-db', 
    name: 'Vector Databases', 
    icon: Database, 
    description: 'High-dimensional similarity search for efficient context retrieval.',
    tech: ['Pinecone', 'Weaviate', 'Milvus'],
    color: 'text-indigo-500',
    bg: 'bg-indigo-50'
  }
];

export const AdvancedAIView: React.FC = () => {
  return (
    <div className="h-full overflow-y-auto p-8 custom-scrollbar bg-white rounded-3xl border border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">Advanced AI Capabilities</h3>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Intelligence Engine</h2>
          <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-3xl">
            Nexus AI leverages state-of-the-art transformer models and agentic orchestration to deliver autonomous reasoning and high-precision retrieval.
          </p>
        </div>

        {/* Interactive Pipeline Visualization */}
        <div className="mb-16 p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 opacity-[0.03] rounded-full -mr-32 -mt-32" />
          
          <h4 className="text-sm font-bold text-slate-800 mb-8 uppercase tracking-wider flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-500" /> AI Inference Pipeline
          </h4>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative">
            {[
              { name: 'Input Query', icon: Layers },
              { name: 'Embedding', icon: Cpu },
              { name: 'Vector Search', icon: Search },
              { name: 'LLM Reasoning', icon: Brain },
              { name: 'Agent Action', icon: Workflow }
            ].map((step, i, arr) => (
              <React.Fragment key={i}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center gap-4 z-10"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-md border border-slate-100 flex items-center justify-center text-[#2A6EF3]">
                    <step.icon className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-tighter">{step.name}</span>
                </motion.div>
                {i < arr.length - 1 && (
                  <div className="hidden md:block flex-1 h-px bg-slate-200 relative">
                    <motion.div 
                      animate={{ left: ['0%', '100%'], opacity: [0, 1, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#2A6EF3] blur-[1px]"
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Component Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AI_COMPONENTS.map((component, i) => (
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
