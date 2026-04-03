import { Link } from "react-router-dom";
import { getYouTubeThumbnail } from "@/lib/youtube";

interface ProjectCardProps {
  title: string;
  year: string;
  category: string;
  image: string;
  slug: string;
  youtubeUrl?: string;
}

const ProjectCard = ({ title, year, category, image, slug, youtubeUrl }: ProjectCardProps) => {
  const thumbnail = youtubeUrl ? getYouTubeThumbnail(youtubeUrl) ?? image : image;

  return (
    <Link to={`/project/${slug}`} className="group block">
      <div className="overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          width={1280}
          height={720}
        />
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="font-display text-xl text-foreground">{title}</h3>
        <p className="text-xs tracking-[0.1em] text-muted-foreground font-body">
          {year} — {category}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;
