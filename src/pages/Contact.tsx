import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Globe } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Contact
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Programează o consultație sau contactează-ne pentru mai multe informații
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  Informații de Contact
                </h2>
              </div>

              <div className="space-y-6">
                <Card className="shadow-medical border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-button-medical">
                        <MapPin className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Adresa Cabinetului</h3>
                        <p className="text-muted-foreground">Str. Nicolae Iorga nr.20, Constanta</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-medical border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-button-medical">
                        <Phone className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Telefon Programări</h3>
                        <div className="text-muted-foreground">
                          <div>0371235335</div>
                          <div>0735232737</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-medical border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-button-medical">
                        <Mail className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Email</h3>
                        <p className="text-muted-foreground">Diler@Ramazan.ro</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-medical border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-button-medical">
                        <Globe className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Website</h3>
                        <p className="text-muted-foreground">www.Ramazan.ro</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-medical border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-button-medical">
                        <Clock className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Program Consultații</h3>
                        <div className="text-muted-foreground">
                          <div className="font-medium">Luni - Vineri</div>
                          <div>8:00 - 16:00</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="pt-6">
                <Button variant="medical" size="lg" className="w-full">
                  <Phone className="w-5 h-5 mr-2" />
                  Sună Acum pentru Programare
                </Button>
              </div>
            </div>

            {/* Google Maps */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  Locația Cabinetului
                </h2>
              </div>
              
              <Card className="shadow-medical border-t-4 border-t-primary overflow-hidden">
                <CardContent className="p-0">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5721.7285596833535!2d28.645991!3d44.189263!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40bafb852a3ffe8f%3A0xd1523dcb97bb73d2!2sAqua%20Clinic%20-%20Centru%20de%20sanatate%20-%20Imagistica!5e0!3m2!1sen!2sro!4v1753953251799!5m2!1sen!2sro" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  />
                </CardContent>
              </Card>

              <div className="bg-card p-6 rounded-lg border shadow-sm">
                <h3 className="font-semibold text-foreground mb-4">Cum să ne găsești</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Cabinetul se află în centrul orașului Constanța, pe strada Nicolae Iorga nr. 20. 
                  Suntem ușor accesibili cu transportul în comun și avem parcare în apropiere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;