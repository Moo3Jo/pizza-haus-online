import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-pizza.jpg";

const Index = () => {
  const features = [
    {
      icon: "🍕",
      title: "Authentische Pizza",
      description: "Nach traditionellen italienischen Rezepten zubereitet"
    },
    {
      icon: "🥘",
      title: "Frische Zutaten",
      description: "Täglich frisch eingekauft und sorgfältig ausgewählt"
    },
    {
      icon: "👨‍🍳",
      title: "Erfahrene Köche",
      description: "Unsere Pizzabäcker bringen jahrelange Erfahrung mit"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-pizzeria-dark/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-float">
            Bella Pizza
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Authentische italienische Pizza seit 1985
          </p>
          <p className="text-lg mb-10 opacity-80 max-w-2xl mx-auto">
            Erleben Sie den wahren Geschmack Italiens in unserem gemütlichen Restaurant. 
            Jede Pizza wird mit Liebe und den besten Zutaten zubereitet.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/speisekarte">
              <Button variant="pizzeria" size="xl" className="w-full sm:w-auto">
                Speisekarte ansehen
              </Button>
            </Link>
            <Link to="/oeffnungszeiten">
              <Button variant="outline" size="xl" className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                <Phone size={20} />
                Jetzt bestellen
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-pizzeria-dark mb-4">
              Warum Bella Pizza?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Drei Generationen italienischer Kochkunst vereint in jedem Bissen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-warm transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-pizzeria-dark mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Address */}
            <div className="text-center">
              <div className="w-16 h-16 bg-pizzeria-red rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-pizzeria-dark mb-2">Besuchen Sie uns</h3>
              <p className="text-muted-foreground text-sm">
                Musterstraße 123<br />
                12345 Musterstadt
              </p>
            </div>

            {/* Phone */}
            <div className="text-center">
              <div className="w-16 h-16 bg-pizzeria-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-pizzeria-dark mb-2">Bestellen Sie</h3>
              <p className="text-muted-foreground text-sm">
                <a href="tel:+491234567890" className="hover:text-pizzeria-red transition-colors">
                  0123 / 456 789
                </a>
              </p>
            </div>

            {/* Hours */}
            <div className="text-center">
              <div className="w-16 h-16 bg-pizzeria-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock size={24} className="text-white" />
              </div>
              <h3 className="font-semibold text-pizzeria-dark mb-2">Öffnungszeiten</h3>
              <p className="text-muted-foreground text-sm">
                Mo-Fr: 11:00-22:00<br />
                Sa-So: 12:00-23:00
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-pizzeria-dark mb-4">
              Was unsere Gäste sagen
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-pizzeria-orange text-pizzeria-orange" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "Die beste Pizza in der Stadt! Der Teig ist perfekt, die Zutaten frisch und der Service sehr freundlich."
              </p>
              <div className="font-medium text-pizzeria-dark">- Maria Schmidt</div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-pizzeria-orange text-pizzeria-orange" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">
                "Fühlt sich an wie in Italien! Authentische Atmosphäre und unglaublich leckeres Essen."
              </p>
              <div className="font-medium text-pizzeria-dark">- Thomas Weber</div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
