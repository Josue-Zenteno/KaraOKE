import { createRef, useState } from "react";
import ReactPlayer from "react-player";
import { Button, Container, Grid, Typography } from "@mui/material";

import FinalScore from "../../components/FinalScore/FinalScore";
import VideoDesc from "../../components/VideoDesc/VideoDesc";
import VideoThumbnail from "../../components/VideoThumbnail/VideoThumbnail";
import VideoThumbnailDesc from "../../components/VideoThumbnailDesc/VideoThumbnailDesc";

import Videos, { Video } from "../../utils/Videos";
import Sentence from "../../utils/Captions";

import "./InterVideosPage.scss";

let intervalCaptions: number;
let currentLyrics: Sentence[];
let currentAnswers: string[];
let currentUserAnswers: string[];
let videoPlayer = createRef<ReactPlayer>();

export default function InterVideosPage() {
  const [currentVideo, setCurrentVideo] = useState(Videos[0]);
  const [currentQuestions, setCurrentQuestions] = useState<any>();
  const [currentCaption, setCurrentCaption] = useState<string>("*Captions*");
  const [finalScoreComponent, setFinalScoreComponent] = useState(<></>);
  const [videoPlayPause, setVideoPlayPause] = useState<boolean>(false);

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
    setupAnswers();
    setupUserAnswers();
  };

  const handlePlayVideo = (): void => {
    setVideoPlayPause(true);
    startCaptions();
  };

  const handlePauseVideo = (): void => {
    setVideoPlayPause(false);
    stopCaptions();
  };

  const handleEndVideo = (): void => {
    showFinalScore();
  };

  const handleOptionSelected = (option: string): void => {
    setCurrentQuestions(undefined);
    currentUserAnswers.push(option);
    setVideoPlayPause(true);
  };

  // Methods
  const setupVideo = (video: Video): void => {
    setCurrentVideo(video);
  };

  const setupLyrics = (): void => {
    currentLyrics = currentVideo.captions;
  };

  const setupAnswers = (): void => {
    currentAnswers = currentVideo.answers;
  };

  const setupUserAnswers = () => {
    currentUserAnswers = [];
  };

  const startCaptions = (): void => {
    intervalCaptions = setInterval(() => {
      let questions = updateCaptions();
      if (questions) {
        setupQuestions(questions);
        pauseVideoQuestion();
      }
    }, 900);
  };

  const pauseVideoQuestion = () => {
    setVideoPlayPause(false);
  };

  const updateCaptions = (): string[] | undefined => {
    let currentTime = videoPlayer?.current?.getCurrentTime();
    let currentSentence = findSentence(currentTime);
    if (currentSentence) {
      setCurrentCaption(currentSentence.text);

      if (currentSentence.question) {
        return currentSentence.posibilities;
      }
    }

    return undefined;
  };

  const setupQuestions = (questions: string[]): void => {
    setCurrentQuestions(questions);
  };

  const stopCaptions = (): void => {
    clearInterval(intervalCaptions);
  };

  const resetCaptions = (): void => {
    setCurrentCaption("*Captions*");
  };

  const showFinalScore = (): void => {
    let finalScore: number = calulateFinalScore();
    let maxScore: number = currentAnswers.length;
    setFinalScoreComponent(<FinalScore maxScore={maxScore} finalScore={finalScore} />);
  };

  const calulateFinalScore = (): number => {
    let parsedCurrentUserAnswers = parseUserAnswers();
    let finalAnswers;

    if (parsedCurrentUserAnswers.length > currentAnswers.length) {
      finalAnswers = parsedCurrentUserAnswers.filter((answer) => !currentAnswers.includes(answer));
    } else {
      finalAnswers = currentAnswers.filter((answer) => !parsedCurrentUserAnswers.includes(answer));
    }

    console.log(finalAnswers);
    if (finalAnswers.length > 0) {
      return currentAnswers.length - finalAnswers.length;
    }
    return currentAnswers.length;
  };

  const parseUserAnswers = (): string[] => {
    let currenUserAnswersSet = new Set(currentUserAnswers);
    let parsedUserAnswers = Array.from(currenUserAnswersSet);
    return parsedUserAnswers;
  };

  const hideFinalScore = (): void => {
    setFinalScoreComponent(<></>);
  };

  //Aux Methods
  const findSentence = (currentTime: any): any => {
    let auxSentence: Sentence | undefined = currentLyrics.find((sentence) => sentence.time == Math.round(currentTime));
    return auxSentence;
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
                playing={videoPlayPause}
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
                  {currentQuestions?.map((option: string) => {
                    return (
                      <Button key={option} variant='contained' onClick={() => handleOptionSelected(option)} className='Button'>
                        {option}
                      </Button>
                    );
                  })}
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
            <Grid item className='FinalScoreSection'>
              {finalScoreComponent}
            </Grid>

            {/* Thumbnails */}
            <Grid item>
              {Videos.map((Video) => {
                return (
                  <Button key={Video.title} onClick={() => handleChangeVideo(Video)} fullWidth={true} className='ThumbnailContainer'>
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
