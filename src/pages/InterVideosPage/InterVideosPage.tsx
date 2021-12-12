import { Button, Container, Grid, Typography } from "@mui/material";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoDesc from "../../components/VideoDesc/VideoDesc";
import VideoThumbnail from "../../components/VideoThumbnail/VideoThumbnail";
import VideoThumbnailDesc from "../../components/VideoThumbnailDesc/VideoThumbnailDesc";

import Videos, { Video } from "../../utils/Videos";
import { createRef, useState } from "react";
import FinalScore from "../../components/FinalScore/FinalScore";
import OptionButton from "../../components/OptionButton/OptionButton";

import Sentence from "../../utils/Captions";

import "./InterVideosPage.scss";
import ReactPlayer from "react-player";

let interval: number;
let lyrics: Sentence[];
let player = createRef<ReactPlayer>();

export default function InterVideosPage() {
  const [currentVideo, setCurrentVideo] = useState(Videos[0]);
  const [currentSentence, setCurrentSentence] = useState<string>("*Captions*");
  const [finalScoreComponent, setFinalScoreComponent] = useState(<></>);

  // Handlers
  const handleVideoUpdate = (video: Video): void => {
    setCurrentVideo(video);
  };

  const handleReadyVideo = () => {
    hideFinalScore();
    setCurrentSentence("*Captions*");
  };

  const handleStartVideo = () => {
    lyrics = currentVideo.captions;
  };

  const handlePlayVideo = (): void => {
    interval = setInterval(() => {
      let tiempoactual: any = player?.current?.getCurrentTime();
      let auxSentence = (): any => {
        let aux = lyrics.find((sentence) => sentence.time == Math.round(tiempoactual));
        return aux;
      };
      if (auxSentence()?.text) {
        setCurrentSentence(auxSentence()?.text);
      }
    }, 1000);
  };

  const handlePauseVideo = (): void => {
    clearInterval(interval);
  };

  const handleEndVideo = (): void => {
    showFinalScore();
  };

  // Methods
  const startInterval = (): string | void => {};

  const showFinalScore = (): void => {
    setFinalScoreComponent(<FinalScore />);
  };

  const hideFinalScore = (): void => {
    setFinalScoreComponent(<></>);
  };

  return (
    <Container maxWidth='xl'>
      <Grid container className='InteractiveVideoPlayer'>
        {/* Video player section*/}
        <Grid item xs={12} lg={9}>
          <Grid container className='VideoPlayerSection'>
            {/* Video player */}
            <Grid item xs={12} className='VideoPlayer'>
              <ReactPlayer
                ref={player}
                onReady={() => handleReadyVideo()}
                onStart={() => handleStartVideo()}
                onPlay={() => handlePlayVideo()}
                onPause={() => handlePauseVideo()}
                onEnded={() => handleEndVideo()}
                url={currentVideo.url}
                controls={true}
                width='100%'
                height='100%'
              />
            </Grid>

            {/* Captions */}
            <Grid item xs={12} className='Captions'>
              <Typography className='Text'>{currentSentence}</Typography>
            </Grid>

            {/* Description section */}
            <Grid item xs>
              <Grid container direction='row-reverse' className='DescriptionSection'>
                {/* Option buttons */}
                <Grid item xs={12} md className='OptionButtons'>
                  <OptionButton />
                </Grid>

                {/* Description */}
                <Grid item xs className='Description'>
                  <VideoDesc video={currentVideo} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Thumbnails sections */}
        <Grid item xs className='Thumbnails'>
          <Grid container direction='column'>
            {/* Final score */}
            <Grid item>{finalScoreComponent}</Grid>

            {/* Thumbnails */}
            <Grid item>
              {Videos.map((Video) => {
                return (
                  <Button key={Video.title} onClick={() => handleVideoUpdate(Video)} fullWidth={true} className='Thumbnail'>
                    <Grid container>
                      <Grid item xs={12} md sx={{ backgroundColor: "rgba(0, 0, 0, 0.438)" }}>
                        <VideoThumbnail video={Video} />
                        {Video.difficulty}
                      </Grid>
                      <Grid item xs>
                        <VideoThumbnailDesc video={Video} />
                      </Grid>
                    </Grid>
                  </Button>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
