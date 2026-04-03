import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

const Index = () => {
  return (
    <Layout>
      <section className="px-6 md:px-12 pt-8 pb-24">
        <h1 className="font-display text-6xl md:text-8xl text-center text-foreground mb-12">Creative Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.slug}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s`, opacity: 0 }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Index;
