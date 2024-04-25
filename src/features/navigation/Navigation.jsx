import * as React from 'react';
import { MmsLogo } from '../../assets';
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

const Navigation = () => {
  const { t } = useTranslation();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const pages = [t('home'), t('about'), t('services'), t('news'), t('contact')];

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
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
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
                key={page}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: 'black',
                  display: 'block',
                  fontStyle: 'Arial',
                  fontSize: '16px',
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              flexGrow: 0,
              display: 'flex',
              justifyContent: 'spaceBetween',
              gap: '25px',
              color: 'black',
              maxWidth: '200px',
              width: '100%',
            }}
          >
            <FacebookOutlined sx={{ '&:hover': { cursor: 'pointer' } }} />
            <Instagram sx={{ '&:hover': { cursor: 'pointer' } }} />
            <Twitter sx={{ '&:hover': { cursor: 'pointer' } }} />
            <LinkedIn sx={{ '&:hover': { cursor: 'pointer' } }} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
