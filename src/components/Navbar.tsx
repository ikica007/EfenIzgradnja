import { useState, useEffect, useRef } from 'react';
import { Menu, X, LogIn, LogOut, Settings, Bell, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useNotifications } from '../hooks/useNotifications';

const Logo = () => (
  <div className="flex flex-col items-center leading-none font-black tracking-tighter">
    <div className="flex items-center text-5xl md:text-6xl lg:text-7xl">
      <span className="text-black">E</span>
      <span className="text-[#f05a28] -ml-1">F</span>
      <span className="text-black -ml-1">EN</span>
    </div>
    <div className="flex items-center text-sm md:text-base tracking-[0.2em] text-[#f05a28] mt-1 font-bold">
      <span>IZGRADNJA</span>
    </div>
  </div>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const { user, role, loginWithGoogle, logout, error, clearError } = useAuth();
  const { notifications, unreadCount, markAsRead } = useNotifications();
  const notifRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Auto-clear error after 5 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        clearError();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error, clearError]);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    if (!showNotifications) {
      markAsRead();
    }
  };

  return (
    <>
      {/* Error Toast */}
      {error && (
        <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-[100] bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl shadow-lg flex items-center max-w-md w-[90%] animate-in fade-in slide-in-from-top-4">
          <AlertCircle className="w-5 h-5 text-red-500 mr-3 shrink-0" />
          <p className="text-sm font-medium">{error}</p>
          <button onClick={clearError} className="ml-auto text-red-400 hover:text-red-600">
            <X size={16} />
          </button>
        </div>
      )}

      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center relative">
          <div className="md:hidden">
            {/* Empty div to balance flex on mobile */}
          </div>
          
          <nav className="hidden lg:flex items-center space-x-3">
            <Link to="/" className="text-sm font-medium text-gray-800 hover:text-[#f05a28] bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-full shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-0.5">Početna</Link>
            <Link to="/prodaja" className="text-sm font-medium text-gray-800 hover:text-[#f05a28] bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-full shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-0.5">Prodaja</Link>
            <Link to="/usluge" className="text-sm font-medium text-gray-800 hover:text-[#f05a28] bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-full shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-0.5">Izvođenje radova</Link>
            <Link to="/o-nama" className="text-sm font-medium text-gray-800 hover:text-[#f05a28] bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-full shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-0.5">O nama</Link>
            <Link to="/kontakt" className="text-sm font-medium text-gray-800 hover:text-[#f05a28] bg-white/80 backdrop-blur-md px-5 py-2.5 rounded-full shadow-sm border border-gray-100 transition-all hover:shadow-md hover:-translate-y-0.5">Kontakt</Link>
          </nav>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            {/* Logo removed from here */}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            {user && (
              <div className="relative" ref={notifRef}>
                <button 
                  onClick={toggleNotifications}
                  className="text-gray-600 hover:text-[#f05a28] transition-colors relative" 
                  title="Obavještenja"
                >
                  <Bell size={20} />
                  {unreadCount > 0 && (
                    <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                      {unreadCount}
                    </span>
                  )}
                </button>
                
                {showNotifications && (
                  <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
                    <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                      <h3 className="font-bold text-gray-800">Obavještenja</h3>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {notifications.length === 0 ? (
                        <div className="p-6 text-center text-gray-500 text-sm">
                          Nema novih obavještenja
                        </div>
                      ) : (
                        <div className="divide-y divide-gray-50">
                          {notifications.map((notif) => (
                            <div key={notif.id} className="p-4 hover:bg-gray-50 transition-colors">
                              <h4 className="font-bold text-sm text-gray-800 mb-1">{notif.title}</h4>
                              <p className="text-xs text-gray-600">{notif.message}</p>
                              {notif.createdAt && (
                                <span className="text-[10px] text-gray-400 mt-2 block">
                                  {notif.createdAt.toDate ? notif.createdAt.toDate().toLocaleString('sr-RS') : 'Nedavno'}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {role === 'admin' && (
              <Link to="/admin" className="text-gray-600 hover:text-[#f05a28] transition-colors" title="Admin Panel">
                <Settings size={20} />
              </Link>
            )}
            
            {user ? (
              <button onClick={logout} className="text-gray-600 hover:text-[#f05a28] transition-colors" title="Odjavi se">
                <LogOut size={20} />
              </button>
            ) : (
              <button onClick={loginWithGoogle} className="text-gray-600 hover:text-[#f05a28] transition-colors" title="Prijavi se">
                <LogIn size={20} />
              </button>
            )}

            <Link to="/kontakt" className="bg-[#f05a28] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-[#d94d1f] transition-colors shadow-lg shadow-orange-500/30">
              Zatraži ponudu
            </Link>
          </div>

          <button 
            className="md:hidden p-2 text-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 flex flex-col space-y-4">
          <Link to="/" className="text-base font-medium text-gray-800" onClick={() => setMobileMenuOpen(false)}>Početna</Link>
          <Link to="/prodaja" className="text-base font-medium text-gray-800" onClick={() => setMobileMenuOpen(false)}>Prodaja</Link>
          <Link to="/usluge" className="text-base font-medium text-gray-800" onClick={() => setMobileMenuOpen(false)}>Izvođenje radova</Link>
          <Link to="/o-nama" className="text-base font-medium text-gray-800" onClick={() => setMobileMenuOpen(false)}>O nama</Link>
          <Link to="/kontakt" className="text-base font-medium text-gray-800" onClick={() => setMobileMenuOpen(false)}>Kontakt</Link>
          
          <div className="border-t border-gray-100 pt-4 flex flex-col space-y-4">
            {user && (
              <button onClick={toggleNotifications} className="text-base font-medium text-gray-800 flex items-center text-left">
                <Bell size={18} className="mr-2" /> Obavještenja {unreadCount > 0 && <span className="ml-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">{unreadCount}</span>}
              </button>
            )}
            {role === 'admin' && (
              <Link to="/admin" className="text-base font-medium text-gray-800 flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <Settings size={18} className="mr-2" /> Admin Panel
              </Link>
            )}
            {user ? (
              <button onClick={() => { logout(); setMobileMenuOpen(false); }} className="text-base font-medium text-gray-800 flex items-center text-left">
                <LogOut size={18} className="mr-2" /> Odjavi se
              </button>
            ) : (
              <button onClick={() => { loginWithGoogle(); setMobileMenuOpen(false); }} className="text-base font-medium text-gray-800 flex items-center text-left">
                <LogIn size={18} className="mr-2" /> Prijavi se
              </button>
            )}
            <Link to="/kontakt" className="bg-[#f05a28] text-white px-6 py-3 rounded-full text-center font-bold" onClick={() => setMobileMenuOpen(false)}>
              Zatraži ponudu
            </Link>
          </div>
        </div>
      )}
    </header>
    </>
  );
}
