import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArchitectureDiagram } from './components/ArchitectureDiagram';
import { LayerDetailPanel } from './components/LayerDetailPanel';
import { ArchitectureLayer, ARCHITECTURE_DATA } from './types';
import { cn } from './lib/utils';
import { 
  LayoutDashboard, 
  Search, 
  Bell, 
  User, 
  Terminal, 
  Globe, 
  Cpu, 
  Shield,
  Menu,
  X
} from 'lucide-react';

import { TechStackGrid } from './components/TechStackGrid';

export default function App() {
  const [selectedLayer, setSelectedLayer] = useState<ArchitectureLayer | null>(null);
  const [viewMode, setViewMode] = useState<'topology' | 'dataflow' | 'infra'>('topology');

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans selection:bg-emerald-500/30">
      {/* Top Navigation Bar */}
      <header className="h-16 border-b border-white/5 bg-zinc-950/50 backdrop-blur-md sticky top-0 z-50 px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Terminal className="w-5 h-5 text-black" />
            </div>
            <h1 className="text-lg font-bold tracking-tight">Nexus<span className="text-emerald-500">AI</span></h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium text-white">Architecture</a>
            <a href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">MLOps</a>
            <a href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">AIOps</a>
            <a href="#" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">Security</a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 bg-zinc-900 border border-white/5 rounded-full px-3 py-1.5">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">System Online</span>
          </div>
          <button className="p-2 text-zinc-400 hover:text-white transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/10 flex items-center justify-center">
            <User className="w-4 h-4" />
          </div>
        </div>
      </header>

      <main className="flex h-[calc(100vh-64px)] overflow-hidden">
        {/* Left Section: Architecture Visualization */}
        <section className="flex-1 relative flex flex-col min-w-0">
          <div className="p-8 pb-0">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">
                  {viewMode === 'infra' ? 'Infrastructure Stack' : 'System Architecture'}
                </h2>
                <p className="text-zinc-400 text-sm">
                  {viewMode === 'infra' 
                    ? 'A comprehensive list of technologies powering the platform.' 
                    : 'Interactive blueprint of the Nexus AI large-scale platform.'}
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="flex bg-zinc-900 rounded-lg p-1 border border-white/5">
                  <button 
                    onClick={() => setViewMode('topology')}
                    className={cn(
                      "px-3 py-1.5 text-xs font-medium rounded-md transition-all",
                      viewMode === 'topology' ? "bg-zinc-800 text-white shadow-sm" : "text-zinc-500 hover:text-zinc-300"
                    )}
                  >
                    Topology
                  </button>
                  <button 
                    onClick={() => setViewMode('dataflow')}
                    className={cn(
                      "px-3 py-1.5 text-xs font-medium rounded-md transition-all",
                      viewMode === 'dataflow' ? "bg-zinc-800 text-white shadow-sm" : "text-zinc-500 hover:text-zinc-300"
                    )}
                  >
                    Data Flow
                  </button>
                  <button 
                    onClick={() => setViewMode('infra')}
                    className={cn(
                      "px-3 py-1.5 text-xs font-medium rounded-md transition-all",
                      viewMode === 'infra' ? "bg-zinc-800 text-white shadow-sm" : "text-zinc-500 hover:text-zinc-300"
                    )}
                  >
                    Infra
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 p-8 pt-0 overflow-hidden">
            {viewMode === 'infra' ? (
              <TechStackGrid />
            ) : (
              <ArchitectureDiagram 
                onSelectLayer={setSelectedLayer} 
                selectedLayerId={selectedLayer?.id || null} 
                showDataFlow={viewMode === 'dataflow'}
              />
            )}
          </div>

          {/* Bottom Stats Bar */}
          <div className="h-16 border-t border-white/5 bg-zinc-950/50 px-8 flex items-center gap-12 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-3 whitespace-nowrap">
              <Globe className="w-4 h-4 text-zinc-500" />
              <span className="text-xs font-mono text-zinc-500">REGIONS:</span>
              <span className="text-xs font-mono text-emerald-500">GLOBAL (24)</span>
            </div>
            <div className="flex items-center gap-3 whitespace-nowrap">
              <Cpu className="w-4 h-4 text-zinc-500" />
              <span className="text-xs font-mono text-zinc-500">INFERENCE:</span>
              <span className="text-xs font-mono text-emerald-500">1.2M REQ/S</span>
            </div>
            <div className="flex items-center gap-3 whitespace-nowrap">
              <Shield className="w-4 h-4 text-zinc-500" />
              <span className="text-xs font-mono text-zinc-500">SECURITY:</span>
              <span className="text-xs font-mono text-emerald-500">L7 PROTECTED</span>
            </div>
          </div>
        </section>

        {/* Right Section: Details Panel */}
        <aside className="w-[450px] border-l border-white/5 bg-zinc-950/80 backdrop-blur-xl hidden lg:block">
          <LayerDetailPanel layer={selectedLayer} onClose={() => setSelectedLayer(null)} />
        </aside>
      </main>

      {/* Mobile Details Overlay */}
      <AnimatePresence>
        {selectedLayer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden bg-black/80 backdrop-blur-sm flex items-end"
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              className="w-full h-[80vh] bg-zinc-950 rounded-t-3xl border-t border-white/10 overflow-hidden relative"
            >
              <button 
                onClick={() => setSelectedLayer(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-zinc-900 border border-white/10 z-10"
              >
                <X className="w-5 h-5" />
              </button>
              <LayerDetailPanel layer={selectedLayer} onClose={() => setSelectedLayer(null)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
