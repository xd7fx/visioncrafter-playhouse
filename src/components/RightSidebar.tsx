import { usePlatform } from '@/contexts/PlatformContext';
import { Youtube, Music2, Instagram, Twitter, Linkedin, LogOut, User } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import sunnaaLogo from '@/assets/sunnaa-logo.png';

export const RightSidebar = () => {
  const { platform } = usePlatform();
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <aside className="hidden md:flex w-[72px] min-w-[72px] border-l border-border bg-sidebar flex-col items-center py-6 gap-3">
      {/* User Avatar */}
      <div className="relative">
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-sm font-bold text-primary-foreground"
        >
          S
        </button>
        {showMenu && (
          <div className="absolute right-full mr-2 top-0 bg-card border border-border rounded-lg p-1.5 min-w-[140px] z-50 shadow-xl">
            <button
              onClick={() => { setShowMenu(false); navigate('/setup'); }}
              className="flex items-center gap-2 w-full px-3 py-2 text-sm rounded-md hover:bg-secondary transition-colors"
            >
              <User size={14} /> Profile
            </button>
            <button
              onClick={() => { setShowMenu(false); navigate('/'); }}
              className="flex items-center gap-2 w-full px-3 py-2 text-sm rounded-md hover:bg-secondary transition-colors text-destructive"
            >
              <LogOut size={14} /> Logout
            </button>
          </div>
        )}
      </div>

      <div className="w-8 h-px bg-border" />

      {/* YouTube — Active */}
      <button
        className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ring-2 ring-primary glow-cyan scale-110`}
        style={{ background: '#FF0000' }}
        title="YouTube"
      >
        <Youtube size={18} />
      </button>

      {/* TikTok — Coming Soon */}
      <div className="relative group">
        <button
          disabled
          className="w-10 h-10 rounded-full flex items-center justify-center border opacity-30 cursor-not-allowed border-muted-foreground"
          style={{ background: '#000' }}
          title="TikTok — Coming Soon"
        >
          <Music2 size={18} />
        </button>
        <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-[8px] text-muted-foreground font-semibold uppercase tracking-wider">
          Soon
        </span>
      </div>

      <div className="w-8 h-px bg-border mt-3" />

      {/* Coming Soon platforms */}
      <div className="flex flex-col items-center gap-2.5 opacity-25">
        <Instagram size={16} />
        <Twitter size={16} />
        <Linkedin size={16} />
        <span className="text-[8px] text-muted-foreground font-medium uppercase tracking-wider">Soon</span>
      </div>

      {/* Logo at bottom */}
      <div className="mt-auto">
        <img src={sunnaaLogo} alt="Sunnaa Studio" className="w-8 h-8 rounded-md" />
      </div>
    </aside>
  );
};
