import React from 'react';
import { motion } from 'motion/react';
import { 
  Shield, 
  Lock, 
  Key, 
  Eye, 
  Fingerprint, 
  Server, 
  Globe, 
  ShieldCheck,
  Zap,
  CheckCircle2,
  AlertTriangle
} from 'lucide-react';
import { cn } from '../lib/utils';

const SECURITY_FEATURES = [
  { 
    title: 'Authentication', 
    icon: Fingerprint, 
    description: 'Multi-factor authentication (MFA) with biometric and hardware key support.',
    tech: ['OAuth2', 'OIDC', 'SAML']
  },
  { 
    title: 'Authorization', 
    icon: Key, 
    description: 'Granular Role-Based Access Control (RBAC) and Attribute-Based Access Control (ABAC).',
    tech: ['OPA', 'Casbin']
  },
  { 
    title: 'API Security', 
    icon: Globe, 
    description: 'L7 protection with rate limiting, threat detection, and automated WAF rules.',
    tech: ['Apigee', 'Cloud Armor']
  },
  { 
    title: 'Data Encryption', 
    icon: Lock, 
    description: 'AES-256 encryption at rest and TLS 1.3 encryption in transit with HSM key management.',
    tech: ['Cloud KMS', 'Vault']
  }
];

export const SecurityView: React.FC = () => {
  return (
    <div className="h-full overflow-y-auto p-8 custom-scrollbar bg-white rounded-3xl border border-slate-200 shadow-sm">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">System Security Architecture</h3>
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Zero-Trust Security</h2>
          <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-3xl">
            Nexus AI implements a multi-layered security model, ensuring every request is authenticated, authorized, and encrypted from the edge to the core.
          </p>
        </div>

        {/* Security Status Card */}
        <div className="mb-12 p-8 rounded-[2.5rem] bg-[#2A6EF3] text-white relative overflow-hidden shadow-xl shadow-blue-200">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-[0.05] rounded-full -mr-48 -mt-48" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-1">System Status: SECURE</h4>
                <p className="text-blue-100 text-sm font-medium">Last full security audit: 4 hours ago • No active threats detected.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="px-6 py-3 rounded-2xl bg-white/10 border border-white/20 text-center">
                <p className="text-[10px] font-bold text-blue-200 uppercase tracking-widest mb-1">Active Threats</p>
                <p className="text-xl font-bold">0</p>
              </div>
              <div className="px-6 py-3 rounded-2xl bg-white/10 border border-white/20 text-center">
                <p className="text-[10px] font-bold text-blue-200 uppercase tracking-widest mb-1">Blocked Req</p>
                <p className="text-xl font-bold">12.4K</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SECURITY_FEATURES.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-xl transition-all group"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-[#2A6EF3] group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-extrabold text-slate-900 mb-2 tracking-tight">{feature.title}</h4>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {feature.tech.map((t, j) => (
                      <span key={j} className="text-[10px] font-bold text-slate-400 border border-slate-200 px-3 py-1 rounded-full bg-white">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security Compliance Section */}
        <div className="mt-12 p-10 rounded-[2.5rem] bg-[#FBE8D3]/30 border border-[#FBE8D3] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FBE8D3] opacity-20 rounded-full -mr-32 -mt-32" />
          
          <div className="relative z-10">
            <h4 className="text-lg font-bold text-slate-800 mb-8 flex items-center gap-3">
              <Shield className="w-6 h-6 text-[#2A6EF3]" /> Compliance Certifications
            </h4>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
              {['SOC2 Type II', 'ISO 27001', 'HIPAA', 'GDPR'].map((cert, i) => (
                <div key={i} className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-full bg-white shadow-sm border border-[#FBE8D3] flex items-center justify-center text-emerald-500">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
