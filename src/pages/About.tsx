import { Code2, Database, Layers, Rocket, GraduationCap, Briefcase } from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Frontend",
      icon: Code2,
      items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Redux", "React Query"]
    },
    {
      category: "Backend",
      icon: Database,
      items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL"]
    },
    {
      category: "Tools & Others",
      icon: Layers,
      items: ["Git", "Docker", "AWS", "Firebase", "Vercel", "Jest"]
    }
  ];

  const timeline = [
    {
      icon: GraduationCap,
      year: "2025",
      title: "Bachelor of Science in Computer Science",
      company: "IIMT Group of Colleges",
      description: "Comprehensive education in computer science fundamentals, software development, and modern programming paradigms."
    },
    {
      icon: GraduationCap,
      year: "2020 - 2022",
      title: "Intermediate & High School",
      company: "Shaheed Bhagat Singh Inter College",
      description: "Completed 10th (2020) and 12th (2022) with strong foundation in science and mathematics."
    },
    {
      icon: GraduationCap,
      year: "Currently Enrolled",
      title: "IIT-M Pravartak Certified Full Stack Development with AI Tools",
      company: "IIT Madras",
      description: "Advanced full stack development program integrating AI tools and modern development practices."
    },
    {
      icon: GraduationCap,
      year: "July 2025",
      title: "MEAN Stack Certification",
      company: "GUVI (HCL)",
      description: "Mastered MongoDB, Express.js, Angular, and Node.js for building full-stack JavaScript applications."
    },
    {
      icon: GraduationCap,
      year: "July 2025",
      title: "JavaScript Certification",
      company: "GUVI (HCL)",
      description: "Advanced JavaScript programming covering ES6+, asynchronous programming, and modern frameworks."
    },
    {
      icon: GraduationCap,
      year: "June 2025",
      title: "HTML & CSS Certification",
      company: "GUVI (HCL)",
      description: "Comprehensive web design and development using HTML5, CSS3, and responsive design principles."
    },
    {
      icon: GraduationCap,
      year: "2024",
      title: "Python – MTA",
      company: "Microsoft Technology Associate",
      description: "Certified in Python programming fundamentals and application development."
    },
    {
      icon: Briefcase,
      year: "Aug 2025",
      title: "TCS iON National Qualifier Test (NQT)",
      company: "TCS - IT & Psychometric",
      description: "Qualified in TCS National Qualifier Test for IT and Psychometric assessment."
    }
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center space-y-4 mb-16">
          {/* Profile Photo */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-50 animate-pulse" />
              <img
                src="/profile.png"
                alt="Gaurav Rai"
                className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-primary/20 shadow-2xl"
              />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold">
            About <span className="text-gradient">Me</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with a love for creating clean, efficient, and user-friendly web applications
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-20">
          {/* Bio Section */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <Rocket className="h-8 w-8 text-primary" />
              Who I Am
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm <span className="text-foreground font-semibold">Gaurav Rai</span>, a full-stack developer with a passion for building modern, responsive web applications that solve real-world problems.
                With expertise in the MERN stack and a keen eye for design, I bridge the gap between functionality and aesthetics.
              </p>
              <p>
                My journey into web development started with curiosity about how websites work, which evolved into a career
                building scalable applications. I love the challenge of turning complex requirements into elegant solutions.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                or sharing knowledge with the developer community through blog posts and tutorials.
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold">Skills & Technologies</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {skills.map((skillGroup) => (
                <div
                  key={skillGroup.category}
                  className="bg-card border border-border rounded-xl p-6 space-y-4 hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <skillGroup.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-secondary rounded-lg text-sm text-muted-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Timeline Section */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold">Experience & Education</h2>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-8 border-l-2 border-border last:pb-0"
                >
                  {/* Icon */}
                  <div className="absolute -left-4 top-0 p-2 rounded-full bg-card border-2 border-border">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <p className="text-sm text-primary font-medium">{item.year}</p>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground font-medium">{item.company}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Interests Section */}
          <section className="bg-card border border-border rounded-xl p-8 space-y-6">
            <h2 className="text-3xl font-bold">Areas of Interest</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Modern Frontend Frameworks",
                "API Design & Development",
                "Performance Optimization",
                "UI/UX Design Principles",
                "Cloud Architecture",
                "Open Source Contribution"
              ].map((interest) => (
                <div key={interest} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{interest}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
