export type AgentId = 'channel-analysis' | 'trend-intelligence' | 'title' | 'thumbnail' | 'ideas' | 'hook' | 'script';
export type Platform = 'youtube' | 'tiktok';

export interface Agent {
  id: AgentId;
  name: string;
  description: string;
  platforms: Platform[];
  iconName: string;
}

export const youtubeAgents: Agent[] = [
  { id: 'channel-analysis', name: 'Channel Analysis', description: 'Understands your channel deeply', platforms: ['youtube'], iconName: 'BarChart3' },
  { id: 'trend-intelligence', name: 'Trend Intelligence', description: "Tracks what's working right now", platforms: ['youtube'], iconName: 'TrendingUp' },
  { id: 'title', name: 'Title Agent', description: 'High-CTR titles, every time', platforms: ['youtube'], iconName: 'Type' },
  { id: 'thumbnail', name: 'Thumbnail Agent', description: 'Thumbnails that stop the scroll', platforms: ['youtube'], iconName: 'Image' },
  { id: 'ideas', name: 'Idea Agent', description: 'Never run out of content ideas', platforms: ['youtube'], iconName: 'Lightbulb' },
];

export const comingSoonAgents: Agent[] = [
  { id: 'hook', name: 'Hook Agent', description: 'Opening lines that retain viewers', platforms: ['tiktok'], iconName: 'Zap' },
  { id: 'script', name: 'Script Agent', description: 'Full TikTok scripts in seconds', platforms: ['tiktok'], iconName: 'FileText' },
];

export const agents: Agent[] = [...youtubeAgents, ...comingSoonAgents];

export const getAgentById = (id: string) => agents.find(a => a.id === id);
