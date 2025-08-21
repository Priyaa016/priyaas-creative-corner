import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, School, MessageSquare } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "School Management System",
      description: "A comprehensive web-based school management system built to streamline administrative tasks, student enrollment, and academic tracking.",
      icon: <School className="h-8 w-8 text-primary" />,
      technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
      features: [
        "Student enrollment and management",
        "Grade tracking and reporting",
        "Administrative dashboard",
        "Responsive design"
      ]
    },
    {
      title: "Career Guidance Chatbot",
      description: "An intelligent chatbot designed to provide personalized career guidance and counseling to students based on their interests and skills.",
      icon: <MessageSquare className="h-8 w-8 text-accent" />,
      technologies: ["Python", "Machine Learning", "NLP"],
      features: [
        "Natural language processing",
        "Personalized recommendations",
        "Interactive conversation flow",
        "Career path analysis"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcase of my technical projects that demonstrate my skills in web development, AI, and data science.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card hover:glow-effect transition-all duration-300 group h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-card rounded-lg">
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Technologies */}
                <div>
                  <h4 className="font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="hover:bg-primary/20 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" className="flex-1 hover:bg-primary/10 transition-colors">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 hover:bg-accent/10 transition-colors">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;