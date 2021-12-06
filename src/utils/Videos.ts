import BlindingLights from "../assets/videos/blinding-lights.mp4";
import BlindingLightsThumb from "../assets/thumbnails/blinding-lights-thumb.png";

import Enemy from "../assets/videos/enemy.mp4";
import EnemyThumb from "../assets/thumbnails/enemy-thumb.png";

import Jinjer from "../assets/videos/jinjer.mp4";
import JinjerThumb from "../assets/thumbnails/jinjer-thumb.png";

import LazyTown from "../assets/videos/lazy-town.mp4";
import LazyTownThumb from "../assets/thumbnails/lazy-town-thumb.png";

import MyConfession from "../assets/videos/my-confession.mp4";
import MyConfessionThumb from "../assets/thumbnails/my-confession-thumb.png";

import SheperdOfFire from "../assets/videos/shepherd-of-fire.mp4";
import SheperdOfFireThumb from "../assets/thumbnails/shepherd-of-fire-thumb.png";

import TheIslander from "../assets/videos/the-islander.mp4";
import TheIslanderThumb from "../assets/thumbnails/the-islander-thumb.png";

import Warbringers from "../assets/videos/warbringers.mp4";
import WarbringersThumb from "../assets/thumbnails/warbringers-thumb.png";

export interface Video {
  title: string;
  description: string;
  shortDesc: string;
  url: string;
  captions: string;
  thumbnail: string;
}

const Videos: Video[] = [
  {
    title: "Blinding Lights",
    description: "Hombre que va en coche muy rápido mientras va bebido",
    shortDesc: "The Weeknd",
    url: BlindingLights,
    captions: "",
    thumbnail: BlindingLightsThumb,
  },
  {
    title: "Enemy",
    description: "Enemy cancion de la serie ARCANE",
    shortDesc: "Imagine Dragons",
    url: Enemy,
    captions: "",
    thumbnail: EnemyThumb,
  },
  {
    title: "Jinjer",
    description: "Jinjer gutural video te vas a quedar to loco",
    shortDesc: "Jinjer",
    url: Jinjer,
    captions: "",
    thumbnail: JinjerThumb,
  },
  {
    title: "Lazy Town",
    description: "Canción principal de la serie Lazy Town",
    shortDesc: "Lazy Town",
    url: LazyTown,
    captions: "",
    thumbnail: LazyTownThumb,
  },
  {
    title: "My Confession",
    description: "El rey arturo yo que sé jajaja",
    shortDesc: "Kamelot",
    url: MyConfession,
    captions: "",
    thumbnail: MyConfessionThumb,
  },
  {
    title: "Sheperd of Fire",
    description: "El galaxy fold vengador o asi xd",
    shortDesc: "Avenged Seven Fold",
    url: SheperdOfFire,
    captions: "",
    thumbnail: SheperdOfFireThumb,
  },
  {
    title: "The Islander",
    description: "Es islitas que vivirá en la Palma o por ahí",
    shortDesc: "Night Wish",
    url: TheIslander,
    captions: "",
    thumbnail: TheIslanderThumb,
  },
  {
    title: "Warbringers",
    description: "Jaja bander",
    shortDesc: "Warbringers",
    url: Warbringers,
    captions: "",
    thumbnail: WarbringersThumb,
  },
];

export default Videos;
