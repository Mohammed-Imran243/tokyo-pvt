import { NavLink } from 'react-router-dom';
import { Home, Mail, Image as ImageIcon, Mic, Sparkles, MoreHorizontal } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/letters', label: 'Letters', icon: Mail },
  { to: '/memories', label: 'Memories', icon: ImageIcon },
  { to: '/voice', label: 'Voice', icon: Mic },
  { to: '/night-sky', label: 'Stars', icon: Sparkles },
];


export function BottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-scrapbook-bg/95 backdrop-blur-md border-t border-warm-brown/15 safe-bottom">
      <div className="flex items-center justify-around px-1 h-16">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center gap-0.5 py-1.5 px-2 min-w-[48px] min-h-[48px] rounded-xl transition-all duration-200 ${
                isActive
                  ? 'text-blush'
                  : 'text-cream/40 active:text-cream/60'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <item.icon size={20} strokeWidth={isActive ? 2.2 : 1.5} />
                <span className="text-[10px] font-sans leading-none mt-0.5">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
        <NavLink
          to="/more"
          className={({ isActive }) =>
            `flex flex-col items-center justify-center gap-0.5 py-1.5 px-2 min-w-[48px] min-h-[48px] rounded-xl transition-all duration-200 ${
              isActive
                ? 'text-blush'
                : 'text-cream/40 active:text-cream/60'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <MoreHorizontal size={20} strokeWidth={isActive ? 2.2 : 1.5} />
              <span className="text-[10px] font-sans leading-none mt-0.5">More</span>
            </>
          )}
        </NavLink>
      </div>
    </nav>
  );
}
