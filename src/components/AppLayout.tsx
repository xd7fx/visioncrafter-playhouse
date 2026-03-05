import { ReactNode } from 'react';
import { RightSidebar } from './RightSidebar';
import { PlatformProvider } from '@/contexts/PlatformContext';
import { Youtube } from 'lucide-react';

export const AppLayout = ({ children }: { children: ReactNode }) => (
  <PlatformProvider>
    <div className="min-h-screen flex flex-col md:flex-row w-full bg-background">
      {/* Mobile Nav */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 border-b border-border bg-sidebar">
        <span className="text-sm font-semibold gradient-text">Sunnaa Studio</span>
        <div className="flex items-center gap-2">
          <button
            className="w-8 h-8 rounded-full flex items-center justify-center ring-2 ring-primary"
            style={{ background: '#FF0000' }}
          >
            <Youtube size={14} />
          </button>
        </div>
      </div>
      <main className="flex-1 overflow-auto p-4 md:p-8">{children}</main>
      <RightSidebar />
    </div>
  </PlatformProvider>
);
