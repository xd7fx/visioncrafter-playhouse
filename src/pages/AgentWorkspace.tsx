import { useParams, useNavigate } from 'react-router-dom';
import { getAgentById } from '@/lib/agents';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, Copy, RefreshCw, Download, Loader2, Sparkles, BarChart3, TrendingUp, Type, Image, Lightbulb, Zap, FileText } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const iconMap: Record<string, any> = { BarChart3, TrendingUp, Type, Image, Lightbulb, Zap, FileText };

const AgentWorkspace = () => {
  const { agentId } = useParams();
  const navigate = useNavigate();
  const agent = getAgentById(agentId || '');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  if (!agent) {
    return (
      <div className="flex items-center justify-center h-full">
        <p className="text-muted-foreground">Agent not found.</p>
      </div>
    );
  }

  const Icon = iconMap[agent.iconName];

  const handleGenerate = () => {
    setLoading(true);
    setTimeout(() => {
      setOutput(`# Sample ${agent.name} Output\n\nThis is a placeholder output from the **${agent.name}**. Once connected to the AI backend, this will show real generated content.\n\n## Key Points\n- Point one with actionable insight\n- Point two with data-driven recommendation\n- Point three with creative suggestion\n\n> "Great content starts with great tools." — Sunnaa Studio`);
      setLoading(false);
    }, 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(output);
  };

  const handleExport = () => {
    const blob = new Blob([output], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${agent.id}-output.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button onClick={() => navigate('/dashboard')} className="p-2 rounded-lg hover:bg-secondary transition-colors">
          <ArrowLeft size={20} />
        </button>
        <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
          <Icon size={20} className="text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-xl font-bold">{agent.name}</h1>
          <p className="text-sm text-muted-foreground">{agent.description}</p>
        </div>
      </div>

      {/* Two panels */}
      <div className="grid lg:grid-cols-2 gap-5">
        {/* Input Panel */}
        <div className="bg-card border border-border rounded-2xl p-6 space-y-5">
          <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">Input</h3>
          <AgentInputFields agentId={agent.id} />
          <Button variant="gradient" className="w-full" size="lg" onClick={handleGenerate} disabled={loading}>
            {loading ? <><Loader2 size={18} className="animate-spin" /> Generating...</> : <><Sparkles size={18} /> Generate</>}
          </Button>
        </div>

        {/* Output Panel */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-4">Output</h3>
          {loading ? (
            <div className="flex flex-col items-center justify-center py-16 gap-3">
              <Loader2 size={32} className="animate-spin text-primary" />
              <p className="text-sm text-muted-foreground animate-pulse">Agent is working...</p>
            </div>
          ) : output ? (
            <div className="space-y-4">
              <div className="bg-secondary rounded-xl p-5 text-sm leading-relaxed whitespace-pre-wrap">
                {output}
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={handleCopy}>
                  <Copy size={14} /> Copy
                </Button>
                <Button variant="outline" size="sm" onClick={handleGenerate}>
                  <RefreshCw size={14} /> Regenerate
                </Button>
                <Button variant="outline" size="sm" onClick={handleExport}>
                  <Download size={14} /> Export
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-16 gap-3 text-muted-foreground">
              <Sparkles size={32} className="opacity-30" />
              <p className="text-sm">Your output will appear here</p>
              <p className="text-xs opacity-60">Fill in the inputs and hit generate</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Input fields per agent type
const AgentInputFields = ({ agentId }: { agentId: string }) => {
  switch (agentId) {
    case 'title':
      return (
        <>
          <div className="space-y-2">
            <Label>What is your video about?</Label>
            <Textarea placeholder="Describe the video topic..." className="bg-secondary border-border rounded-[10px] resize-none" rows={3} />
          </div>
          <div className="space-y-2">
            <Label>Keywords to include (optional)</Label>
            <Input placeholder="e.g. AI, productivity, beginner" className="bg-secondary border-border rounded-[10px]" />
          </div>
        </>
      );
    case 'thumbnail':
      return (
        <>
          <div className="space-y-2">
            <Label>Confirmed video title</Label>
            <Input placeholder="Your final video title" className="bg-secondary border-border rounded-[10px]" />
          </div>
          <div className="space-y-2">
            <Label>Color scheme</Label>
            <Select>
              <SelectTrigger className="bg-secondary border-border rounded-[10px]"><SelectValue placeholder="Choose colors" /></SelectTrigger>
              <SelectContent>
                {['Yellow + Black', 'Red + White', 'Blue + Orange', 'Green + White', 'Purple + Yellow'].map(c => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label>Include face?</Label>
            <div className="flex gap-2">
              {['Yes', 'No'].map(v => (
                <button key={v} className="flex-1 py-2 text-sm rounded-[10px] border border-border bg-secondary hover:bg-muted transition-colors">{v}</button>
              ))}
            </div>
          </div>
        </>
      );
    case 'ideas':
      return (
        <>
          <div className="space-y-2">
            <Label>Topic direction (optional)</Label>
            <Textarea placeholder="Any specific direction you want ideas around..." className="bg-secondary border-border rounded-[10px] resize-none" rows={3} />
          </div>
          <div className="space-y-2">
            <Label>Format preference</Label>
            <Select>
              <SelectTrigger className="bg-secondary border-border rounded-[10px]"><SelectValue placeholder="Any format" /></SelectTrigger>
              <SelectContent>
                {['Any', 'Tutorial', 'Story', 'List', 'Comparison', 'Challenge'].map(f => (
                  <SelectItem key={f} value={f.toLowerCase()}>{f}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </>
      );
    case 'hook':
      return (
        <>
          <div className="space-y-2">
            <Label>Confirmed video title</Label>
            <Input placeholder="Your final video title" className="bg-secondary border-border rounded-[10px]" />
          </div>
          <div className="space-y-2">
            <Label>Hook pattern</Label>
            <Select>
              <SelectTrigger className="bg-secondary border-border rounded-[10px]"><SelectValue placeholder="Auto" /></SelectTrigger>
              <SelectContent>
                {['Auto', 'Preview', 'Curiosity Escalation', 'Problem Amplification', 'Immediate Value'].map(p => (
                  <SelectItem key={p} value={p.toLowerCase()}>{p}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </>
      );
    case 'script':
      return (
        <>
          <div className="space-y-2">
            <Label>Video topic</Label>
            <Input placeholder="What's the video about?" className="bg-secondary border-border rounded-[10px]" />
          </div>
          <div className="space-y-2">
            <Label>Paste your confirmed hook</Label>
            <Textarea placeholder="Paste the hook you want to use..." className="bg-secondary border-border rounded-[10px] resize-none" rows={3} />
          </div>
          <div className="space-y-2">
            <Label>Duration</Label>
            <Select>
              <SelectTrigger className="bg-secondary border-border rounded-[10px]"><SelectValue placeholder="Select duration" /></SelectTrigger>
              <SelectContent>
                {['30s', '45s', '60s', '90s'].map(d => (
                  <SelectItem key={d} value={d}>{d}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </>
      );
    case 'channel-analysis':
      return (
        <div className="space-y-2">
          <Label>YouTube Channel URL or @handle</Label>
          <Input placeholder="https://youtube.com/@yourchannel" className="bg-secondary border-border rounded-[10px]" />
        </div>
      );
    case 'trend-intelligence':
      return (
        <div className="space-y-2">
          <Label>Focus topic (optional)</Label>
          <Input placeholder="Leave empty for general trends in your niche" className="bg-secondary border-border rounded-[10px]" />
        </div>
      );
    default:
      return null;
  }
};

export default AgentWorkspace;
