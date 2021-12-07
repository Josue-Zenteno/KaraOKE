import GitHub from "@mui/icons-material/GitHub";
import { Card, CardMedia, CardContent, CardActions, Button, Grid, Typography, Link } from "@mui/material";
import ProjectData from "../../utils/ProjectData";
import "./AboutPage.scss";

export default function AboutPage() {
  return (
    <Grid container className='PageContent'>
      <Grid container direction='row' justifyContent='center'>
        <Typography variant='h3' className='TeamName'>
          {ProjectData.TeamName}
        </Typography>
      </Grid>
      <Grid container direction='row' spacing={12} justifyContent='center' alignContent='center'>
        {ProjectData.TeamMembers.map((Member) => {
          return (
            <Grid item>
              <Card className='MemberCard'>
                <CardMedia component='img' image={Member.Picture} className='Picture' />
                <CardContent>
                  <Typography className='Name'>
                    {Member.Name} {Member.Surname}
                  </Typography>
                  <Typography className='Email'>{Member.Email}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant='outlined'
                    startIcon={<GitHub />}
                    fullWidth={true}
                    component='a'
                    href={Member.Github}
                    target='_blank'
                    rel='noreferrer'
                    className='Button'
                  >
                    Github
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
