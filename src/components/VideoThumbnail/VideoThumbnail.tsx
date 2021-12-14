import ReactPlayer from "react-player";
import "./VideoThumbnail.scss";

import { Video } from "../../utils/Videos";

type VideoDescProps = {
  video: Video;
};
export default function VideoThumbnail({ video }: VideoDescProps) {
  return <img src={video.thumbnail} className='Thumbnail'></img>;
}
