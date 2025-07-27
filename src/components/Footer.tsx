import { MapPin, Phone, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-pizzeria-dark text-pizzeria-cream">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Restaurant Info */}
          <div>
            <h3 className="text-xl font-bold text-pizzeria-red mb-4">Bella Pizza</h3>
            <p className="text-muted-foreground mb-4">
              Authentische italienische Pizza seit 1985. Frische Zutaten,
              traditionelle Rezepte und viel Amore in jeder Scheibe.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-pizzeria-orange">Kontakt</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-pizzeria-red" />
                <span className="text-sm">Musterstraße 123, 12345 Musterstadt</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-pizzeria-red" />
                <span className="text-sm">0123 / 456 789</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-pizzeria-orange">Öffnungszeiten</h4>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Mo - Fr:</span>
                <span>11:00 - 22:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sa - So:</span>
                <span>12:00 - 23:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Bella Pizza. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;