import { AppBar, Box, Container, IconButton, Toolbar, Typography } from '@mui/material';
import { ColorTheme } from '../../app.pallate';
import { ReactComponent as Logo } from '../../poplitu_icon.svg';

export default function Header() {
  return (
    <AppBar
        sx={{
          backgroundColor: ColorTheme.white,
          color: ColorTheme.black,
          boxShadow: 'none',
        }}
        position="sticky"
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              sx={{
                width: 44,
                height: 44,
                padding: '0px 12px 0px 0px',
              }}
            >
              <Logo />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="h2"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                fontSize: '24px',
                color: 'inherit',
                textDecoration: 'none',
                letterSpacing: '0rem',
              }}
              >
                <span style={{ color: ColorTheme.primary }}>Pop</span>
                litu
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex' }, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
              <Typography
                variant="button"
                noWrap
                component="a"
                href="/product"
                sx={{
                  mr: '28px',
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '0.01rem',
                  textTransform: 'none',
                  color: '#8C8C8C',
                  textDecoration: 'none',
                  fontSize: '16px',
                  '&:hover': {
                    color: '#5690FF',
                  },
                }}
                >
                  Product
              </Typography>
              <Typography
                variant="button"
                noWrap
                component="a"
                href="/pricing"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '0.01rem',
                  textTransform: 'none',
                  color: '#8C8C8C',
                  textDecoration: 'none',
                  fontSize: '16px',
                  '&:hover': {
                    color: '#5690FF',
                  },
                }}
                >
                  Pricing
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex' }, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
              <Typography
                variant='button'
                sx={{
                  backgroundColor: ColorTheme.primary,
                  color: ColorTheme.white,
                  borderRadius: '22px',
                  textTransform: 'none',
                  padding: '8px 16px',
                  marginRight: '12px',
                }}
              >
                Signup for free
              </Typography>
              <Typography
                variant="button"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontWeight: 400,
                  letterSpacing: '.3rem',
                  color: '#8C8C8C',
                  textDecoration: 'none',
                  letterSpacing: '0.01rem',
                  textTransform: 'none',
                  backgroundColor: ColorTheme.white,
                  border: `1px solid ${ColorTheme.primary}`,
                  borderRadius: '22px',
                  padding: '8px 16px',
                }}
                >
                  Login
              </Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
  )
}