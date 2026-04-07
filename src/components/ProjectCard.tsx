import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getYouTubeThumbnailCandidates } from "@/lib/youtube";

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
  const thumbnailCandidates = useMemo(() => {
    if (youtubeUrl) {
      const candidates = getYouTubeThumbnailCandidates(youtubeUrl);
      return [...candidates, image];
    }

    if (videoUrl) {
      const match = videoUrl.match(/\/d\/([a-zA-Z0-9_-]+)/);
      if (match) {
        return [`https://drive.google.com/thumbnail?id=${match[1]}&sz=w1280`, image];
      }
    }

    return [image];
  }, [image, videoUrl, youtubeUrl]);

  const [thumbnailIndex, setThumbnailIndex] = useState(0);

  useEffect(() => {
    setThumbnailIndex(0);
  }, [thumbnailCandidates]);

  const thumbnail = thumbnailCandidates[Math.min(thumbnailIndex, thumbnailCandidates.length - 1)];

  return (
    <Link to={`/project/${slug}`} className="group block relative overflow-hidden">
      <img
        src={thumbnail}
        alt={title}
        className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
        width={1280}
        height={720}
        onError={() => {
          setThumbnailIndex((current) => Math.min(current + 1, thumbnailCandidates.length - 1));
        }}
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
        <h3 className="font-display text-2xl md:text-3xl text-violet-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 tracking-wide uppercase drop-shadow-lg">
          {title}
        </h3>
      </div>
    </Link>
  );
};

export default ProjectCard;
