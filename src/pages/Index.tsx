import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Stethoscope, Award, Heart, Shield, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-medical.jpg";

const Index = () => {
  const services = [
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Diagnostic Vascular",
      description: "Evaluări complete prin ecografie vasculară pentru detectarea precoce a afecțiunilor sistemului vascular."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Chirurgie Vasculară",
      description: "Intervenții chirurgicale specializate pentru tratamentul afecțiunilor arterelor și venelor."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Prevenție Vasculară",
      description: "Programe de prevenție și monitorizare pentru menținerea sănătății sistemului vascular."
    }
  ];

  const stats = [
    { number: "15+", label: "Ani experiență" },
    { number: "5000+", label: "Pacienți tratați" },
    { number: "10+", label: "Certificări" },
    { number: "24/7", label: "Urgențe" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
              <Award className="w-4 h-4 mr-2" />
              Medic Primar Chirurgie Vasculară
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Dr. Ramazan Diler
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-white/90 mb-8 font-light">
              Chirurgie Vasculară & Ecografie Vasculară
            </h2>
            
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
              Experiență de peste 15 ani în diagnosticul și tratamentul afecțiunilor vasculare. 
              Servicii medicale de înaltă calitate în Constanța.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                <Phone className="w-5 h-5 mr-2" />
                Programează Consultație
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
                <Link to="/specializari" className="flex items-center">
                  <Stethoscope className="w-5 h-5 mr-2" />
                  Vezi Specializări
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Servicii Medicale
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Oferim servicii complete de diagnostic și tratament în chirurgia vasculară
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-card-medical hover:shadow-medical transition-all duration-500 hover:scale-105 border-t-4 border-t-primary">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center text-primary-foreground mb-4 shadow-button-medical">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Programează o Consultație
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Contactează-ne pentru o evaluare completă și un plan de tratament personalizat. 
                Suntem aici să îți oferim îngrijirea medicală de care ai nevoie.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-button-medical">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Programări Telefonice</div>
                    <div className="text-muted-foreground">0371235335 / 0735232737</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-button-medical">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Program</div>
                    <div className="text-muted-foreground">Luni - Vineri: 8:00 - 16:00</div>
                  </div>
                </div>
              </div>
              
              <Button variant="medical" size="lg" className="w-full sm:w-auto">
                <Phone className="w-5 h-5 mr-2" />
                Sună Acum
              </Button>
            </div>

            <Card className="shadow-medical border-t-4 border-t-primary">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center">
                  <MapPin className="w-6 h-6 mr-3 text-primary" />
                  Informații Contact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Adresa Cabinetului</h4>
                  <p className="text-muted-foreground">Str. Nicolae Iorga nr.20, Constanta</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Contact Direct</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">Diler@Ramazan.ro</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="w-4 h-4 bg-primary rounded-sm flex items-center justify-center">
                        <span className="text-primary-foreground text-xs font-bold">W</span>
                      </span>
                      <span className="text-muted-foreground">www.Ramazan.ro</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center space-x-3">
                    <div className="flex -space-x-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    </div>
                    <span className="text-sm text-muted-foreground">Încrederea pacienților</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
