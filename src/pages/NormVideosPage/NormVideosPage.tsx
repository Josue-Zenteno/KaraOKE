import { useState } from "react";

import { Button, Container, Grid } from "@mui/material";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoDesc from "../../components/VideoDesc/VideoDesc";
import VideoThumbnail from "../../components/VideoThumbnail/VideoThumbnail";
import VideoThumbnailDesc from "../../components/VideoThumbnailDesc/VideoThumbnailDesc";

import Videos, { Video } from "../../utils/Videos";

import "./NormVideosPage.scss";

export default function NormVideosPage() {
  const [currentVideo, setCurrentVideo] = useState(Videos[0]);

  const handleVideoUpdate = (video: Video): void => {
    setCurrentVideo(video);
  };

  return (
    <Container maxWidth='xl'>
      <Grid container className='NormalVideoPlayer'>
        {/* Video player */}
        <Grid item xs={12} lg={9} className='VideoPlayer'>
          <Grid container>
            <Grid item xs={12} className='Player'>
              <VideoPlayer video={currentVideo} />
            </Grid>
            <Grid item xs className='Description'>
              <VideoDesc video={currentVideo} />
            </Grid>
          </Grid>
        </Grid>

        {/* Thumbnails */}
        <Grid item xs className='Thumbnails'>
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
    </Container>
  );
}
