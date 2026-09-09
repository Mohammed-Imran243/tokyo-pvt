import { NavLink } from 'react-router-dom';
import { Home, Mail, Image as ImageIcon, Mic, Sparkles, MoreHorizontal } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/letters', label: 'Letters', icon: Mail },
  { to: '/memories', label: 'Memories', icon: ImageIcon },
  { to: '/voice', label: 'Voice', icon: Mic },
  { to: '/night-sky', label: 'Stars', icon: Sparkles },
  { to: '/more', label: 'More', icon: MoreHorizontal },
];


export function FloatingNav() {
  return (
    <nav className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-scrapbook-bg/85 backdrop-blur-xl border border-warm-brown/20 rounded-2xl px-2 py-2 shadow-xl">
      <div className="flex items-center gap-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-sans font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-blush/15 text-blush border border-blush/20'
                  : 'text-cream/50 hover:text-cream hover:bg-cream/5 border border-transparent'
              }`
            }
          >
            <item.icon size={16} />
            <span className="hidden lg:inline">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
