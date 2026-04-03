import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

const Index = () => {
  return (
    <Layout>
      <section className="px-6 md:px-16 lg:px-32 xl:px-48 pt-8 pb-24">
        <h1 className="font-display text-6xl md:text-8xl text-center text-foreground mb-20">Creative Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
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
