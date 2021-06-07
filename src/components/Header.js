import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {LoginPopup} from './LoginPopup';

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

export default function Header() {
  const classes = useStyles();

  const [isOpen, setOpen] = useState(false);
  const [log, setLog] = useState(true);

  const handleClose = () =>{
        setOpen(false);
    }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>

          {log?<Button onClick={() => setOpen(true)} color="inherit" >Login</Button>:"User Fav Read"}

        </Toolbar>
      </AppBar>
      <LoginPopup open = {isOpen} openPopup={setOpen} handleClose = {handleClose}>

      </LoginPopup>
    </div>
  );
}
