import Enemy480 from "../assets/videos/enemy-480.mp4";
import EnemyThumb from "../assets/thumbnails/thumbnail.png";

interface Video {
  title: string;
  description: string;
  url: string;
  captions: string;
  thumbnail: string;
}

const Videos: Video[] = [
  {
    title: "Titulo del video 1",
    description: "Descripcion del video 1",
    url: Enemy480,
    captions: "",
    thumbnail: EnemyThumb,
  },
  {
    title: "Titulo del video 2",
    description: "Descripcion del video 2",
    url: Enemy480,
    captions: "",
    thumbnail: EnemyThumb,
  },
  {
    title: "Titulo del video 3",
    description: "Descripcion del video 3",
    url: Enemy480,
    captions: "",
    thumbnail: EnemyThumb,
  },
  {
    title: "Titulo del video 4",
    description: "Descripcion del video 4",
    url: Enemy480,
    captions: "",
    thumbnail: EnemyThumb,
  },
];

export default Videos;
