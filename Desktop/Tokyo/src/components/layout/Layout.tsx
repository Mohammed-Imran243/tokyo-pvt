import { Outlet } from 'react-router-dom';
import { BottomNav } from './BottomNav';
import { FloatingNav } from './FloatingNav';

export function Layout() {
  return (
    <div className="min-h-screen bg-scrapbook-bg text-cream relative selection:bg-blush/30 selection:text-cream">
      {/* Background ambient lighting */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-warm-brown/5 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-blush/5 blur-[120px]" />
      </div>

      {/* Desktop Floating Navigation */}
      <FloatingNav />

      {/* Main Page Content */}
      <main className="relative z-10 page-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>

      {/* Mobile Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
