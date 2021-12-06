import ReactPlayer from "react-player";
import "./VideoThumbnail.scss";
export default function VideoThumbnail({ video }) {
  return <img src={video.thumbnail} className='Thumbnail'></img>;
}
