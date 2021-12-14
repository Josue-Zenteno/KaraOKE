import { Grid, Typography } from "@mui/material";
import "./FinalScore.scss";

type FinalScoreProps = {
  maxScore: number;
  finalScore: number;
};

export default function FinalScore({ maxScore, finalScore }: FinalScoreProps) {
  return (
    <Grid container direction='column' className='FinalScore'>
      <Grid item xs={12}>
        <Typography className='Title'>Final Score</Typography>
      </Grid>
      <Grid item xs>
        <Typography className='Score'>
          {finalScore}
          {" / "}
          {maxScore}
        </Typography>
      </Grid>
    </Grid>
  );
}
