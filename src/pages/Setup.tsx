import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Wand2, Pencil, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

const niches = ['Gaming', 'Vlog', 'Tech', 'Finance', 'Cooking', 'Fitness', 'Education', 'Business', 'Entertainment', 'Other'];
const tones = ['Energetic', 'Educational', 'Conversational', 'Humorous', 'Authoritative'];
const ages = ['13-17', '18-24', '25-34', '35+'];

const Setup = () => {
  const [tab, setTab] = useState<'auto' | 'manual'>('auto');
  const [channelUrl, setChannelUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [niche, setNiche] = useState('');
  const [tone, setTone] = useState('');
  const [age, setAge] = useState('');
  const [platformPref, setPlatformPref] = useState('both');
  const [audienceDesc, setAudienceDesc] = useState('');
  const navigate = useNavigate();

  const handleAuto = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 3000);
  };

  const handleManual = () => {
    navigate('/dashboard');
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">Set Up Your Creator Profile</h1>
        <p className="text-muted-foreground mt-2">Help us understand your channel so every agent is personalized for you.</p>
      </div>

      {/* Tab Switcher */}
      <div className="flex bg-secondary rounded-xl p-1">
        <button
          onClick={() => setTab('auto')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium rounded-lg transition-all ${
            tab === 'auto' ? 'bg-card shadow-sm' : 'text-muted-foreground'
          }`}
        >
          <Wand2 size={16} /> Analyze Automatically
        </button>
        <button
          onClick={() => setTab('manual')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 text-sm font-medium rounded-lg transition-all ${
            tab === 'manual' ? 'bg-card shadow-sm' : 'text-muted-foreground'
          }`}
        >
          <Pencil size={16} /> Set Up Manually
        </button>
      </div>

      <motion.div
        key={tab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-card border border-border rounded-2xl p-6 md:p-8"
      >
        {tab === 'auto' ? (
          <div className="space-y-6">
            {loading ? (
              <div className="flex flex-col items-center py-12 gap-4">
                <Loader2 size={40} className="animate-spin text-primary" />
                <p className="text-muted-foreground animate-pulse">Analyzing your channel with AI...</p>
              </div>
            ) : (
              <>
                <div className="space-y-2">
                  <Label>YouTube Channel URL or @handle</Label>
                  <Input
                    placeholder="https://youtube.com/@yourchannel"
                    value={channelUrl}
                    onChange={e => setChannelUrl(e.target.value)}
                    className="bg-secondary border-border rounded-[10px]"
                  />
                </div>
                <Button variant="gradient" className="w-full" size="lg" onClick={handleAuto}>
                  Analyze My Channel
                </Button>
              </>
            )}
          </div>
        ) : (
          <div className="space-y-5">
            <div className="space-y-2">
              <Label>Niche</Label>
              <Select value={niche} onValueChange={setNiche}>
                <SelectTrigger className="bg-secondary border-border rounded-[10px]">
                  <SelectValue placeholder="Select your niche" />
                </SelectTrigger>
                <SelectContent>
                  {niches.map(n => <SelectItem key={n} value={n.toLowerCase()}>{n}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Tone</Label>
              <Select value={tone} onValueChange={setTone}>
                <SelectTrigger className="bg-secondary border-border rounded-[10px]">
                  <SelectValue placeholder="Select your tone" />
                </SelectTrigger>
                <SelectContent>
                  {tones.map(t => <SelectItem key={t} value={t.toLowerCase()}>{t}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Audience Age</Label>
              <Select value={age} onValueChange={setAge}>
                <SelectTrigger className="bg-secondary border-border rounded-[10px]">
                  <SelectValue placeholder="Select age range" />
                </SelectTrigger>
                <SelectContent>
                  {ages.map(a => <SelectItem key={a} value={a}>{a}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Platform</Label>
              <div className="flex gap-2">
                {['youtube', 'tiktok', 'both'].map(p => (
                  <button
                    key={p}
                    onClick={() => setPlatformPref(p)}
                    className={`flex-1 py-2 text-sm font-medium rounded-[10px] border transition-all capitalize ${
                      platformPref === p ? 'border-primary bg-primary/10' : 'border-border bg-secondary'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label>Describe your audience (optional)</Label>
              <Textarea
                placeholder="E.g. Young professionals interested in side hustles..."
                value={audienceDesc}
                onChange={e => setAudienceDesc(e.target.value)}
                className="bg-secondary border-border rounded-[10px] resize-none"
                rows={3}
              />
            </div>
            <Button variant="gradient" className="w-full" size="lg" onClick={handleManual}>
              Build My Profile
            </Button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Setup;
