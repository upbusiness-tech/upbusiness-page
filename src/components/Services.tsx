import { ShoppingCart, Smartphone, BarChart3, Headphones, Shield, MonitorCog } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: ShoppingCart,
    title: "PDV Inteligente",
    description: "Sistema de frente de caixa completo com vendas, estoque, controle operacional e app para garçons.",
  },
  {
    icon: Smartphone,
    title: "App para Garçom / Mobile",
    description: "Aplicativo rápido e intuitivo para pedidos, gestão remota e mobilidade no atendimento.",
  },
  {
    icon: BarChart3,
    title: "Relatórios e Indicadores",
    description: "Painéis e relatórios essenciais para acompanhar vendas, desempenho e resultados do seu negócio.",
  },
  {
    icon: MonitorCog,
    title: "Sistemas Personalizados",
    description: "Desenvolvimento de sistemas sob medida para as necessidades específicas da sua empresa.",
  },
  {
    icon: Shield,
    title: "Segurança de Dados",
    description: "Proteção completa com backup seguro e criptografia para manter seus dados sempre protegidos.",
  },
  {
    icon: Headphones,
    title: "Suporte Especializado",
    description: "Atendimento rápido e eficiente por chat, telefone ou WhatsApp sempre que você precisar.",
  },

];

const Services = () => {
  return (
    <section id="servicos" className="py-24 bg-secondary/30 relative">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              Nossas <span className="text-gradient">Soluções</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ferramentas poderosas que trabalham para você 24 horas por dia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="border-border hover:border-primary/50 transition-all card-hover bg-card/80 backdrop-blur"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
