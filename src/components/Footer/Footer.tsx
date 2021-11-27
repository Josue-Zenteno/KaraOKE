import { Button, Grid, Link, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import ProjectData from "../../utils/ProjectData";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className='footer'>
      {/* Footer Left Side */}
      <div>
        <Grid container spacing={2} alignItems='center'>
          <Grid item xs>
            <GitHubIcon color='primary' fontSize='large' />
          </Grid>
          <Grid item xs>
            <Typography variant='h5'>
              <Link href={ProjectData.ProjectRepository} target='_blank' rel='noreferrer' underline='none' color='primary'>
                {ProjectData.ProjectName}
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </div>

      {/* Footer Right Side */}
      <div>
        <Typography fontSize='medium' color='GrayText'>
          {`Designed and developed by `}
          <Link href='/about' underline='none' color='primary'>
            {ProjectData.TeamName}
          </Link>
        </Typography>
      </div>
    </div>
  );
}
