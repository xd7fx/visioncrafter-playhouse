export type ToolId = 'channel-analysis' | 'trend-intelligence' | 'title' | 'thumbnail' | 'ideas' | 'hook' | 'script';
export type Platform = 'youtube' | 'tiktok';

export interface Tool {
  id: ToolId;
  name: string;
  description: string;
  platforms: Platform[];
  iconName: string;
  comingSoon?: boolean;
}

export const youtubeTools: Tool[] = [
  { id: 'channel-analysis', name: 'Channel Insights', description: 'Understand your channel performance and content patterns.', platforms: ['youtube'], iconName: 'BarChart3' },
  { id: 'trend-intelligence', name: 'Trend Finder', description: "Discover what's trending in your niche right now.", platforms: ['youtube'], iconName: 'TrendingUp' },
  { id: 'title', name: 'Title Generator', description: 'Create high-CTR YouTube titles in seconds.', platforms: ['youtube'], iconName: 'Type' },
  { id: 'thumbnail', name: 'Thumbnail Ideas', description: 'Generate thumbnail concepts that stop the scroll.', platforms: ['youtube'], iconName: 'Image' },
  { id: 'ideas', name: 'Video Ideas', description: 'Never run out of content ideas again.', platforms: ['youtube'], iconName: 'Lightbulb' },
];

export const comingSoonTools: Tool[] = [
  { id: 'hook', name: 'Hook Generator', description: 'Create powerful opening lines that grab attention.', platforms: ['youtube'], iconName: 'Zap', comingSoon: true },
  { id: 'script', name: 'Script Writer', description: 'Generate full short-form video scripts in seconds.', platforms: ['youtube'], iconName: 'FileText', comingSoon: true },
];

export const allTools: Tool[] = [...youtubeTools, ...comingSoonTools];

export const getToolById = (id: string) => allTools.find(a => a.id === id);
