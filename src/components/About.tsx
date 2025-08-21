import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, School, Trophy } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A dedicated student with a passion for technology and innovation, constantly learning and growing in the field of AI & Data Science.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Education Card */}
          <Card className="glass-card hover:glow-effect transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/20 rounded-lg mr-4">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-2 border-primary/30 pl-4">
                  <h4 className="font-semibold text-lg">B.Tech AI & Data Science</h4>
                  <p className="text-muted-foreground text-sm">Currently Pursuing</p>
                </div>
                
                <div className="border-l-2 border-accent/30 pl-4">
                  <h4 className="font-semibold">Sri Vignesh Vidyalaya Sr Sec School</h4>
                  <div className="flex gap-4 mt-2">
                    <Badge variant="secondary">12th: 91.8%</Badge>
                    <Badge variant="secondary">10th: 94%</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Technical Skills Card */}
          <Card className="glass-card hover:glow-effect transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-accent/20 rounded-lg mr-4">
                  <School className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">Technical Skills</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Programming Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'C', 'C++', 'HTML', 'CSS', 'JavaScript'].map((skill) => (
                      <Badge key={skill} variant="outline" className="hover:bg-primary/20 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Frameworks & Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Bootstrap', 'MySQL', 'PostgreSQL'].map((skill) => (
                      <Badge key={skill} variant="outline" className="hover:bg-accent/20 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills & Languages Card */}
          <Card className="glass-card hover:glow-effect transition-all duration-300 group md:col-span-2 lg:col-span-1">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-secondary/20 rounded-lg mr-4">
                  <Trophy className="h-8 w-8 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Skills & Languages</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Soft Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Leadership', 'Team Work', 'Time Management', 'People Management'].map((skill) => (
                      <Badge key={skill} variant="secondary" className="hover:bg-secondary/40 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {['English', 'Hindi', 'Malayalam', 'Urdu', 'French'].map((lang) => (
                      <Badge key={lang} variant="outline" className="hover:bg-muted/20 transition-colors">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;