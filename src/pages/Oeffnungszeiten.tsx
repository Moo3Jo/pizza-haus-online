import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Calendar, Navigation } from "lucide-react";

const Oeffnungszeiten = () => {
  const openingHours = [
    { day: "Montag", hours: "11:00 - 22:00" },
    { day: "Dienstag", hours: "11:00 - 22:00" },
    { day: "Mittwoch", hours: "11:00 - 22:00" },
    { day: "Donnerstag", hours: "11:00 - 22:00" },
    { day: "Freitag", hours: "11:00 - 23:00" },
    { day: "Samstag", hours: "12:00 - 23:00" },
    { day: "Sonntag", hours: "12:00 - 22:00" },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-pizzeria-dark mb-4">
            Öffnungszeiten & Kontakt
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Besuchen Sie uns in unserem gemütlichen Restaurant oder 
            bestellen Sie bequem für die Abholung.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Opening Hours */}
          <Card className="p-8 shadow-warm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-pizzeria-red rounded-full flex items-center justify-center">
                <Clock size={24} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-pizzeria-dark">Öffnungszeiten</h2>
            </div>
            
            <div className="space-y-4">
              {openingHours.map((item, index) => {
                const isWeekend = item.day === "Samstag" || item.day === "Sonntag";
                return (
                  <div 
                    key={index}
                    className={`flex justify-between items-center py-3 px-4 rounded-lg transition-colors ${
                      isWeekend ? "bg-pizzeria-orange/10" : "bg-muted/50"
                    }`}
                  >
                    <span className="font-medium text-pizzeria-dark">{item.day}</span>
                    <span className="text-pizzeria-red font-semibold">{item.hours}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 p-4 bg-pizzeria-green/10 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Calendar size={16} className="text-pizzeria-green" />
                <span className="font-medium text-pizzeria-dark">Besondere Zeiten</span>
              </div>
              <p className="text-sm text-muted-foreground">
                An Feiertagen können die Öffnungszeiten abweichen. 
                Rufen Sie uns gerne an!
              </p>
            </div>
          </Card>

          {/* Contact Information */}
          <Card className="p-8 shadow-warm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-pizzeria-green rounded-full flex items-center justify-center">
                <MapPin size={24} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold text-pizzeria-dark">Kontakt & Adresse</h2>
            </div>

            <div className="space-y-6">
              {/* Address */}
              <div>
                <h3 className="font-semibold text-pizzeria-dark mb-2 flex items-center gap-2">
                  <MapPin size={18} className="text-pizzeria-red" />
                  Adresse
                </h3>
                <p className="text-muted-foreground ml-6">
                  Bella Pizza<br />
                  Musterstraße 123<br />
                  12345 Musterstadt
                </p>
              </div>

              {/* Phone */}
              <div>
                <h3 className="font-semibold text-pizzeria-dark mb-2 flex items-center gap-2">
                  <Phone size={18} className="text-pizzeria-red" />
                  Telefon
                </h3>
                <p className="text-muted-foreground ml-6">
                  <a href="tel:+491234567890" className="hover:text-pizzeria-red transition-colors">
                    0123 / 456 789
                  </a>
                </p>
              </div>

              {/* Directions */}
              <div className="pt-4">
                <Button variant="outline" className="w-full" size="lg">
                  <Navigation size={20} />
                  Route berechnen
                </Button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-6 p-4 bg-pizzeria-orange/10 rounded-lg">
              <h4 className="font-medium text-pizzeria-dark mb-2">Gut zu wissen</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Kostenlose Parkplätze vor dem Restaurant</li>
                <li>• Barrierefrei zugänglich</li>
                <li>• Lieferservice im Umkreis von 5km</li>
                <li>• Reservierungen telefonisch möglich</li>
              </ul>
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Card className="max-w-lg mx-auto p-6 bg-gradient-warm text-white shadow-warm">
            <h3 className="text-xl font-bold mb-2">Jetzt bestellen!</h3>
            <p className="mb-4 opacity-90">
              Rufen Sie uns an und bestellen Sie Ihre Lieblingspizza zur Abholung.
            </p>
            <Button variant="secondary" size="lg">
              <Phone size={20} />
              0123 / 456 789
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Oeffnungszeiten;