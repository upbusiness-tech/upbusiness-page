import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container px-4 mx-auto py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gradient">UpBusiness</h3>
              <p className="text-muted-foreground">
                Transformando comércios com tecnologia de ponta desde 2014.
              </p>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            {/* Links rápidos */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Soluções</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#servicos" className="hover:text-primary transition-colors">PDV Inteligente</a></li>
                <li><a href="#servicos" className="hover:text-primary transition-colors">App Mobile</a></li>
                <li><a href="#servicos" className="hover:text-primary transition-colors">Business Intelligence</a></li>
                <li><a href="#servicos" className="hover:text-primary transition-colors">Automação</a></li>
              </ul>
            </div>
            
            {/* Empresa */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Empresa</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#sobre" className="hover:text-primary transition-colors">Sobre Nós</a></li>
                <li><a href="#depoimentos" className="hover:text-primary transition-colors">Depoimentos</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Carreiras</a></li>
              </ul>
            </div>
            
            {/* Contato */}
            <div>
              <h4 className="font-semibold mb-4 text-lg">Contato</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 shrink-0 mt-0.5 text-primary" />
                  <span>Av. Paulista, 1000<br />São Paulo, SP</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:+551140028922" className="hover:text-primary transition-colors">
                    (11) 4002-8922
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:contato@upbusiness.com.br" className="hover:text-primary transition-colors">
                    contato@upbusiness.com.br
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Bottom bar */}
          <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 UpBusiness. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
