import { Award, Rocket, HeartHandshake, TrendingUp, BadgeCheck, ThumbsUp } from "lucide-react";

const differentials = [
  {
    icon: Rocket,
    title: "Implementação Rápida",
    description: "Seu sistema funcionando em até 48 horas com treinamento completo incluído",
  },
  {
    icon: TrendingUp,
    title: "Resultados Comprovados",
    description: "Aumento de vendas, redução de perdas e maior eficiência operacional para o seu negócio.",
  },
  {
    icon: BadgeCheck,
    title: "Sem Custos Extras",
    description: "Instalação e treinamento gratuitos, além do cadastro inicial de produtos feito pela nossa equipe.",
  },
  {
    icon: Award,
    title: "Equipe Jovem e Especializada",
    description: "Profissionais com experiência direta no comércio, trazendo visão prática e soluções modernas para o seu negócio.",
  },
  {
    icon: HeartHandshake,
    title: "Suporte Humanizado",
    description: "Atendimento rápido feito por pessoas reais que entendem do seu negócio",
  },
  {
    icon: ThumbsUp,
    title: "Zero Complicação",
    description: "Sistema fácil de usar desde o primeiro dia, feito para quem quer praticidade sem dor de cabeça.",
  },
];

const Differentials = () => {
  return (
    <section id="diferenciais" className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Por Que Escolher a <span className="text-gradient">UpBusiness</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Diferenciais que fazem toda a diferença no seu resultado
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {differentials.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all card-hover"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
