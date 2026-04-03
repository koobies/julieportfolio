import Layout from "@/components/Layout";
import ProjectCard from "@/components/ProjectCard";
import heroImage from "@/assets/hero.jpg";
import projectRealize from "@/assets/project-realize.jpg";
import project1 from "@/assets/project-1.jpg";
import projectBarkada from "@/assets/project-barkada.jpg";
import projectKidzbop from "@/assets/project-kidzbop.jpg";
import project2 from "@/assets/project-2.jpg";
import project4 from "@/assets/project-4.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "Free Room",
    year: "2025",
    category: "Short Film",
    image: heroImage,
    slug: "free-room",
  },
  {
    title: "REalize",
    year: "2026",
    category: "Music Video — Co-Director & Artist",
    image: projectRealize,
    slug: "realize",
  },
  {
    title: "Best Audition Ever",
    year: "2024",
    category: "Short Film — Written & Directed",
    image: project1,
    slug: "best-audition-ever",
    youtubeUrl: "https://www.youtube.com/watch?v=U8bp2CfCooA",
  },
  {
    title: "UT Barkada — Isang Mahal",
    year: "2024",
    category: "Stage Performance — Creative Director",
    image: projectBarkada,
    slug: "ut-barkada-2024",
    youtubeUrl: "https://www.youtube.com/watch?v=HMFcz7QpGTY",
  },
  {
    title: "UT FSA Modern — Goodphil",
    year: "2025",
    category: "Stage Performance — Creative Director",
    image: project2,
    slug: "ut-barkada-2025",
    youtubeUrl: "https://www.youtube.com/watch?v=-cbOAHKu3zY",
  },
  {
    title: "Kidz Bop — Havana",
    year: "2018",
    category: "Performer",
    image: projectKidzbop,
    slug: "kidz-bop-havana",
    youtubeUrl: "https://www.youtube.com/watch?v=8OXf3ufjOsM",
  },
  {
    title: "Kidz Bop Tour",
    year: "2021",
    category: "Performer",
    image: project4,
    slug: "kidz-bop-tour",
    youtubeUrl: "https://www.youtube.com/watch?v=0bJYeuq8hig",
  },
  {
    title: "Kidz Bop Interview — ABS-CBN",
    year: "2020",
    category: "Performer — Featured Interview",
    image: project3,
    slug: "kidz-bop-interview",
    youtubeUrl: "https://www.youtube.com/watch?v=G3RGZculmDQ",
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
