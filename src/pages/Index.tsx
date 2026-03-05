import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { youtubeTools, comingSoonTools } from '@/lib/agents';
import { BarChart3, TrendingUp, Type, Image, Lightbulb, Zap, FileText, ArrowRight, Youtube, Music2, Instagram, Twitter, Linkedin, Lock } from 'lucide-react';
import sunnaaLogo from '@/assets/sunnaa-logo.png';

const iconMap: Record<string, any> = { BarChart3, TrendingUp, Type, Image, Lightbulb, Zap, FileText };

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-4 border-b border-border/50 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <img src={sunnaaLogo} alt="Sunnaa Studio" className="w-9 h-9 rounded-lg" />
          <span className="text-lg font-bold tracking-tight">Sunnaa Studio</span>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={() => navigate('/auth')}>
            Login
          </Button>
          <Button variant="gradient" size="sm" onClick={() => navigate('/auth')}>
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-24 pb-20 md:pt-36 md:pb-28 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] pointer-events-none" />

        <motion.img
          src={sunnaaLogo}
          alt="Sunnaa Studio"
          className="w-20 h-20 md:w-24 md:h-24 rounded-2xl mb-8 relative z-10"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="mb-6 relative z-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border text-xs font-medium text-muted-foreground">
            <Youtube size={14} className="text-destructive" />
            Built for YouTube creators
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 relative z-10 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Your AI-Powered{' '}
          <span className="gradient-text">YouTube Content Studio</span>
        </motion.h1>
        <motion.p
          className="text-base md:text-lg text-muted-foreground max-w-2xl mb-10 relative z-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Analyze your channel, discover what's trending, and generate titles, thumbnails and video ideas — all in one place.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 mb-12 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button variant="gradient" size="lg" onClick={() => navigate('/auth')}>
            Start Free <ArrowRight size={18} />
          </Button>
          <Button variant="ghost" size="lg" onClick={() => {
            document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            See How It Works
          </Button>
        </motion.div>

        {/* Platform badges */}
        <motion.div
          className="flex items-center gap-4 relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
            <Youtube size={18} className="text-destructive" />
            <span className="text-sm font-medium">YouTube</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 opacity-50 cursor-not-allowed">
            <Music2 size={18} />
            <span className="text-sm font-medium">TikTok</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-muted text-muted-foreground font-semibold uppercase">Soon</span>
          </div>
        </motion.div>
      </section>

      {/* Tools */}
      <section id="features" className="px-6 md:px-12 pb-28">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Powerful Tools for{' '}
            <span className="gradient-text">YouTube Creators</span>
          </h2>
          <p className="text-center text-muted-foreground mb-14 max-w-lg mx-auto">
            Everything you need to grow your channel — powered by AI.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {youtubeTools.map((tool, i) => {
              const Icon = iconMap[tool.iconName];
              return (
                <motion.div
                  key={tool.id}
                  className="bg-card border border-border rounded-2xl p-6 group relative card-hover-glow cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                    <Icon size={22} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{tool.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{tool.description}</p>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-medium">
                    YouTube
                  </span>
                </motion.div>
              );
            })}
            {comingSoonTools.map((tool, i) => {
              const Icon = iconMap[tool.iconName];
              return (
                <motion.div
                  key={tool.id}
                  className="bg-card border border-border rounded-2xl p-6 opacity-50 cursor-not-allowed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (youtubeTools.length + i) * 0.08 }}
                >
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                    <Icon size={22} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{tool.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{tool.description}</p>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-muted text-muted-foreground font-medium flex items-center gap-1 w-fit">
                    <Lock size={10} /> Coming Soon
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={sunnaaLogo} alt="Sunnaa Studio" className="w-7 h-7 rounded-md" />
            <span className="text-sm text-muted-foreground">Sunnaa Studio © 2025</span>
          </div>
          <p className="text-sm text-muted-foreground">Built for creators. Powered by AI.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
