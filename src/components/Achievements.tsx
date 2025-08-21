import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, FileText, BookOpen } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      category: "Competition Awards",
      icon: <Trophy className="h-8 w-8 text-primary" />,
      items: [
        "Top 3 positions in several symposiums",
        "Top 3 positions in coding competitions",
        "Top 3 positions in oratory competitions"
      ]
    }
  ];

  const certifications = [
    {
      title: "NPTEL Cloud Computing",
      issuer: "NPTEL",
      type: "Technical",
      icon: <FileText className="h-6 w-6" />
    },
    {
      title: "NPTEL Joy of Computing Python",
      issuer: "NPTEL", 
      type: "Programming",
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      title: "NPTEL Introduction to Machine Learning",
      issuer: "NPTEL",
      type: "AI/ML",
      icon: <Award className="h-6 w-6" />
    },
    {
      title: "French DELF A1 Level",
      issuer: "Inlingua",
      type: "Language",
      icon: <FileText className="h-6 w-6" />
    }
  ];

  const coursework = [
    "Data Structures", "Algorithms", "Cloud Computing", 
    "Computer Networks", "Machine Learning", "Database Systems"
  ];

  return (
    <section id="achievements" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Achievements & Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recognition and continuous learning milestones that reflect my commitment to excellence and growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Achievements */}
          <Card className="glass-card hover:glow-effect transition-all duration-300 group lg:col-span-1">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-primary/20 rounded-lg mr-4">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Achievements</h3>
              </div>
              
              <div className="space-y-6">
                {achievements.map((achievement, index) => (
                  <div key={index}>
                    <h4 className="font-semibold mb-3 flex items-center">
                      <Award className="h-5 w-5 mr-2 text-accent" />
                      {achievement.category}
                    </h4>
                    <ul className="space-y-2">
                      {achievement.items.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="glass-card hover:glow-effect transition-all duration-300 group lg:col-span-2">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-accent/20 rounded-lg mr-4">
                  <FileText className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="p-4 bg-card/50 rounded-lg border border-border/50 hover:border-primary/30 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          {cert.icon}
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {cert.type}
                        </Badge>
                      </div>
                    </div>
                    <h4 className="font-semibold mb-1">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Relevant Coursework */}
          <Card className="glass-card hover:glow-effect transition-all duration-300 group lg:col-span-3">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-secondary/20 rounded-lg mr-4">
                  <BookOpen className="h-8 w-8 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Relevant Coursework</h3>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {coursework.map((course) => (
                  <Badge 
                    key={course} 
                    variant="secondary" 
                    className="text-sm px-4 py-2 hover:bg-primary/20 transition-colors cursor-default"
                  >
                    {course}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;