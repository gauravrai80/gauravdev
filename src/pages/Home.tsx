import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Database, Palette, Rocket } from "lucide-react";

const Home = () => {
  const skills = [
    { icon: Code2, label: "Frontend Development", color: "text-primary" },
    { icon: Database, label: "Backend APIs", color: "text-accent" },
    { icon: Palette, label: "UI/UX Design", color: "text-primary" },
    { icon: Rocket, label: "Full Stack", color: "text-accent" },
  ];

  const techStack = [
    "React", "TypeScript", "Node.js", "MongoDB",
    "Tailwind CSS", "Express", "PostgreSQL", "REST APIs"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm text-primary font-medium">
                Frontend Developer / Full Stack Engineer
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Building Digital
              <br />
              <span className="text-gradient">Experiences</span>
            </h1>

            {/* Bio */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Hi, I'm a passionate developer specializing in creating modern, responsive web applications.
              I transform ideas into elegant solutions using cutting-edge technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link to="/projects">
                <Button size="lg" className="gap-2 glow-primary">
                  View My Projects
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="gap-2">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
            <div className="w-1 h-3 rounded-full bg-primary animate-glow" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              What I Do
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.label}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <skill.icon className={`h-10 w-10 ${skill.color} mb-4 group-hover:scale-110 transition-transform`} />
                  <h3 className="font-semibold text-lg">{skill.label}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Tech Stack
            </h2>
            <p className="text-muted-foreground text-lg">
              Technologies I work with to bring ideas to life
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-6">
              {techStack.map((tech) => (
                <div
                  key={tech}
                  className="px-6 py-3 bg-card border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-300 font-mono text-sm"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
