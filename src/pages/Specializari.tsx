import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { GraduationCap, Award, Briefcase, Calendar, MapPin, Stethoscope } from "lucide-react";

const Specializari = () => {
  const experiences = [
    {
      title: "Medic primar Chirurgie Vasculara",
      period: "07.09.2020 – prezent",
      institution: "Laborator Explorari Functionale, Spitalul Clinic Judetean de Urgenta \"Sf Apostol Andrei\" Constanta",
      location: "bd Tomis nr 145, Constanţa, România",
      description: "Activitate medicală de diagnostic a afecțiunilor legate de sistemul vascular – ecografie vasculara",
      type: "current"
    },
    {
      title: "Medic Primar Chirurgie Vasculara",
      period: "07.09.2020 – prezent",
      institution: "PFI Dr Ramazan Diler- chirurgie vasculara, Clinica de chirurgie cardiovasculara",
      location: "Spitalul Clinic Judetean de Urgenta \"Sf Apostol Andrei\" Constanta, bd Tomis nr 145, Constanţa, România",
      description: "Activitate medicală de diagnostic si tratament a afecțiunilor legate de sistemul vascular",
      type: "current"
    },
    {
      title: "Medic Specialist Chirurgie Vasculara",
      period: "2014-2020",
      institution: "Clinica de chirurgie cardiovasculara, Spitalul Clinic Judetean de Urgenta Sf Apostol Andrei",
      location: "Constanta, bd Tomis nr 145, Constanţa, România",
      description: "Activitate medicală de diagnostic si tratament a afecțiunilor legate de sistemul vascular, ecografie vasculara",
      type: "experience"
    },
    {
      title: "Medic Rezident Chirurgie Vasculara",
      period: "2010-2014",
      institution: "Clinica de chirurgie cardiovasculara, Spitalul Clinic Judetean de Urgenta Sf Apostol Andrei",
      location: "Constanta, bd Tomis nr 145, Constanţa, România",
      description: "Activitate medicală de diagnostic si tratament, sub coordonarea si supravegherea indrumatorului, obtinerea si perfectionarea cunostintelor medicale si abilitatilor necesare in conformitate cu curriculum de pregatire si baremul de manopere, proceduri, tehnici diagnostice si terapeutice",
      type: "education"
    }
  ];

  const certifications = [
    {
      title: "Atestat de studii complementare in Ecografia Vasculara",
      description: "Ultrasonografie vasculara",
      institution: "Universitatea de Medicină și Farmacie Carol Davila București, Institutul de Boli Cardiovasculare Prof. Dr. C.C. Iliescu, Clinica de cardiologie III",
      type: "certification"
    },
    {
      title: "Atestat de studii complementare in ultrasonografie generala",
      institution: "Universitatea Ovidius Constanta, Facultatea de Medicina Generala",
      type: "certification"
    },
    {
      title: "Neuropatia diabetica si piciorul diabetic",
      institution: "Societatea de neuropatie diabetica - Scoala de vara Neuropatia diabetica de la teorie la practica",
      type: "course"
    },
    {
      title: "Advanced Vascular Ultrasound Course",
      institution: "EUROPEAN SOCIETY FOR VASCULAR SURGERY, Rigshospitalet, University of Copenhagen, Denmark",
      type: "international"
    }
  ];

  const education = {
    title: "Ştiinţe Medicale",
    institution: "Facultatea de medicină generala, Universitatea Ovidius Constanta",
    type: "degree"
  };

  const getIcon = (type: string) => {
    switch (type) {
      case "current":
        return <Stethoscope className="w-5 h-5" />;
      case "experience":
        return <Briefcase className="w-5 h-5" />;
      case "education":
        return <GraduationCap className="w-5 h-5" />;
      case "certification":
        return <Award className="w-5 h-5" />;
      default:
        return <Calendar className="w-5 h-5" />;
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "current":
        return "Poziție Curentă";
      case "experience":
        return "Experiență";
      case "education":
        return "Educație";
      case "certification":
        return "Certificare";
      case "course":
        return "Curs";
      case "international":
        return "Internațional";
      default:
        return "";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "current":
        return "bg-trust-green text-white";
      case "experience":
        return "bg-primary text-primary-foreground";
      case "education":
        return "bg-care-blue text-white";
      case "certification":
        return "bg-medical-blue text-white";
      case "course":
        return "bg-accent text-accent-foreground";
      case "international":
        return "bg-gradient-primary text-primary-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Specializări și Experiență
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Parcursul profesional și specializările Dr. Ramazan Diler în domeniul chirurgiei vasculare
          </p>
        </div>

        {/* Current Positions */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center">
            <Stethoscope className="w-6 h-6 mr-3 text-primary" />
            Poziții Curente
          </h2>
          <div className="grid gap-6">
            {experiences.filter(exp => exp.type === "current").map((exp, index) => (
              <Card key={index} className="shadow-card-medical hover:shadow-medical transition-all duration-300 border-l-4 border-l-trust-green">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <CardTitle className="text-xl text-foreground">{exp.title}</CardTitle>
                    <Badge className={getTypeColor(exp.type)}>
                      {getIcon(exp.type)}
                      <span className="ml-2">{getTypeLabel(exp.type)}</span>
                    </Badge>
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">{exp.institution}</p>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Experience */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center">
            <Briefcase className="w-6 h-6 mr-3 text-primary" />
            Experiență Profesională
          </h2>
          <div className="grid gap-6">
            {experiences.filter(exp => exp.type === "experience" || exp.type === "education").map((exp, index) => (
              <Card key={index} className="shadow-card-medical hover:shadow-medical transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <CardTitle className="text-xl text-foreground">{exp.title}</CardTitle>
                    <Badge className={getTypeColor(exp.type)}>
                      {getIcon(exp.type)}
                      <span className="ml-2">{getTypeLabel(exp.type)}</span>
                    </Badge>
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.period}
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-foreground">{exp.institution}</p>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Education */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center">
            <GraduationCap className="w-6 h-6 mr-3 text-primary" />
            Educație
          </h2>
          <Card className="shadow-card-medical border-l-4 border-l-care-blue">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <CardTitle className="text-xl text-foreground">{education.title}</CardTitle>
                <Badge className={getTypeColor(education.type)}>
                  <GraduationCap className="w-4 h-4" />
                  <span className="ml-2">Diplomă</span>
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <p className="font-medium text-foreground">{education.institution}</p>
              </div>
            </CardContent>
          </Card>
        </section>

        <Separator className="my-12" />

        {/* Certifications & Courses */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center">
            <Award className="w-6 h-6 mr-3 text-primary" />
            Certificări și Cursuri
          </h2>
          <div className="grid gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="shadow-card-medical hover:shadow-medical transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <CardTitle className="text-lg text-foreground">{cert.title}</CardTitle>
                    <Badge className={getTypeColor(cert.type)}>
                      {getIcon(cert.type)}
                      <span className="ml-2">{getTypeLabel(cert.type)}</span>
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {cert.description && (
                    <p className="text-muted-foreground italic">{cert.description}</p>
                  )}
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <p className="font-medium text-foreground">{cert.institution}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Specializari;