import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Button, Container, Grid, createTheme, ThemeProvider } from "@mui/material";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NormVideosPage from "./pages/NormVideosPage/NormVideosPage";
import InterVideosPage from "./pages/InterVideosPage/InterVideosPage";

import MainTheme from "./utils/MainTheme";
import "./App.scss";

export default function App() {
  return (
    <ThemeProvider theme={MainTheme}>
      <Container maxWidth={false}>
        <Router>
          <Grid container className='App'>
            {/* NavBar */}
            <Grid item xs={12}>
              <NavBar />
            </Grid>

            {/* Pages */}
            <Grid item className='Content' xs={12}>
              <div>
                <Switch>
                  {/* Normal Video Player */}
                  <Route path='/video-player'>
                    <NormVideosPage />
                  </Route>

                  {/* Interactive Video Player */}
                  <Route path='/interactive-video-player'>
                    <InterVideosPage />
                  </Route>

                  {/* About */}
                  <Route path='/about'>
                    <AboutPage />
                  </Route>

                  {/* Home */}
                  <Route path='/'>
                    <HomePage />
                  </Route>
                </Switch>
              </div>
            </Grid>

            {/* Footer */}
            <Grid item className='Footer' xs={12}>
              <Footer />
            </Grid>
          </Grid>
        </Router>
      </Container>
    </ThemeProvider>
  );
}
