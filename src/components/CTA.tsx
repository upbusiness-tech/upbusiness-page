import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card/80 backdrop-blur-sm border border-border rounded-3xl p-12 md:p-16 text-center space-y-8 shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Pronto para Transformar <br />
              <span className="text-gradient">Seu Negócio?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Agende uma demonstração gratuita e descubra como a tecnologia certa 
              pode multiplicar seus resultados
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="lg" 
                className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-primary/50 transition-all"
              >
                <Calendar className="mr-2 w-5 h-5" />
                Agendar Demonstração Gratuita
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                ✓ Sem compromisso
              </span>
              <span className="hidden sm:block">•</span>
              <span className="flex items-center gap-2">
                ✓ Consultoria personalizada
              </span>
              <span className="hidden sm:block">•</span>
              <span className="flex items-center gap-2">
                ✓ Setup em 48h
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
