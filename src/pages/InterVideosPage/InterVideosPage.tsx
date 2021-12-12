import { createRef, useState } from "react";
import ReactPlayer from "react-player";
import { Button, Container, Grid, Typography } from "@mui/material";

import FinalScore from "../../components/FinalScore/FinalScore";
import OptionButton from "../../components/OptionButton/OptionButton";
import VideoDesc from "../../components/VideoDesc/VideoDesc";
import VideoThumbnail from "../../components/VideoThumbnail/VideoThumbnail";
import VideoThumbnailDesc from "../../components/VideoThumbnailDesc/VideoThumbnailDesc";

import Videos, { Video } from "../../utils/Videos";
import Sentence from "../../utils/Captions";

import "./InterVideosPage.scss";

let intervalCaptions: number;
let currentLyrics: Sentence[];
let videoPlayer = createRef<ReactPlayer>();

export default function InterVideosPage() {
  const [currentVideo, setCurrentVideo] = useState(Videos[0]);
  const [currentCaption, setCurrentCaption] = useState<string>("*Captions*");
  const [finalScoreComponent, setFinalScoreComponent] = useState(<></>);

  // Handlers
  const handleChangeVideo = (video: Video): void => {
    setupVideo(video);
  };

  const handleReadyVideo = (): void => {
    hideFinalScore();
    resetCaptions();
  };

  const handleStartVideo = (): void => {
    setupLyrics();
  };

  const handlePlayVideo = (): void => {
    startCaptions();
  };

  const handlePauseVideo = (): void => {
    stopCaptions();
  };

  const handleEndVideo = (): void => {
    showFinalScore();
  };

  // Methods
  const setupVideo = (video: Video): void => {
    setCurrentVideo(video);
  };

  const setupLyrics = (): void => {
    currentLyrics = currentVideo.captions;
  };

  const startCaptions = (): void => {
    intervalCaptions = setInterval(() => {
      let currentTime = videoPlayer?.current?.getCurrentTime();
      let currentSentence = findSentence(currentTime)?.text;
      if (currentSentence) {
        setCurrentCaption(currentSentence);
      }
    }, 1000);
  };

  const stopCaptions = (): void => {
    clearInterval(intervalCaptions);
  };

  const resetCaptions = (): void => {
    setCurrentCaption("*Captions*");
  };

  const showFinalScore = (): void => {
    setFinalScoreComponent(<FinalScore />);
  };

  const hideFinalScore = (): void => {
    setFinalScoreComponent(<></>);
  };

  //Aux Methods
  const findSentence = (currentTime: any): any => {
    let aux = currentLyrics.find((sentence) => sentence.time == Math.round(currentTime));
    return aux;
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
                ref={videoPlayer}
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
              <Typography className='Text'>{currentCaption}</Typography>
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
                  <Button key={Video.title} onClick={() => handleChangeVideo(Video)} fullWidth={true} className='Thumbnail'>
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
