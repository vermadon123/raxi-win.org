import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from '/assets/raxi-win-logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Login', href: '/login' },
    { name: 'Register', href: '/registration' },
    { name: 'APK', href: '/apk' },
    { name: 'Gift code', href: '/#gift-code' },
    { name: 'Payments', href: '/#payments' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border-b border-white/10' 
        : 'bg-background/80 backdrop-blur-sm'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Raxi Win"
              className="h-12 md:h-14 w-auto max-w-[180px] object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://www.raxi12.com/#/login" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">
                Login
              </Button>
            </a>
            <a href="https://www.raxi12.com/#/register?invitationCode=18913432260" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg">
                Register
              </Button>
            </a>
          </div>

          {/* Mobile CTA Buttons & Menu */}
          <div className="md:hidden flex items-center space-x-3">
            <a href="https://www.raxi12.com/#/login" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm">
                Login
              </Button>
            </a>
            <a href="https://www.raxi12.com/#/register?invitationCode=18913432260" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="sm">
                Register
              </Button>
            </a>
            <button
              type="button"
              className="p-2 rounded-lg bg-gradient-primary hover:bg-gradient-primary/90 transition-all duration-300 shadow-glow"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-menu"
            >
              {isMobileMenuOpen ? (
                <X size={20} className="text-white" aria-hidden="true" />
              ) : (
                <Menu size={20} className="text-white" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-nav-menu"
            className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4"
          >
            <div className="bg-background rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-white/10 p-6 animate-scroll-reveal">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-foreground hover:text-primary transition-colors py-3 px-4 rounded-xl hover:bg-white/5 relative group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-4 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-8"></span>
                  </a>
                ))}
              <div className="flex flex-col space-y-3 pt-4 border-t border-white/10">
                <a href="https://www.raxi12.com/#/register?invitationCode=18913432260" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg" className="w-full">
                    Login
                  </Button>
                </a>
                <a href="https://www.raxi12.com/#/register?invitationCode=18913432260" target="_blank" rel="noopener noreferrer">
                  <Button variant="hero" size="lg" className="w-full">
                    Register
                  </Button>
                </a>
              </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
