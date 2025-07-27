import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Scissors, Palette, Sparkles, Heart, Clock, Star } from "lucide-react";

export default function Leistungen() {
  const services = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Damenhaarschnitt",
      description: "Professioneller Schnitt und Styling für jeden Anlass",
      price: "ab 45€",
      duration: "60 Min",
      popular: false,
    },
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Herrenhaarschnitt", 
      description: "Klassisch oder modern - für den perfekten Look",
      price: "ab 35€",
      duration: "45 Min",
      popular: false,
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Färbung & Strähnchen",
      description: "Natürliche oder trendige Farben nach Ihrem Wunsch",
      price: "ab 65€",
      duration: "120 Min",
      popular: true,
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Balayage & Ombré",
      description: "Moderne Färbetechniken für natürliche Effekte",
      price: "ab 85€",
      duration: "150 Min",
      popular: true,
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Haarpflege-Behandlung",
      description: "Intensive Kuren für gesundes und glänzendes Haar",
      price: "ab 25€",
      duration: "30 Min",
      popular: false,
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Brautstyling",
      description: "Perfekte Frisur für Ihren besonderen Tag",
      price: "ab 120€",
      duration: "180 Min",
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Unsere Leistungen</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Entdecken Sie unser umfangreiches Angebot für perfektes Styling und professionelle Haarpflege
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="relative overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2"
              >
                {service.popular && (
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                    Beliebt
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 text-primary w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="text-center">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.duration}
                      </span>
                      <span className="text-2xl font-bold text-primary">
                        {service.price}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Zusätzliche Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">Produkte</h3>
              <p className="text-muted-foreground mb-4">
                Hochwertige Haarpflegeprodukte für zu Hause - von unseren Experten empfohlen.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Premium Shampoos und Conditioner</li>
                <li>• Styling-Produkte</li>
                <li>• Pflegemasken und Kuren</li>
              </ul>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-primary">Beratung</h3>
              <p className="text-muted-foreground mb-4">
                Kostenlose Typ- und Stilberatung für Ihren perfekten Look.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Gesichtsform-Analyse</li>
                <li>• Farbtypberatung</li>
                <li>• Pflege-Empfehlungen</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}