import React from "react";
import './App.css';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';


import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

function Nav() {

    const classes = useStyles();

    

    return (
      
        <center>
         <div>
      WELCOME 

         <div className={classes.root}> 

        <nav>
          
            <Link to='/home'>
                <Button>Home</Button>
                </Link>
                
                <Link to='/Video'>
                <Button color="secondary">Video</Button>


                </Link>
                 <Link to='/Register'>
                   <Button color="primary">Register</Button>

                </Link>
                
               <Link to='/LogIn'>
               
                <Button href="#text-buttons" color="primary">
                 Log in
                 </Button>

                 </Link>
                
         
        </nav>
         </div>
    </div>
     </center>
    );
  }
  
  
  export default Nav;
  
