import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Button, Container, Grid, createTheme, ThemeProvider } from "@mui/material";

import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import NormVideosPage from "./pages/NormVideosPage/NormVideosPage";
import InterVideosPage from "./pages/InterVideosPage/InterVideosPage";

import MainTheme from "./utils/MainTheme";
import "./App.scss";

export default function App() {
  return (
    <ThemeProvider theme={MainTheme}>
      <Container maxWidth={false}>
        <Grid container>
          {/* NavBar */}
          <Grid item xs={12} sm={12} md={12} lg={12} sx={{ backgroundColor: "green" }}>
            <NavBar />
          </Grid>

          {/* Pages */}
          <Grid item xs={12} sm={12} md={12} lg={12} sx={{ backgroundColor: "yellow" }}>
            <Router>
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

                  {/* Home */}
                  <Route path='/'>
                    <HomePage />
                  </Route>
                </Switch>
              </div>
            </Router>
          </Grid>

          {/* Footer */}
          <Grid item xs={12} sm={12} md={12} lg={12} sx={{ backgroundColor: "orange" }}>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
