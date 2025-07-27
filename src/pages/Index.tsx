import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-salon.jpg";

const Index = () => {
  const features = [
    {
      icon: "✂️",
      title: "Meisterhaftes Handwerk",
      description: "Erfahrene Stylisten mit jahrelanger Expertise"
    },
    {
      icon: "💎",
      title: "Premium Produkte",
      description: "Ausschließlich hochwertige Pflegeprodukte"
    },
    {
      icon: "🌟",
      title: "Individuelle Beratung",
      description: "Persönliche Beratung für Ihren perfekten Look"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Willkommen bei<br />
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Salon Elegante
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Professionelle Haarkunst für Ihren perfekten Look
          </p>
          <div className="space-x-4">
            <Link to="/leistungen">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-elegant">
                Unsere Leistungen
              </Button>
            </Link>
            <Link to="/terminvergabe">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Termin buchen
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Warum Salon Elegante?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-8 shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-primary">{feature.title}</h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Bereit für Ihren neuen Look?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Buchen Sie jetzt Ihren Termin und lassen Sie sich verwöhnen.
          </p>
          <div className="space-x-4">
            <Link to="/leistungen">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Unsere Leistungen
              </Button>
            </Link>
            <Link to="/terminvergabe">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                Termin buchen
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;