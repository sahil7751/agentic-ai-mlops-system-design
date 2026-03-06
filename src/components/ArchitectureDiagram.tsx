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
  Info
} from 'lucide-react';

interface Props {
  onSelectLayer: (layer: ArchitectureLayer) => void;
  selectedLayerId: string | null;
  showDataFlow: boolean;
}

const LAYER_ICONS: Record<string, any> = {
  'user-layer': Users,
  'application-layer': Layers,
  'ai-ml-layer': Cpu,
  'mlops-layer': Settings,
  'data-layer': Database,
  'devops-aiops-layer': Activity,
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
    <div ref={containerRef} className="relative w-full h-full bg-zinc-950/50 rounded-2xl border border-white/5 overflow-hidden p-8">
      <div className="absolute top-6 left-8 z-10 flex flex-col gap-2">
        <h2 className="text-sm font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-2">
          <Activity className="w-4 h-4" />
          {showDataFlow ? 'Data Flow Analysis' : 'System Topology'}
        </h2>
        {showDataFlow && (
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-tighter">Active Stream</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="w-3 h-3 text-zinc-600" />
              <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-tighter">Downstream Flow</span>
            </div>
          </div>
        )}
      </div>

      <div className="relative w-full h-full flex flex-col items-center justify-start gap-8 pt-12 custom-scrollbar overflow-y-auto">
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
                  borderColor: isSelected ? layer.color : 'rgba(255,255,255,0.05)'
                }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "relative w-full max-w-2xl group flex-shrink-0",
                  "bg-zinc-900/80 backdrop-blur-sm border rounded-xl p-6 text-left transition-all duration-300",
                  "hover:bg-zinc-800/80 hover:border-white/20",
                  isSelected ? "shadow-[0_0_30px_-10px_rgba(0,0,0,0.3)] z-20" : "z-10"
                )}
                style={{
                  boxShadow: isSelected ? `0 0 40px -15px ${layer.color}44` : undefined
                }}
              >
                <div className="flex items-start gap-5">
                  <div 
                    className="p-3 rounded-lg flex-shrink-0 transition-colors duration-300"
                    style={{ backgroundColor: `${layer.color}15`, color: layer.color }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-white transition-colors">
                        {layer.name}
                      </h3>
                      <span className="text-[10px] font-mono text-zinc-500 bg-zinc-800/50 px-2 py-0.5 rounded uppercase tracking-tighter">
                        Layer 0{index + 1}
                      </span>
                    </div>
                    <p className="text-sm text-zinc-400 line-clamp-1 group-hover:text-zinc-300 transition-colors">
                      {layer.description}
                    </p>
                    
                    <div className="mt-3 flex flex-wrap gap-2">
                      {layer.subComponents.slice(0, 3).map((comp, i) => (
                        <span key={i} className="text-[10px] text-zinc-500 border border-white/5 px-2 py-0.5 rounded-full bg-white/2">
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex-shrink-0 self-center">
                    <ChevronRight className={cn(
                      "w-5 h-5 transition-all duration-300",
                      isSelected ? "text-white translate-x-1" : "text-zinc-700 group-hover:text-zinc-500"
                    )} />
                  </div>
                </div>

                {/* Connection Line & Data Flow */}
                {index < ARCHITECTURE_DATA.length - 1 && (
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-px h-8 bg-zinc-800">
                    {showDataFlow && (
                      <motion.div 
                        animate={{ y: [0, 32] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        className="w-1 h-2 bg-emerald-500 rounded-full -ml-[1.5px] blur-[1px]"
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
           style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
    </div>
  );
};
