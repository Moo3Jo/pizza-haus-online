import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, FileText } from "lucide-react";

const Speisekarte = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-pizzeria-dark mb-4">
            Unsere Speisekarte
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entdecken Sie unsere köstlichen italienischen Spezialitäten. 
            Von klassischen Pizzen bis hin zu hausgemachter Pasta.
          </p>
        </div>

        {/* Menu Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
            <div className="text-center">
              <div className="w-16 h-16 bg-pizzeria-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍕</span>
              </div>
              <h3 className="text-xl font-semibold text-pizzeria-dark mb-2">Pizza Classics</h3>
              <p className="text-muted-foreground text-sm">
                Margherita, Salami, Quattro Stagioni und mehr
              </p>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
            <div className="text-center">
              <div className="w-16 h-16 bg-pizzeria-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🍝</span>
              </div>
              <h3 className="text-xl font-semibold text-pizzeria-dark mb-2">Pasta Dishes</h3>
              <p className="text-muted-foreground text-sm">
                Spaghetti, Penne, Lasagne - alles hausgemacht
              </p>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
            <div className="text-center">
              <div className="w-16 h-16 bg-pizzeria-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🥗</span>
              </div>
              <h3 className="text-xl font-semibold text-pizzeria-dark mb-2">Salate & Vorspeisen</h3>
              <p className="text-muted-foreground text-sm">
                Frische Salate und italienische Antipasti
              </p>
            </div>
          </Card>
        </div>

        {/* PDF Download Section */}
        <Card className="max-w-2xl mx-auto p-8 text-center bg-white shadow-warm">
          <div className="w-20 h-20 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText size={32} className="text-white" />
          </div>
          
          <h2 className="text-2xl font-bold text-pizzeria-dark mb-4">
            Vollständige Speisekarte
          </h2>
          
          <p className="text-muted-foreground mb-6">
            Laden Sie unsere komplette Speisekarte als PDF herunter, 
            um alle Gerichte und Preise zu sehen.
          </p>

          <div className="space-y-4">
            <Button variant="pizzeria" size="lg" className="w-full md:w-auto">
              <Download size={20} />
              Speisekarte herunterladen (PDF)
            </Button>
            
            <p className="text-sm text-muted-foreground">
              Aktualisiert: Dezember 2024
            </p>
          </div>
        </Card>

        {/* Note */}
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Haben Sie Fragen zu Allergenen oder besonderen Wünschen? 
            Sprechen Sie uns gerne an!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Speisekarte;