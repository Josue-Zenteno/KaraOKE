import ReactPlayer from "react-player";
import { Video } from "../../utils/Videos";

type VideoDescProps = {
  video: Video;
};

export default function VideoPlayer({ video }: VideoDescProps) {
  return <ReactPlayer url={video.url} controls={true} width='100%' height='100%' />;
}
