import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
 

const Header = ( ) => {
 
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" sx = {{ position: 'static'}} >
        <Toolbar>
          <Typography variant="h6" sx={{ my: 2 }}>
          MUI
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header