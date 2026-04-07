import projectRealize from "@/assets/project-realize.jpg";
import freeRoomImage from "@/assets/free room.jpg";
import aboutCollage from "@/assets/about-collage.png";
import aboutPhoto from "@/assets/about-photo.jpg";
import contactPhoto from "@/assets/contact-photo.jpg";

export interface Project {
  title: string;
  year: string;
  category: string;
  image: string;
  slug: string;
  youtubeUrl?: string;
  videoUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Free Room",
    year: "2025",
    category: "Short Film",
    image: freeRoomImage,
    slug: "free-room",
    videoUrl: "https://www.dropbox.com/scl/fi/s8g9kiggiseh97scjzxbt/FREE-ROOM-narrative-short-film.mp4?rlkey=eco06wj1qbtj2hd6lg509i8u4&st=alpji9n5&dl=0",
  },
  {
    title: "REALIZE (2026)",
    year: "2026",
    category: "Music Video — Co-Director & Artist",
    image: projectRealize,
    slug: "realize",
    youtubeUrl: "https://youtu.be/0xBQifDQx5o?si=Cj1efozz7HiC3Sz9",
  },
  {
    title: "Best Audition Ever",
    year: "2024",
    category: "Short Film — Written & Directed",
    image: aboutCollage,
    slug: "best-audition-ever",
    youtubeUrl: "https://www.youtube.com/watch?v=U8bp2CfCooA",
  },
  {
    title: "UT Barkada — Isang Mahal",
    year: "2024",
    category: "Stage Performance — Creative Director",
    image: aboutPhoto,
    slug: "ut-barkada-2024",
    youtubeUrl: "https://www.youtube.com/watch?v=HMFcz7QpGTY",
  },
  {
    title: "UT FSA Modern — Goodphil",
    year: "2025",
    category: "Stage Performance — Creative Director",
    image: aboutCollage,
    slug: "ut-barkada-2025",
    youtubeUrl: "https://www.youtube.com/watch?v=-cbOAHKu3zY",
  },
  {
    title: "Kidz Bop — Havana",
    year: "2018",
    category: "Performer",
    image: contactPhoto,
    slug: "kidz-bop-havana",
    youtubeUrl: "https://www.youtube.com/watch?v=8OXf3ufjOsM",
  },
  {
    title: "Kidz Bop Tour",
    year: "2021",
    category: "Performer",
    image: aboutPhoto,
    slug: "kidz-bop-tour",
    youtubeUrl: "https://www.youtube.com/watch?v=0bJYeuq8hig",
  },
];
