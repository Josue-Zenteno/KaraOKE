import { Grid, Typography } from "@mui/material";
import "./VideoThumbnailDesc.scss";
import { Video } from "../../utils/Videos";

type VideoDescProps = {
  video: Video;
};
export default function VideoThumbnailDesc({ video }: VideoDescProps) {
  return (
    <Grid container className='ThumbnailDescription'>
      <Grid item xs={12}>
        <Typography variant='subtitle1' className='Title'>
          {video.title}
        </Typography>
      </Grid>
      <Grid item xs className='ShortDescription'>
        <Typography variant='caption'>{video.shortDesc}</Typography>
      </Grid>
    </Grid>
  );
}
