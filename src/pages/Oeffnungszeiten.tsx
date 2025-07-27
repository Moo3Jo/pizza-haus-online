import { Card } from "@/components/ui/card";

export default function Oeffnungszeiten() {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">Öffnungszeiten</h1>
          <p className="text-xl text-white/90">
            Besuchen Sie uns zu diesen Zeiten für Ihr perfektes Styling
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 shadow-elegant">
              <h2 className="text-2xl font-bold mb-6 text-primary text-center">
                Salon Elegante
              </h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <span className="font-medium">Montag</span>
                  <span className="text-muted-foreground">Geschlossen</span>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <span className="font-medium">Dienstag - Freitag</span>
                  <span className="text-muted-foreground">09:00 - 19:00</span>
                </div>
                <div className="flex justify-between items-center border-b border-border pb-2">
                  <span className="font-medium">Samstag</span>
                  <span className="text-muted-foreground">08:00 - 16:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Sonntag</span>
                  <span className="text-muted-foreground">Geschlossen</span>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-accent/10 rounded-lg">
                <p className="text-sm text-center text-muted-foreground">
                  <strong>Hinweis:</strong> Termine nach Vereinbarung auch außerhalb der Öffnungszeiten möglich.
                  Kontaktieren Sie uns für individuelle Absprachen.
                </p>
              </div>
            </Card>

            <Card className="p-8 shadow-elegant">
              <h2 className="text-2xl font-bold mb-6 text-primary text-center">
                Kontakt & Anfahrt
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">📍 Adresse</h3>
                  <p className="text-muted-foreground">
                    Schönheitstraße 45<br />
                    10115 Berlin
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">📞 Telefon</h3>
                  <p className="text-muted-foreground">+49 30 123456789</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">✉️ E-Mail</h3>
                  <p className="text-muted-foreground">info@salon-elegante.de</p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">🚗 Parkmöglichkeiten</h3>
                  <p className="text-muted-foreground">
                    Parkplätze in der Tiefgarage und kostenpflichtige Straßenparkplätze
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">🚌 Öffentliche Verkehrsmittel</h3>
                  <p className="text-muted-foreground">
                    U-Bahn U6 Friedrichstraße - 3 Minuten Fußweg
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}