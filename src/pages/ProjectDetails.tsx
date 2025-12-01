import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Github, Code2 } from "lucide-react";
import { projects } from "@/data/projects";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Project Not Found</h1>
          <Link to="/projects">
            <Button>Back to Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Back Button */}
          <Link to="/projects">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </Button>
          </Link>

          {/* Header */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl font-bold">{project.title}</h1>
              <p className="text-xl text-muted-foreground">{project.shortDescription}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              {project.liveUrl && (
                <Button asChild className="gap-2">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button asChild variant="outline" className="gap-2">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Cover Image */}
          <div className="rounded-xl overflow-hidden border border-border">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-80 object-cover"
            />
          </div>

          {/* Tech Stack */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <Code2 className="h-6 w-6 text-primary" />
              Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm px-4 py-1">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Full Description */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">About the Project</h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Key Features</h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Code Snippet */}
          {project.codeSnippet && (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Code Highlight</h2>
              <div className="bg-secondary/50 border border-border rounded-xl p-6">
                <p className="text-sm text-muted-foreground mb-4">{project.codeSnippet.title}</p>
                <pre className="bg-card p-4 rounded-lg overflow-x-auto">
                  <code className="text-sm font-mono text-primary">
                    {project.codeSnippet.code}
                  </code>
                </pre>
              </div>
            </div>
          )}

          {/* Challenges & Learnings */}
          {(project.challenges || project.learnings) && (
            <div className="grid md:grid-cols-2 gap-6">
              {project.challenges && (
                <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                  <h3 className="text-lg font-semibold text-accent">Challenges</h3>
                  <p className="text-sm text-muted-foreground">{project.challenges}</p>
                </div>
              )}
              {project.learnings && (
                <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                  <h3 className="text-lg font-semibold text-primary">What I Learned</h3>
                  <p className="text-sm text-muted-foreground">{project.learnings}</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
