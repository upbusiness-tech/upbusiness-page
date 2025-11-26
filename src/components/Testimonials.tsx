import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Mateus Nobre",
    role: "Proprietário - Nobres Grill",
    content:
      "O sistema ajudou muito na organização do meu negócio e reduziu significativamente as perdas. O acompanhamento foi excelente, sempre me mantendo atualizado sobre cada etapa do processo.",
    rating: 5,
  },
  {
    name: "Ailton Chaves",
    role: "Proprietário - Cantinho do Churrasco",
    content:
      "O sistema melhorou demais nosso trabalho. A praticidade de manter tudo sob controle sem depender de papel e caneta facilitou muito nossa rotina.",
    rating: 5,
  },
  {
    name: "Cezar Ferreira",
    role: "Proprietário - Cezar Bikes",
    content:
      "Equipe nota 10! Superou todas as minhas expectativas. Muito satisfeito com o resultado pessoal, parabéns pela dedicação.",
    rating: 5,
  },
  {
    name: "Targino",
    role: "Proprietário - Eletrônica Targino",
    content:
      "Muito fácil de usar e extremamente eficiente. Nem precisei de treinamento, pois o sistema é bem intuitivo. Gostamos demais!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-24 relative">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">
              O Que Nossos <span className="text-gradient">Clientes</span> Dizem
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Resultados reais de empresas que transformaram seus negócios
            </p>
          </div>

          {/* CARROSSEL */}
          <Carousel className="w-full p-4 max-w-4xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="border-border hover:border-primary/50 transition-all  bg-card h-full">
                    <CardContent className="pt-6 space-y-4">
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-primary text-primary"
                          />
                        ))}
                      </div>

                      <p className="text-muted-foreground leading-relaxed">
                        "{testimonial.content}"
                      </p>

                      <div className="pt-4 border-t border-border">
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
