import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { motion, AnimatePresence } from 'motion/react';
import { ARCHITECTURE_DATA, ArchitectureLayer } from '../types';
import { cn } from '../lib/utils';
import { 
  Users, 
  Layers, 
  Cpu, 
  Settings, 
  Database, 
  Activity, 
  ArrowRight,
  ChevronRight,
  Info,
  Shield
} from 'lucide-react';

interface Props {
  onSelectLayer: (layer: ArchitectureLayer) => void;
  selectedLayerId: string | null;
  showDataFlow: boolean;
}

const LAYER_ICONS: Record<string, any> = {
  'user-layer': Shield,
  'orchestration-layer': Layers,
  'ai-ml-layer': Cpu,
  'mlops-layer': Settings,
  'data-layer': Database,
  'infra-aiops-layer': Activity,
};

export const ArchitectureDiagram: React.FC<Props> = ({ onSelectLayer, selectedLayerId, showDataFlow }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight,
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-full bg-white rounded-3xl border border-slate-200 overflow-hidden p-8 shadow-sm">
      <div className="absolute top-6 left-8 z-10 flex flex-col gap-2">
        <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] flex items-center gap-2">
          <Activity className="w-3 h-3" />
          {showDataFlow ? 'Data Flow Analysis' : 'System Topology'}
        </h2>
        {showDataFlow && (
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Real-time Stream</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#2A6EF3] animate-pulse" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Inference Flow</span>
            </div>
          </div>
        )}
      </div>

      <div className="relative w-full h-full flex flex-col items-center justify-start gap-10 pt-16 custom-scrollbar overflow-y-auto">
        {ARCHITECTURE_DATA.map((layer, index) => {
          const Icon = LAYER_ICONS[layer.id] || Info;
          const isSelected = selectedLayerId === layer.id;
          
          return (
            <React.Fragment key={layer.id}>
              <motion.button
                layoutId={`layer-${layer.id}`}
                onClick={() => onSelectLayer(layer)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  scale: isSelected ? 1.02 : 1,
                  borderColor: isSelected ? layer.color : 'rgba(0,0,0,0.05)'
                }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "relative w-full max-w-2xl group flex-shrink-0",
                  "bg-white border rounded-2xl p-6 text-left transition-all duration-300",
                  "hover:bg-slate-50 hover:border-slate-300",
                  isSelected ? "shadow-xl z-20" : "z-10 shadow-sm"
                )}
                style={{
                  boxShadow: isSelected ? `0 20px 40px -15px ${layer.color}33` : undefined
                }}
              >
                <div className="flex items-start gap-6">
                  <div 
                    className="p-4 rounded-xl flex-shrink-0 transition-all duration-300 shadow-sm"
                    style={{ backgroundColor: `${layer.color}15`, color: layer.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#2A6EF3] transition-colors">
                        {layer.name}
                      </h3>
                      <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full uppercase tracking-tighter">
                        Layer 0{index + 1}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 line-clamp-1 group-hover:text-slate-600 transition-colors font-medium">
                      {layer.description}
                    </p>
                    
                    <div className="mt-4 flex flex-wrap gap-2">
                      {layer.subComponents.slice(0, 3).map((comp, i) => (
                        <span key={i} className="text-[10px] font-bold text-slate-500 border border-slate-200 px-3 py-1 rounded-full bg-white">
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex-shrink-0 self-center">
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300",
                      isSelected ? "bg-[#2A6EF3] text-white" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"
                    )}>
                      <ChevronRight className={cn(
                        "w-4 h-4 transition-transform duration-300",
                        isSelected ? "translate-x-0.5" : ""
                      )} />
                    </div>
                  </div>
                </div>

                {/* Connection Line & Data Flow */}
                {index < ARCHITECTURE_DATA.length - 1 && (
                  <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-px h-10 bg-slate-200">
                    {showDataFlow && (
                      <motion.div 
                        animate={{ 
                          y: [0, 40],
                          backgroundColor: index % 2 === 0 ? '#10B981' : '#2A6EF3'
                        }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        className="w-1.5 h-3 rounded-full -ml-[2.5px] blur-[1px] shadow-sm"
                      />
                    )}
                  </div>
                )}
              </motion.button>
            </React.Fragment>
          );
        })}
      </div>

      {/* Background Grid Decoration */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
    </div>
  );
};
