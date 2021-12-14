import { Grid, Typography } from "@mui/material";
import "./VideoDesc.scss";
import { Video } from "../../utils/Videos";

type VideoDescProps = {
  video: Video;
};

export default function VideoDesc({ video }: VideoDescProps) {
  return (
    <Grid container direction='column' className='VideoDescription'>
      <Grid item>
        <Typography variant='h4' className='Title' textAlign='justify'>
          {video.title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='inherit' className='Description'>
          {video.description}
        </Typography>
      </Grid>
    </Grid>
  );
}
