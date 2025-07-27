import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-primary mb-4">Salon Elegante</h3>
            <p className="text-muted-foreground">
              Ihr professioneller Friseursalon für moderne Styling und klassische Eleganz seit 2010.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Schnellzugriff</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/leistungen" className="block text-muted-foreground hover:text-primary transition-colors">
                Unsere Leistungen
              </Link>
              <Link to="/oeffnungszeiten" className="block text-muted-foreground hover:text-primary transition-colors">
                Öffnungszeiten
              </Link>
              <Link to="/terminvergabe" className="block text-muted-foreground hover:text-primary transition-colors">
                Terminvergabe
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>📍 Schönheitstraße 45, 10115 Berlin</p>
              <p>📞 +49 30 123456789</p>
              <p>✉️ info@salon-elegante.de</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2024 Salon Elegante. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}