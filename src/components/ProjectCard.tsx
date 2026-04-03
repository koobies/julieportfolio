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
    <Link to={`/project/${slug}`} className="group block relative overflow-hidden">
      <img
        src={thumbnail}
        alt={title}
        className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
        width={1280}
        height={720}
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
        <h3 className="font-display text-2xl md:text-3xl text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500 tracking-wide uppercase">
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default ProjectCard;
