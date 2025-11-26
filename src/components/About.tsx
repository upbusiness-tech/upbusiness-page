import { Target, Lightbulb, Users } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-24 relative">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Quem é a <span className="text-gradient">UpBusiness</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Somos especialistas em transformação digital para o varejo
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Missão */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all card-hover">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Democratizar o acesso à tecnologia de ponta, permitindo que empresas de todos os tamanhos 
                possam competir e crescer no mercado digital.
              </p>
            </div>
            
            {/* Visão */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all card-hover">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Nossa Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser referência em inovação tecnológica para o comércio, criando soluções que 
                realmente fazem a diferença no dia a dia dos empreendedores.
              </p>
            </div>
            
            {/* Valores */}
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all card-hover">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Nossos Valores</h3>
              <p className="text-muted-foreground leading-relaxed">
                Transparência, inovação constante e foco absoluto no sucesso do cliente. 
                Seu crescimento é o nosso propósito.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
