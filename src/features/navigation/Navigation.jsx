import * as React from 'react';
import { EnglishFlag, MmsLogo, SerbianFlag } from '../../assets';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {
  FacebookOutlined,
  Instagram,
  LinkedIn,
  Twitter,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import './navigation.style.css';

const Navigation = () => {
  const { t, i18n } = useTranslation();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const pages = [
    { name: t('home'), id: 'home' },
    { name: t('about'), id: 'about' },
    { name: t('services'), id: 'services' },
    { name: t('news'), id: 'news' },
    { name: t('contact'), id: 'contact' },
  ];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleScroll = (page_id) => {
    const element = document.getElementById(page_id);
    element.scrollIntoView({
      top: 0,
      behavior: 'smooth',
    });
    handleCloseNavMenu();
  };
  return (
    <AppBar
      className="fadeinleft animation-duration-1000 shadow-3"
      sx={{ position: 'sticky', backgroundColor: '#ffa62b' }}
    >
      <Container maxWidth="x1">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', lg: 'flex' },
            }}
          >
            <MmsLogo />
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', lg: 'none' },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', lg: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={() => handleScroll(page.id)}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', lg: 'none' },
              flexGrow: 1,
              fontFamily: 'Playfair Display',
            }}
          >
            <MmsLogo />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: 'none',
                lg: 'flex',
                justifyContent: 'center',
                gap: '15px',
              },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.id}
                onClick={() => handleScroll(page.id)}
                sx={{
                  my: 2,
                  color: 'black',
                  display: 'block',
                  fontStyle: 'Arial',
                  fontSize: '16px',
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              flexGrow: 0,
              display: 'flex',
              justifyContent: 'spaceBetween',
              alignItems: `center`,
              gap: '25px',
              color: 'black',
              maxWidth: '280px',
              width: '100%',
            }}
          >
            <FacebookOutlined sx={{ '&:hover': { cursor: 'pointer' } }} />
            <Instagram sx={{ '&:hover': { cursor: 'pointer' } }} />
            <Twitter sx={{ '&:hover': { cursor: 'pointer' } }} />
            <LinkedIn sx={{ '&:hover': { cursor: 'pointer' } }} />
            <div className="languagesAndFlags">
              <SerbianFlag onClick={() => changeLanguage('sr')} />
              <EnglishFlag onClick={() => changeLanguage('en')} />
            </div>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
