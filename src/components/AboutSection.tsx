import { GraduationCap, Building2, Code2 } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="relative max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Title and Icons */}
          <div>
            <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
              Sobre Mim
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Fundamentação{" "}
              <span className="text-gradient">Sólida</span>,{" "}
              <br className="hidden md:block" />
              Aplicação{" "}
              <span className="text-gradient">Versátil</span>
            </h2>

            {/* Credentials */}
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-border">
                <GraduationCap className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Harvard CS50</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-border">
                <Building2 className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">ADS - Graduação</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-card border border-border">
                <Code2 className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">Full Stack</span>
              </div>
            </div>
          </div>

          {/* Right Side - Text */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-50" />
            <div className="relative bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Minha trajetória une a{" "}
                <span className="text-foreground font-medium">base algorítmica profunda (Harvard CS50)</span>{" "}
                com a vivência real de projetos corporativos. E também estou graduando presencialmente em{" "}
                <span className="text-foreground font-medium">Análise e Desenvolvimento de Sistemas</span>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Esse background me permite transitar com segurança por ecossistemas diversos 
                (Python, Ruby, Java, React). Não me limito à ferramenta:{" "}
                <span className="text-foreground font-medium">foco na lógica de programação e na arquitetura da solução</span>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                Seja estruturando queries complexas em SQL ou configurando ambientes Docker, 
                meu objetivo é transformar{" "}
                <span className="text-gradient font-semibold">requisitos técnicos em estabilidade sistêmica</span>{" "}
                e{" "}
                <span className="text-gradient font-semibold">dados brutos em decisão estratégica</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
