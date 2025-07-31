import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react";
import { Button } from "./button";
import { Separator } from "./separator";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">
                  Str. Nicolae Iorga nr.20, Constanta
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-muted-foreground">
                  <div>Programari: 0371235335</div>
                  <div>0735232737</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Diler@Ramazan.ro</span>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">www.Ramazan.ro</span>
              </div>
            </div>
          </div>

          {/* Program */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Program Consultații</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-muted-foreground">
                  <div className="font-medium">Luni - Vineri</div>
                  <div>8:00 - 16:00</div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                * Programările se fac prin telefon sau email
              </div>
            </div>
            <Button variant="medical" className="w-full">
              <Phone className="w-4 h-4 mr-2" />
              Programează Consultație
            </Button>
          </div>

          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Dr. Ramazan Diler</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Medic primar în chirurgie vasculară cu experiență vastă în diagnostic și tratament. 
              Specializat în ecografie vasculară și proceduri de chirurgie vasculară modernă.
            </p>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Specializări:</span>
              </div>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Chirurgie Vasculară</li>
                <li>• Ecografie Vasculară</li>
                <li>• Diagnostic Vascular</li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground">
            © 2025 Dr. Ramazan Diler - Chirurgie Vasculară. Toate drepturile rezervate.
          </div>
          <div className="text-sm text-muted-foreground mt-2 sm:mt-0">
            <div>Constanta, România</div>
            <div className="mt-1">
              Developed by{" "}
              <a 
                href="https://omniweb.ro" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                omniweb.ro
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};