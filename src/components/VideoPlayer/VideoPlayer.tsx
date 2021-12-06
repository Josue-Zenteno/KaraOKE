import ReactPlayer from "react-player";

export default function VideoPlayer({ video }) {
  return <ReactPlayer url={video.url} controls={true} width='100%' height='100%' />;
}
