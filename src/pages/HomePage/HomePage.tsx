import { Button, Container, Grid, Link, Typography } from "@mui/material";
import ProjectData from "../../utils/ProjectData";

import "./HomePage.scss";

export default function HomePage() {
  return (
    <Container maxWidth={false}>
      <Grid container direction='column' className='HomePage'>
        {/* Banner */}
        <Grid item xs={12} direction='column' className='Banner'>
          <Typography className='BannerTitle'>{ProjectData.ProjectName}</Typography>
          <Typography className='BannerCaption'>Online Knowledge in English</Typography>
        </Grid>

        {/* Button */}
        <Grid item xs={12} className='LearnButton'>
          <Link href='/#/interactive-video-player' underline='none'>
            <Button variant='contained' color='secondary' className='Button'>
              Let's Learn !!
            </Button>
          </Link>
        </Grid>

        {/* Description */}
        <Grid item xs={12} className='ProjectDescription'>
          <Typography align='center' className='Text'>
            {ProjectData.ProjectDescription}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
