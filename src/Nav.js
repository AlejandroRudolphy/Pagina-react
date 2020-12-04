import React from "react";
import './App.css';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { FcHome } from "react-icons/fc";
import { GiPhotoCamera } from "react-icons/gi";
import { FaUserTie } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(2),
      },
    },
  }));

function Nav() {

    const classes = useStyles();

    

    return (
      <center>
        <div>
        <div className={classes.root}> 
        <nav>
          <Link to='/home'>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<FcHome/>}
              >Inicio
            </Button>
          </Link>   
          <Link to='/Album'>
            <Button 
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<GiPhotoCamera/>}
              >Album
            </Button>
          </Link>
          <Link to='/Register'>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              startIcon={<FaUserTie/>}
              >Registro
            </Button>
          </Link>
        </nav>
      </div>
    </div>
     </center>
    );
  }
  
  
  export default Nav;
  
