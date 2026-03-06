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
import { MicroservicesView } from './components/MicroservicesView';
import { AdvancedAIView } from './components/AdvancedAIView';
import { GovernanceView } from './components/GovernanceView';
import { SecurityView } from './components/SecurityView';
import { MonitoringView } from './components/MonitoringView';
import { DevOpsView } from './components/DevOpsView';

type Section = 'architecture' | 'advanced-ai' | 'governance' | 'security' | 'monitoring' | 'devops';

export default function App() {
  const [selectedLayer, setSelectedLayer] = useState<ArchitectureLayer | null>(null);
  const [viewMode, setViewMode] = useState<'topology' | 'dataflow' | 'infra' | 'microservices'>('topology');
  const [currentSection, setCurrentSection] = useState<Section>('architecture');

  const renderContent = () => {
    switch (currentSection) {
      case 'advanced-ai':
        return <AdvancedAIView />;
      case 'governance':
        return <GovernanceView />;
      case 'security':
        return <SecurityView />;
      case 'monitoring':
        return <MonitoringView />;
      case 'devops':
        return <DevOpsView />;
      case 'architecture':
      default:
        return viewMode === 'infra' ? (
          <TechStackGrid />
        ) : viewMode === 'microservices' ? (
          <MicroservicesView />
        ) : (
          <ArchitectureDiagram 
            onSelectLayer={setSelectedLayer} 
            selectedLayerId={selectedLayer?.id || null} 
            showDataFlow={viewMode === 'dataflow'}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-900 font-sans selection:bg-blue-100">
      {/* Top Navigation Bar */}
      <header className="h-16 border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50 px-6 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[#2A6EF3] rounded-xl flex items-center justify-center shadow-lg shadow-blue-200">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">Nexus<span className="text-[#2A6EF3]">AI</span> <span className="text-[10px] font-mono text-slate-500 border border-slate-200 px-1.5 py-0.5 rounded ml-2 bg-slate-50">v4.0 PLATFORM</span></h1>
          </div>
          
          <nav className="hidden xl:flex items-center gap-8">
            {[
              { id: 'architecture', label: 'Architecture' },
              { id: 'advanced-ai', label: 'Advanced AI' },
              { id: 'governance', label: 'Governance' },
              { id: 'security', label: 'Security' },
              { id: 'monitoring', label: 'Monitoring' },
              { id: 'devops', label: 'DevOps' }
            ].map((section) => (
              <button
                key={section.id}
                onClick={() => setCurrentSection(section.id as Section)}
                className={cn(
                  "text-sm font-semibold transition-colors whitespace-nowrap",
                  currentSection === section.id ? "text-[#2A6EF3]" : "text-slate-500 hover:text-[#2A6EF3]"
                )}
              >
                {section.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 bg-[#FBE8D3]/50 border border-[#FBE8D3] rounded-full px-4 py-1.5">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">Production Ready</span>
          </div>
          <button className="p-2 text-slate-400 hover:text-[#2A6EF3] transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition-colors cursor-pointer">
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
                <h2 className="text-3xl font-extrabold text-slate-900 mb-1 tracking-tight capitalize">
                  {currentSection.replace('-', ' ')}
                </h2>
                <p className="text-slate-500 text-sm font-medium">
                  {currentSection === 'architecture' && (
                    viewMode === 'infra' 
                      ? 'Production-grade technologies for large-scale AI deployment.' 
                      : viewMode === 'microservices'
                      ? 'Decoupled services for high availability and distributed inference.'
                      : 'Interactive blueprint of the Nexus AI production-ready platform.'
                  )}
                  {currentSection === 'advanced-ai' && 'Exploring the intelligence engine and inference pipeline.'}
                  {currentSection === 'governance' && 'Ensuring compliance, lineage, and model accountability.'}
                  {currentSection === 'security' && 'Zero-trust security model and system-wide protection.'}
                  {currentSection === 'monitoring' && 'Real-time telemetry and model performance tracking.'}
                  {currentSection === 'devops' && 'Automated deployment and MLOps lifecycle management.'}
                </p>
              </div>
              
              {currentSection === 'architecture' && (
                <div className="flex items-center gap-3">
                  <div className="flex bg-slate-100 rounded-xl p-1 border border-slate-200">
                    <button 
                      onClick={() => setViewMode('topology')}
                      className={cn(
                        "px-4 py-2 text-xs font-bold rounded-lg transition-all",
                        viewMode === 'topology' ? "bg-white text-[#2A6EF3] shadow-sm" : "text-slate-500 hover:text-slate-700"
                      )}
                    >
                      Topology
                    </button>
                    <button 
                      onClick={() => setViewMode('dataflow')}
                      className={cn(
                        "px-4 py-2 text-xs font-bold rounded-lg transition-all",
                        viewMode === 'dataflow' ? "bg-white text-[#2A6EF3] shadow-sm" : "text-slate-500 hover:text-slate-700"
                      )}
                    >
                      Data Flow
                    </button>
                    <button 
                      onClick={() => setViewMode('microservices')}
                      className={cn(
                        "px-4 py-2 text-xs font-bold rounded-lg transition-all",
                        viewMode === 'microservices' ? "bg-white text-[#2A6EF3] shadow-sm" : "text-slate-500 hover:text-slate-700"
                      )}
                    >
                      Services
                    </button>
                    <button 
                      onClick={() => setViewMode('infra')}
                      className={cn(
                        "px-4 py-2 text-xs font-bold rounded-lg transition-all",
                        viewMode === 'infra' ? "bg-white text-[#2A6EF3] shadow-sm" : "text-slate-500 hover:text-slate-700"
                      )}
                    >
                      Infra
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex-1 p-8 pt-0 overflow-hidden">
            {renderContent()}
          </div>

          {/* Bottom Stats Bar */}
          <div className="h-16 border-t border-slate-200 bg-white px-8 flex items-center gap-12 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-3 whitespace-nowrap">
              <Globe className="w-4 h-4 text-slate-400" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">REGIONS:</span>
              <span className="text-xs font-bold text-[#2A6EF3]">GLOBAL (24)</span>
            </div>
            <div className="flex items-center gap-3 whitespace-nowrap">
              <Cpu className="w-4 h-4 text-slate-400" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">INFERENCE:</span>
              <span className="text-xs font-bold text-[#2A6EF3]">1.2M REQ/S</span>
            </div>
            <div className="flex items-center gap-3 whitespace-nowrap">
              <Shield className="w-4 h-4 text-slate-400" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">SECURITY:</span>
              <span className="text-xs font-bold text-[#2A6EF3]">L7 PROTECTED</span>
            </div>
          </div>
        </section>

        {/* Right Section: Details Panel */}
        <aside className="w-[450px] border-l border-slate-200 bg-white hidden lg:block shadow-[-10px_0_30px_-15px_rgba(0,0,0,0.05)]">
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
            className="fixed inset-0 z-[60] lg:hidden bg-slate-900/40 backdrop-blur-sm flex items-end"
          >
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              className="w-full h-[85vh] bg-white rounded-t-[2.5rem] border-t border-slate-200 overflow-hidden relative shadow-2xl"
            >
              <div className="w-12 h-1.5 bg-slate-200 rounded-full mx-auto mt-4 mb-2" />
              <button 
                onClick={() => setSelectedLayer(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 border border-slate-200 z-10 hover:bg-slate-200 transition-colors"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>
              <LayerDetailPanel layer={selectedLayer} onClose={() => setSelectedLayer(null)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(0, 0, 0, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(0, 0, 0, 0.1);
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
