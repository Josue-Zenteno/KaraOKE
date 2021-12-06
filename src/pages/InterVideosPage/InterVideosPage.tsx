import { Button, Container, Grid } from "@mui/material";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoDesc from "../../components/VideoDesc/VideoDesc";
import VideoThumbnail from "../../components/VideoThumbnail/VideoThumbnail";
import VideoThumbnailDesc from "../../components/VideoThumbnailDesc/VideoThumbnailDesc";

import Videos, { Video } from "../../utils/Videos";
import { useState } from "react";
import FinalScore from "../../components/FinalScore/FinalScore";
import OptionButton from "../../components/OptionButton/OptionButton";

import "./InterVideosPage.scss";
import ReactPlayer from "react-player";

export default function InterVideosPage() {
  const [currentVideo, setCurrentVideo] = useState(Videos[0]);

  const handleVideoUpdate = (video: Video): void => {
    setCurrentVideo(video);
  };

  return (
    <Container maxWidth='xl'>
      <Grid container className='InteractiveVideoPlayer'>
        {/* Video player section*/}
        <Grid item xs={12} lg={9}>
          <Grid container /*sx={{ backgroundColor: "blue" }}*/ className='VideoPlayerSection'>
            {/* Video player */}
            <Grid item xs={12} className='VideoPlayer'>
              <ReactPlayer url={currentVideo.url} controls={true} width='100%' height='100%' />
            </Grid>

            {/* Description section */}
            <Grid item xs>
              <Grid container direction='row-reverse' className='DescriptionSection'>
                {/* Option buttons */}
                <Grid item xs={12} md /*sx={{ backgroundColor: "red" }}*/ className='OptionButtons'>
                  <OptionButton />
                </Grid>

                {/* Description */}
                <Grid item xs /*sx={{ backgroundColor: "orange" }}*/ className='Description'>
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
            <Grid item>
              <FinalScore />
            </Grid>

            {/* Thumbnails */}
            <Grid item>
              {Videos.map((Video) => {
                return (
                  <Button onClick={() => handleVideoUpdate(Video)} fullWidth={true} className='Thumbnail'>
                    <Grid container>
                      <Grid item xs={12} md>
                        <VideoThumbnail video={Video} />
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
