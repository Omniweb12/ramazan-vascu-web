import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./button";
import { Menu, X, Phone, Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { href: "/", label: "Acasă" },
    { href: "/specializari", label: "Specializări" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-card/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-card-medical">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/9690725a-3905-496e-bcc0-b33d98156aa0.png" 
                alt="Dr. Ramazan Diler Logo" 
                className="h-12 w-auto"
              />
              <div className="hidden sm:block">
                <p className="text-sm text-muted-foreground">Chirurgie Vasculară</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground shadow-button-medical"
                      : "text-foreground hover:text-primary hover:bg-accent"
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>0371235335</span>
            </div>
            <Link to="/contact">
              <Button variant="medical" size="sm">
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "block px-3 py-2 rounded-lg text-base font-medium transition-all duration-200",
                    isActive(item.href)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:text-primary hover:bg-accent"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border mt-4">
                <div className="flex items-center space-x-2 px-3 py-2 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span>0371235335 / 0735232737</span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>Diler@Ramazan.ro</span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Str. Nicolae Iorga nr.20, Constanta</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};