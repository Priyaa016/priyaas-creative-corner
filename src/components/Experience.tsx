import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "AI Intern",
      company: "Tech Vaseegrah",
      duration: "July 2025 - August 2025",
      type: "Internship",
      location: "Remote",
      description: "Worked on artificial intelligence projects, gaining hands-on experience in machine learning algorithms and AI model implementation.",
      skills: ["Machine Learning", "Python", "AI Development", "Data Analysis"]
    },
    {
      title: "Web Development Intern",
      company: "Code Bind",
      duration: "January 2025 - February 2025",
      type: "Internship",
      location: "Remote",
      description: "Developed and maintained web applications using modern web technologies, contributing to both frontend and backend development.",
      skills: ["HTML", "CSS", "JavaScript", "Web Development", "Frontend"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional experiences that have shaped my journey in technology and software development.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-primary"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Node */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-card glow-effect"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <Card className="glass-card hover:glow-effect transition-all duration-300 group">
                    <CardContent className="p-8">
                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div className="flex items-center gap-3 mb-2 sm:mb-0">
                          <div className="p-2 bg-primary/20 rounded-lg">
                            <Briefcase className="h-5 w-5 text-primary" />
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {exp.type}
                          </Badge>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {exp.duration}
                        </div>
                      </div>

                      {/* Job Title and Company */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-4 text-muted-foreground">
                          <span className="font-medium">{exp.company}</span>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Skills */}
                      <div>
                        <h4 className="font-semibold mb-3">Skills Applied</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill) => (
                            <Badge key={skill} variant="outline" className="hover:bg-primary/20 transition-colors">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;