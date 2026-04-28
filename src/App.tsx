/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  Search, 
  Calendar, 
  Share2, 
  Phone, 
  Zap, 
  ShieldCheck, 
  MessageSquare, 
  TrendingUp, 
  ChevronRight,
  Bell,
  Settings,
  LayoutDashboard,
  BarChart3,
  GitMerge,
  FileText
} from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState<'tactical' | 'swiss' | 'prestige'>('tactical');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col pt-16">
      {/* Top App Bar */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-slate-950 border-b border-slate-800 flex items-center justify-between px-8 z-50">
        <div className="flex items-center gap-4">
          <div className="bg-brand-accent/10 p-2 rounded-lg">
            <Zap className="h-6 w-6 text-brand-accent" />
          </div>
          <span className={`text-xl font-black tracking-tighter text-slate-50 uppercase text-nowrap ${theme === 'prestige' ? 'font-serif' : 'font-display'}`}>
            Strategic Sales Engine
          </span>
        </div>
        
        <nav className="hidden lg:flex items-center gap-8">
          <NavItem icon={<LayoutDashboard size={18} />} label="Dashboard" />
          <NavItem icon={<BarChart3 size={18} />} label="Analytics" />
          <NavItem icon={<GitMerge size={18} />} label="Pipeline" active />
          <NavItem icon={<FileText size={18} />} label="Reports" />
        </nav>

        <div className="flex items-center gap-6">
          {/* Theme Switcher */}
          <div className="flex bg-slate-900 p-1 rounded-full border border-slate-800">
            {(['tactical', 'swiss', 'prestige'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTheme(t)}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                  theme === t 
                    ? 'bg-brand-accent text-brand-bg shadow-lg scale-110' 
                    : 'text-slate-500 hover:text-slate-300'
                }`}
                title={`${t.charAt(0).toUpperCase() + t.slice(1)} Theme`}
              >
                {t === 'tactical' && <Zap size={14} />}
                {t === 'swiss' && <LayoutDashboard size={14} />}
                {t === 'prestige' && <ShieldCheck size={14} />}
              </button>
            ))}
          </div>

          <div className="flex gap-4">
            <button className="text-slate-400 hover:text-brand-accent transition-colors"><Bell size={20} /></button>
            <button className="text-slate-400 hover:text-brand-accent transition-colors"><Settings size={20} /></button>
          </div>
          <button className="bg-brand-accent-dim hover:bg-brand-accent text-white px-5 py-2 text-nowrap text-xs font-bold rounded-lg uppercase tracking-wider transition-all transform active:scale-95 shadow-lg shadow-brand-accent/10">
            Execute Strategy
          </button>
        </div>
      </header>

      <div className={`flex-grow flex flex-col ${theme === 'prestige' ? 'font-serif' : 'font-sans'}`}>
        <main className="max-w-[1440px] mx-auto w-full p-8 bento-grid mt-4">
          {/* Main Title Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="col-span-full mb-8"
          >
            <h1 className={`text-5xl font-extrabold text-brand-text tracking-tight mb-4 ${theme === 'swiss' ? 'uppercase italic font-display' : ''}`}>
              How We Consistently <span className="text-brand-accent">Book Qualified Meetings</span>
            </h1>
            <div className="h-1.5 w-32 bg-brand-accent rounded-full" />
          </motion.div>

        {/* Left Column */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          <motion.section variants={itemVariants} className={`bg-brand-surface border border-brand-border p-6 rounded-2xl relative overflow-hidden group ${theme === 'swiss' ? 'border-2' : ''}`}>
            <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Users size={120} className="fill-brand-accent" />
            </div>
            <div className="flex items-center gap-3 mb-4 text-brand-accent">
              <Search size={24} />
              <h2 className={`text-xl font-bold uppercase tracking-tight ${theme === 'prestige' ? 'font-serif' : 'font-display'}`}>Talent + Ramp</h2>
            </div>
            <p className="text-brand-text-dim mb-6 text-sm">Optimized onboarding for high-velocity SDR performance.</p>
            
            <div className="space-y-4">
              <TimelineItem 
                label="Weeks 1-2" 
                title="Intensive Cold Call Bootcamp" 
                desc="2-4 meetings per week expectation from day 1."
                theme={theme}
              />
              <TimelineItem 
                label="Product Focus" 
                title="Speed to Productivity" 
                desc="Eliminating long, unproven ramp times."
                theme={theme}
              />
            </div>
          </motion.section>

          {/* Launch Timeline */}
          <motion.section variants={itemVariants} className={`bg-brand-surface border border-brand-border p-6 rounded-2xl flex-grow ${theme === 'swiss' ? 'border-2' : ''}`}>
            <div className="flex items-center gap-3 mb-6 text-brand-accent">
              <Calendar size={24} />
              <h2 className={`text-xl font-bold uppercase tracking-tight ${theme === 'prestige' ? 'font-serif' : 'font-display'}`}>Structured Launch</h2>
            </div>
            <div className="space-y-8 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-[2px] before:bg-brand-border">
              <PhaseItem phase="1" label="Week 1" title="Product & Market Training" desc="Messaging alignment and ICP identification." theme={theme} />
              <PhaseItem phase="2" label="Day 5" title="Campaign Kickoff" desc="Final script approval and setup completion." theme={theme} />
              <PhaseItem phase="3" label="Week 2" title="Outbound Activation" desc="Execution begins. Billing starts only here." active theme={theme} />
            </div>
          </motion.section>
        </motion.div>

        {/* Center Column: The Performance Engine */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`bg-brand-surface-high border p-8 rounded-2xl shadow-2xl relative overflow-hidden ${theme === 'swiss' ? 'border-2 border-brand-accent' : 'border-brand-accent/20'}`}
        >
          <div className={`absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay ${theme === 'swiss' ? 'hidden' : ''}`}>
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtDXrBVHlDmYk-vPrtb2eZJvA7aHkW2xbfeINzWHP9AObHAIR65PWvNAIU4wgb1crlUjaDLPUCaWbvLRXWgm-qvNqh1-ZWSSmaKifWYIVGomUiw_HVPU9dGm9SoaRPqbZC8OgNJC5z3GbAhtxS-CKDgX6Dlh3wDgWYHZjzPS-clBPMQ-PekQyWPE4CzJopa0PCXnupSs3eh6RyweXLXJ2Jum4wV50HRrJ6UKDI9hqim0-FCi9MXctBYvAkx6ocsEC15H-pqhmpLCM" 
              alt="Background" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative z-10 h-full flex flex-col">
            <div className="text-center mb-12">
              <span className="text-xs font-bold text-brand-accent uppercase tracking-[0.3em] mb-2 block">The Hub of Outreach</span>
              <h2 className={`text-4xl font-black text-brand-text uppercase tracking-tighter ${theme === 'swiss' ? 'font-display italic' : ''}`}>Performance Engine</h2>
            </div>

            <div className="space-y-6 flex-grow">
              {/* LinkedIn Stat */}
              <motion.div 
                whileHover={{ x: 5 }}
                className={`p-6 rounded-2xl border ${theme === 'swiss' ? 'bg-brand-bg border-brand-border' : 'bg-brand-bg/60 backdrop-blur-xl border-white/5'}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-brand-accent/20 p-3 rounded-xl"><Share2 className="text-brand-accent" /></div>
                    <div>
                      <h3 className={`text-xl font-bold ${theme === 'swiss' ? 'text-brand-text' : 'text-white'}`}>LinkedIn Hub</h3>
                      <p className="text-brand-text-dim text-[10px] uppercase font-bold tracking-widest">Multi-Channel Outbound</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-4xl font-black text-brand-accent">40</span>
                    <p className="text-[10px] text-brand-text-dim uppercase font-bold">Daily / Rep</p>
                  </div>
                </div>
                <div className="h-1.5 bg-brand-border rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '85%' }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-brand-accent-dim to-brand-accent" 
                  />
                </div>
              </motion.div>

              {/* Cold Calling Stat */}
              <motion.div 
                whileHover={{ x: 5 }}
                className={`p-6 rounded-2xl border ${theme === 'swiss' ? 'bg-brand-bg border-brand-border' : 'bg-brand-bg/60 backdrop-blur-xl border-white/5'}`}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-brand-accent/20 p-3 rounded-xl"><Phone className="text-brand-accent" /></div>
                    <div>
                      <h3 className={`text-xl font-bold ${theme === 'swiss' ? 'text-brand-text' : 'text-white'}`}>Cold Calling</h3>
                      <p className="text-brand-text-dim text-[10px] uppercase font-bold tracking-widest">Primary Driver</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-4xl font-black text-brand-accent">200+</span>
                    <p className="text-[10px] text-brand-text-dim uppercase font-bold">Dials / Daily</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 bg-brand-accent/5 p-4 rounded-xl border border-brand-accent/10">
                  <Zap className="text-brand-accent fill-brand-accent animate-pulse" size={32} />
                  <div>
                    <span className="text-2xl font-black text-brand-accent block">15.4%</span>
                    <span className="text-[10px] font-bold text-brand-text uppercase">Avg Connect Rate</span>
                  </div>
                </div>
              </motion.div>

              {/* Data Quality */}
              <div className={`p-6 rounded-2xl border mt-auto ${theme === 'swiss' ? 'bg-brand-bg border-brand-border' : 'bg-brand-surface border-white/5'}`}>
                <div className="flex items-center gap-3 mb-2">
                  <GitMerge className="text-brand-accent-dim" size={20} />
                  <span className="text-sm font-bold uppercase tracking-wider">Data Pipeline</span>
                </div>
                <p className="text-brand-text text-lg font-medium tracking-tight">2,000+ Unique ICP leads/month</p>
                <p className="text-[10px] text-brand-text-dim italic">Built specifically for your campaign, not recycled lists.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Right Column */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-6"
        >
          {/* Team Structure */}
          <motion.section variants={itemVariants} className={`bg-brand-surface border border-brand-border p-6 rounded-2xl ${theme === 'swiss' ? 'border-2' : ''}`}>
            <div className="flex items-center gap-3 mb-6 text-brand-accent">
              <Users size={24} />
              <h2 className={`text-xl font-bold uppercase tracking-tight ${theme === 'prestige' ? 'font-serif' : 'font-display'}`}>Growth Team</h2>
            </div>
            <div className="space-y-1.5">
              <TeamMember index={1} role="Account Strategist" desc="Messaging & Direction" theme={theme} />
              <TeamMember index={2} role="SDR Specialists (2)" desc="Full-Time Daily Outreach" theme={theme} />
              <TeamMember index={3} role="Quality Analyst" desc="Call Standards" theme={theme} />
              <TeamMember index={4} role="SDR Trainer" desc="Continual Improvement" theme={theme} />
              <TeamMember index={5} role="Operations Lead" desc="Delivery & Consistency" theme={theme} />
            </div>
            
            <div className="relative mt-8 group">
              <img 
                src="/regenerated_image_1777399450361.png" 
                alt="Team" 
                className="w-full h-32 object-cover rounded-xl filter grayscale group-hover:grayscale-0 transition-all duration-500 border border-brand-border"
              />
              <div className="absolute inset-0 bg-brand-accent/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
            </div>
          </motion.section>

          {/* Infrastructure */}
          <motion.section variants={itemVariants} className={`bg-brand-surface border border-brand-border p-6 rounded-2xl flex-grow ${theme === 'swiss' ? 'border-2' : ''}`}>
            <div className="flex items-center gap-3 mb-4 text-brand-accent">
              <ShieldCheck size={24} />
              <h2 className={`text-xl font-bold uppercase tracking-tight ${theme === 'prestige' ? 'font-serif' : 'font-display'}`}>Shield System</h2>
            </div>
            <div className="space-y-4">
              <FeatureItem icon={<TrendingUp size={14} />} text="Local Presence Dialing" theme={theme} />
              <FeatureItem icon={<TrendingUp size={14} />} text="Noise-Controlled Setups" theme={theme} />
              <FeatureItem icon={<TrendingUp size={14} />} text="No Recycled Numbers" theme={theme} />
              <FeatureItem icon={<TrendingUp size={14} />} text="US Market Alignment" theme={theme} />
            </div>
          </motion.section>
        </motion.div>

        {/* Outcome Footer */}
        <motion.footer 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className={`col-span-full border p-8 rounded-3xl grid grid-cols-1 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-800 ${theme === 'swiss' ? 'bg-white border-2 border-black divide-black' : 'bg-slate-950 border-brand-accent/20'}`}
        >
          <OutcomeCard 
            icon={<TrendingUp className="text-brand-accent" />} 
            title="Faster Ramp" 
            desc="Meetings in weeks, not months."
          />
          <OutcomeCard 
            icon={<Zap className="text-brand-accent" />} 
            title="Predictable Engine" 
            desc="Independent of single reps."
          />
          <OutcomeCard 
            icon={<ShieldCheck className="text-brand-accent" />} 
            title="Controlled Process" 
            desc="Measurable and coachable."
          />
          <OutcomeCard 
            icon={<MessageSquare className="text-brand-accent" />} 
            title="Qualified Focus" 
            desc="Conversations, not just activity."
          />
        </motion.footer>
      </main>
      </div>

      {/* Global Status Bar */}
      <footer className="bg-slate-950/80 backdrop-blur-md border-t border-slate-800 py-3 px-8 flex justify-between items-center text-[10px] uppercase tracking-widest text-slate-500">
        <p>© 2026 VELOCITY PRIME STRATEGY. PROPRIETARY AND CONFIDENTIAL.</p>
        <div className="flex gap-8">
          <button className="hover:text-brand-accent transition-colors">Infrastructure Log</button>
          <button className="hover:text-brand-accent transition-colors">Governance Model</button>
          <button className="hover:text-brand-accent transition-colors">BANT Verification</button>
        </div>
      </footer>
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: ReactNode, label: string, active?: boolean }) {
  return (
    <button className={`relative flex items-center gap-2 text-sm font-semibold transition-all transition-colors ${active ? 'text-brand-accent' : 'text-slate-400 hover:text-slate-200'}`}>
      {icon}
      {label}
      {active && <motion.div layoutId="underline" className="absolute -bottom-6 left-0 right-0 h-1 bg-brand-accent rounded-full" />}
    </button>
  );
}

function TimelineItem({ label, title, desc, theme }: { label: string, title: string, desc: string, theme: string }) {
  return (
    <div className={`p-4 rounded-xl border transition-colors ${theme === 'swiss' ? 'bg-white border-brand-border hover:border-black border-2' : 'bg-brand-bg/50 border-white/5 hover:border-brand-accent/20'}`}>
      <span className="text-[10px] font-black uppercase text-brand-accent tracking-widest block mb-1">{label}</span>
      <h4 className="text-base font-bold text-brand-text leading-tight mb-1">{title}</h4>
      <p className="text-xs text-brand-text-dim">{desc}</p>
    </div>
  );
}

function PhaseItem({ phase, label, title, desc, theme, active = false }: { phase: string, label: string, title: string, desc: string, theme: string, active?: boolean }) {
  return (
    <div className="flex gap-4 group">
      <div className="relative z-10 flex items-center justify-center w-4 h-4 mt-1">
        <div className={`w-2 h-2 rounded-full transition-all duration-300 ${active ? 'bg-brand-accent shadow-[0_0_12px_#4edea3] scale-125' : 'bg-slate-700'}`} />
      </div>
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className={`text-[10px] font-black uppercase ${active ? 'text-brand-accent' : 'text-slate-500'}`}>{label}</span>
          <ChevronRight size={10} className="text-slate-700" />
          <span className="text-[10px] font-bold text-slate-400 uppercase">Phase {phase}</span>
        </div>
        <h4 className={`text-base font-bold leading-none mb-1 ${active ? (theme === 'swiss' ? 'text-black' : 'text-white') : 'text-slate-500'}`}>{title}</h4>
        <p className="text-xs text-brand-text-dim">{desc}</p>
      </div>
    </div>
  );
}

function TeamMember({ index, role, desc, theme }: { index: number, role: string, desc: string, theme: string }) {
  return (
    <div className={`flex items-center gap-4 p-3 rounded-xl border transition-all duration-300 ${theme === 'swiss' ? 'bg-white border-brand-border hover:border-black border-2' : 'bg-brand-bg/30 border-white/5 hover:border-brand-accent/30'}`}>
      <div className="w-8 h-8 rounded-lg bg-brand-accent/10 flex items-center justify-center text-brand-accent text-xs font-black">
        {index}
      </div>
      <div>
        <h4 className={`text-sm font-bold transition-colors ${theme === 'swiss' ? 'text-black' : 'text-brand-text group-hover:text-white'}`}>{role}</h4>
        <p className="text-[10px] text-brand-text-dim uppercase tracking-wider font-medium">{desc}</p>
      </div>
    </div>
  );
}

function FeatureItem({ icon, text, theme }: { icon: ReactNode, text: string, theme: string }) {
  return (
    <div className={`flex items-center gap-3 transition-colors cursor-default ${theme === 'swiss' ? 'text-slate-600 hover:text-black' : 'text-brand-text-dim hover:text-brand-accent'}`}>
      <div className="text-brand-accent-dim group-hover:text-brand-accent transition-colors">{icon}</div>
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}

function OutcomeCard({ icon, title, desc }: { icon: ReactNode, title: string, desc: string }) {
  return (
    <div className="flex items-center gap-5 px-4">
      <div className="bg-brand-emerald/10 p-3 rounded-full">{icon}</div>
      <div>
        <h4 className="text-lg font-black text-white tracking-tight">{title}</h4>
        <p className="text-xs font-bold text-brand-text-dim uppercase tracking-wider">{desc}</p>
      </div>
    </div>
  );
}
