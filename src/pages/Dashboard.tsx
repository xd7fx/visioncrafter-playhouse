import { youtubeAgents, comingSoonAgents } from '@/lib/agents';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, TrendingUp, BarChart3, Type, Image, Lightbulb, Zap, FileText, Lock, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const iconMap: Record<string, any> = { BarChart3, TrendingUp, Type, Image, Lightbulb, Zap, FileText };

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>

      {/* Top Cards */}
      <div className="grid md:grid-cols-2 gap-5">
        <div className="bg-card rounded-2xl border border-border p-6 border-l-4 border-l-primary">
          <h3 className="font-semibold text-lg mb-1">Creator Profile</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Set up your channel to personalize all agents.
          </p>
          <Button variant="outline" size="sm" onClick={() => navigate('/setup')}>
            Set up your channel <ArrowRight size={14} />
          </Button>
        </div>

        <div className="bg-card rounded-2xl border border-border p-6 gradient-border-glow">
          <h3 className="font-semibold text-lg mb-1">Trending in your niche</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Run trend analysis to unlock real-time insights.
          </p>
          <Button variant="outline" size="sm" onClick={() => navigate('/agent/trend-intelligence')}>
            Run Trend Analysis <TrendingUp size={14} />
          </Button>
        </div>
      </div>

      {/* Agent Grid */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <h2 className="text-xl font-semibold">Your Agents</h2>
          <span className="text-xs px-3 py-1 rounded-full gradient-bg font-semibold text-primary-foreground flex items-center gap-1.5">
            <Youtube size={12} /> YouTube
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {youtubeAgents.map((agent, i) => {
            const Icon = iconMap[agent.iconName];
            return (
              <motion.button
                key={agent.id}
                onClick={() => navigate(`/agent/${agent.id}`)}
                className="bg-card border border-border rounded-2xl p-6 text-left group relative card-hover-glow"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
              >
                <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center mb-4">
                  <Icon size={20} className="text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-1">{agent.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{agent.description}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary group-hover:underline">
                  Open Agent <ArrowRight size={12} />
                </span>
              </motion.button>
            );
          })}
          {comingSoonAgents.map((agent, i) => {
            const Icon = iconMap[agent.iconName];
            return (
              <motion.button
                key={agent.id}
                disabled
                className="bg-card border border-border rounded-2xl p-6 text-left opacity-50 cursor-not-allowed"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (youtubeAgents.length + i) * 0.06 }}
              >
                <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center mb-4">
                  <Icon size={20} className="text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-1">{agent.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{agent.description}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <Lock size={12} /> Coming Soon
                </span>
              </motion.button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
