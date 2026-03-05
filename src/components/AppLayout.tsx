import { ReactNode } from 'react';
import { RightSidebar } from './RightSidebar';
import { PlatformProvider } from '@/contexts/PlatformContext';
import { usePlatform } from '@/contexts/PlatformContext';
import { Youtube, Music2 } from 'lucide-react';

const MobileNav = () => {
  const { platform, setPlatform } = usePlatform();

  return (
    <div className="md:hidden flex items-center justify-between px-4 py-3 border-b border-border bg-sidebar">
      <span className="text-sm font-semibold gradient-text">Sunnaa Studio</span>
      <div className="flex items-center gap-2">
        <button
          onClick={() => setPlatform('youtube')}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            platform === 'youtube' ? 'ring-2 ring-primary' : 'opacity-50'
          }`}
          style={{ background: '#FF0000' }}
        >
          <Youtube size={14} />
        </button>
        <div className="relative">
          <button
            disabled
            className="w-8 h-8 rounded-full flex items-center justify-center border opacity-30 cursor-not-allowed border-muted-foreground"
            style={{ background: '#000' }}
          >
            <Music2 size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export const AppLayout = ({ children }: { children: ReactNode }) => (
  <PlatformProvider>
    <div className="min-h-screen flex flex-col md:flex-row w-full bg-background">
      <MobileNav />
      <main className="flex-1 overflow-auto p-4 md:p-8">{children}</main>
      <RightSidebar />
    </div>
  </PlatformProvider>
);
