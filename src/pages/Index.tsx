import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import heroImage from "@/assets/hero.jpg";

const projects = [
  {
    title: "Golden Hour",
    year: "2025",
    category: "Independent Short Film",
    image: project1,
    slug: "golden-hour",
  },
  {
    title: "Neon Dreams",
    year: "2025",
    category: "Music Video",
    image: project2,
    slug: "neon-dreams",
  },
  {
    title: "Carousel",
    year: "2024",
    category: "Art Film",
    image: project3,
    slug: "carousel",
  },
  {
    title: "Silhouette",
    year: "2024",
    category: "Commercial",
    image: project4,
    slug: "silhouette",
  },
  {
    title: "Veiled Light",
    year: "2023",
    category: "Narrative Short",
    image: heroImage,
    slug: "veiled-light",
  },
];

const Index = () => {
  return (
    <Layout>
      <section className="px-6 md:px-12 pt-8 pb-24">
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
