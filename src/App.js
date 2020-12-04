import './App.css';
import { Segment } from 'semantic-ui-react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Album from './Album';
import Register from './Register';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Router>
    <div className={classes.root}>
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
        />
      </FormGroup>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Una foto - un momento
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Perfil</MenuItem>
                <MenuItem onClick={handleClose}>Mi cuenta</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <header >
            <div className="App-header1">
                <div>
                      <Nav/>
                </div>
                
            </div>        
        </header>
  
        <body>
            <Segment>
              <div>  
                  <div>
                    <div>
                      <Switch>
                          <Route path='/Album' exact component={Album}/>
                          <Route path="/Register" exact component={Register}/> 
                      </Switch>
                    </div>
                  </div> 
              </div>
              
            </Segment> 
            
        </body>
          
        
        <footer>
          <div className="App-Footer">
              <div class="ui black vertical footer segment">
                    <div class="ui center aligned container">
            
                    </div>
                </div>  
          </div>
        </footer>        
      </div>
      </Router>

    
  );
}

/* 

<TextButtons/>
        
    
        <SignInSide/>*/

export default App;
