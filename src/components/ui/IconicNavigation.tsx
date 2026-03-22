import React, { useState } from 'react';
import { 
  Home, 
  BookOpen, 
  GraduationCap, 
  FileText, 
  Users, 
  Settings, 
  Star,
  Zap,
  Rocket,
  Heart,
  Trophy,
  Sparkles,
  Flame
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
  badge?: string;
  gradient?: boolean;
}

const IconicNavigation: React.FC = () => {
  const [activeItem, setActiveItem] = useState('academics');
  const [isExpanded, setIsExpanded] = useState(false);

  const navItems: NavItem[] = [
    {
      id: 'academics',
      label: 'Academics',
      icon: <GraduationCap className="w-5 h-5" />,
      href: '/school/academics',
      gradient: true
    },
    {
      id: 'assignments',
      label: 'Assignments',
      icon: <FileText className="w-5 h-5" />,
      href: '/school/assignments',
      badge: '3'
    },
    {
      id: 'grades',
      label: 'Grades',
      icon: <Trophy className="w-5 h-5" />,
      href: '/school/grades'
    },
    {
      id: 'community',
      label: 'Community',
      icon: <Users className="w-5 h-5" />,
      href: '/school/community'
    },
    {
      id: 'resources',
      label: 'Resources',
      icon: <BookOpen className="w-5 h-5" />,
      href: '/school/resources'
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: <Settings className="w-5 h-5" />,
      href: '/school/profile'
    }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:top-0 md:left-0 md:right-auto md:h-screen md:w-20 lg:w-64">
      <div className="h-full bg-gradient-to-b from-slate-900/95 to-slate-800/95 backdrop-blur-xl border-t border-slate-700/50 md:border-r md:border-t-0">
        {/* Mobile Header */}
        <div className="md:hidden flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-purple-400 animate-pulse" />
            <span className="text-white font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              NextERP
            </span>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-white/70 hover:text-white transition-colors"
          >
            <Zap className="w-6 h-6" />
          </button>
        </div>

        {/* Desktop Logo */}
        <div className="hidden md:flex items-center justify-center p-6 border-b border-slate-700/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center animate-glow">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <div className={`hidden lg:block transition-all duration-300 ${isExpanded ? 'opacity-100' : 'opacity-0 w-0'}`}>
              <span className="text-white font-bold text-lg bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                NextERP Systems
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <div className={`flex md:flex-col gap-2 p-4 ${isExpanded ? 'block' : 'hidden md:block'}`}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => setActiveItem(item.id)}
              className={cn(
                'group relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300',
                'hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20',
                'active:scale-95',
                activeItem === item.id && 'bg-gradient-to-r from-purple-500/30 to-pink-500/30'
              )}
            >
              {/* Active Indicator */}
              {activeItem === item.id && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-purple-400 to-pink-400 rounded-r-full animate-pulse" />
              )}

              {/* Icon */}
              <div className={cn(
                'relative flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-300',
                item.gradient && activeItem === item.id && 'bg-gradient-to-br from-purple-500 to-pink-500 animate-glow',
                activeItem === item.id && !item.gradient && 'bg-purple-500/20'
              )}>
                <span className={cn(
                  'transition-colors',
                  activeItem === item.id ? 'text-white' : 'text-slate-400 group-hover:text-white'
                )}>
                  {item.icon}
                </span>
                
                {/* Badge */}
                {item.badge && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
                    {item.badge}
                  </span>
                )}
              </div>

              {/* Label */}
              <span className={cn(
                'hidden md:block transition-all duration-300',
                activeItem === item.id ? 'text-white font-semibold' : 'text-slate-400 group-hover:text-white',
                !isExpanded && 'lg:hidden'
              )}>
                {item.label}
              </span>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </div>

        {/* Bottom Actions */}
        <div className="hidden md:flex flex-col gap-2 p-4 mt-auto border-t border-slate-700/50">
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 group">
            <Heart className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
            <span className={`hidden lg:block transition-all duration-300 text-slate-400 group-hover:text-white ${!isExpanded && 'hidden'}`}>
              Favorites
            </span>
          </button>
          
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 group">
            <Flame className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors animate-pulse" />
            <span className={`hidden lg:block transition-all duration-300 text-slate-400 group-hover:text-white ${!isExpanded && 'hidden'}`}>
              Activity
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default IconicNavigation;
