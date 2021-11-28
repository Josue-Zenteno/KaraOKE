import { useState } from "react";
import { RouteProps, withRouter } from "react-router";
import { Link, AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, MenuItem, Grid } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import ProjectData from "../../utils/ProjectData";
import Sections from "../../utils/Sections";
import "./NavBar.scss";

const NavBar = (props: RouteProps) => {
  const pathName = props?.location?.pathname;
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar className='NavBar' position='sticky'>
      <Container maxWidth={false}>
        <Toolbar>
          {/* Logo */}
          <Typography noWrap sx={{ display: { xs: "none", md: "flex" } }}>
            <Link href='/'>
              <figure className='Logo'>
                <img className='Logo' src={ProjectData.ProjectLogo} alt='' />
              </figure>
            </Link>
          </Typography>

          {/* Collapsed Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            {/* Hamburguer Button */}
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>

            {/* Sections */}
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {Sections.map((Section) => {
                return (
                  <MenuItem>
                    <Typography textAlign='center'>
                      <Link href={Section.Route} underline='none' color={pathName === Section.Route ? "primary" : "whitesmoke"}>
                        {Section.Label}
                      </Link>
                    </Typography>
                  </MenuItem>
                );
              })}
            </Menu>
          </Box>

          {/* Collapsed Logo */}
          <Typography noWrap component='div' sx={{ display: { xs: "flex", md: "none" } }}>
            <Link href='/'>
              <figure className='SmallLogo'>
                <img src={ProjectData.ProjectLogo} alt='' />
              </figure>
            </Link>
          </Typography>

          {/* Sections */}
          <Grid spacing={2} container sx={{ display: { xs: "none", md: "flex" } }}>
            {Sections.map((Section) => {
              return (
                <Grid item>
                  <Typography textAlign='center'>
                    <Link href={Section.Route} underline='none' color={pathName === Section.Route ? "primary" : "whitesmoke"}>
                      {Section.Label}
                    </Link>
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default withRouter(NavBar);
