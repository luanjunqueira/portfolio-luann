import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Database, BarChart3 } from "lucide-react";

const projects = [
  {
    title: "Social Data Intelligence Hub",
    description: "Ecossistema completo de Engenharia de Dados. Ingestão de APIs via NestJS, orquestração de containers Docker e processamento de filas com Redis. Demonstra capacidade de estruturar o 'back-end' do dado com robustez.",
    tags: ["Docker", "NestJS", "PostgreSQL", "Redis", "React"],
    link: "https://github.com/luanjunqueira/social-data-intelligence",
    icon: Database,
    featured: true,
  },
  {
    title: "Strategic Data Analysis & Dashboards",
    description: "Transformação de dados em insights visuais. Experiência na criação de dashboards (Power BI, Looker ou Excel) sustentados por queries SQL avançadas e processos de ETL.",
    tags: ["SQL Avançado", "Power BI", "ETL", "Analytics"],
    link: "https://github.com/luanjunqueira/social-data-intelligence",
    icon: BarChart3,
    featured: false,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-mono text-sm tracking-wider uppercase mb-4 block">
            Portfólio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Projetos &{" "}
            <span className="text-gradient">Prova Técnica</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Demonstração prática de habilidades em desenvolvimento e engenharia de dados
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`group relative overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-500 ${
                project.featured ? 'md:col-span-1' : ''
              }`}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary/20 text-primary border-primary/30">
                    Destaque
                  </Badge>
                </div>
              )}

              <CardHeader className="relative pb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <project.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="relative">
                <CardDescription className="text-muted-foreground text-base leading-relaxed mb-6">
                  {project.description}
                </CardDescription>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex}
                      variant="secondary"
                      className="bg-secondary/50 text-foreground/80 border border-border"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* CTA */}
                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    variant="outline" 
                    className="w-full group/btn border-border hover:border-primary hover:bg-primary/10"
                  >
                    Ver Repositório
                    <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
