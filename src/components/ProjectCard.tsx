import { Link } from "react-router-dom";
import { getYouTubeThumbnail } from "@/lib/youtube";

interface ProjectCardProps {
  title: string;
  year: string;
  category: string;
  image: string;
  slug: string;
  youtubeUrl?: string;
  videoUrl?: string;
}

const ProjectCard = ({ title, year, category, image, slug, youtubeUrl, videoUrl }: ProjectCardProps) => {
  let thumbnail = image;
  if (youtubeUrl) {
    thumbnail = getYouTubeThumbnail(youtubeUrl) ?? image;
  } else if (videoUrl) {
    const match = videoUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
    if (match) {
      thumbnail = `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1280`;
    }
  }

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
