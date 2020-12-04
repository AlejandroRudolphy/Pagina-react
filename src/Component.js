import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function TextButtons() {
  const classes = useStyles();

  return (

    <center>
    <div>
    Welcome 
    </div>
    <div 
      className={classes.root}>
      <Button>Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>

      <Button href="#text-buttons" color="primary">
        Log in
      </Button>

     {/* */}
    
    </div>
    </center>
   
  );
}

