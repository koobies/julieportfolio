import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { projects } from "@/lib/projects";
import { getYouTubeId } from "@/lib/youtube";
import { ArrowLeft } from "lucide-react";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Layout>
        <div className="px-6 md:px-12 py-24 text-center">
          <h1 className="font-display text-2xl text-foreground">Project not found</h1>
          <Link to="/" className="text-muted-foreground hover:text-foreground mt-4 inline-block">
            ← Back to works
          </Link>
        </div>
      </Layout>
    );
  }

  const videoId = project.youtubeUrl ? getYouTubeId(project.youtubeUrl) : null;

  return (
    <Layout>
      <section className="px-6 md:px-12 pt-8 pb-24 max-w-5xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 font-body"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to works
        </Link>

        <div className="space-y-6">
          <div>
            <h1 className="font-display text-3xl md:text-4xl text-foreground">{project.title}</h1>
            <p className="text-xs tracking-[0.1em] text-muted-foreground font-body mt-2">
              {project.year} — {project.category}
            </p>
          </div>

          {videoId ? (
            <div className="aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                title={project.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : project.videoUrl ? (
            <div className="aspect-video w-full">
              <iframe
                src={project.videoUrl}
                title={project.title}
                className="w-full h-full"
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            </div>
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full aspect-video object-cover"
            />
          )}
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
