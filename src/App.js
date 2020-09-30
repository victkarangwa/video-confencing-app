import React, { useState } from 'react'
import {Jutsu} from 'react-jutsu'
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
    textField:{
      color: 'green'
    }
  },
}));

const App = () => {
  const classes = useStyles();

  const [room, setRoom] = useState('')
  const [name, setName] = useState('')
  const [call, setCall] = useState(false)

  const handleClick = event => {
    event.preventDefault()
    if (room && name) setCall(true)
  }

  return call ? (
    <Jutsu
      roomName={room}
      userName={name}
      loadingComponent={<p>loading ...</p>}
    />
  ) : (
    <div className='main-form'>
      <form className={classes.root}>
        {/* <input
          id="room"
          type="text"
          placeholder="Room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          className='form-input'
        /> */}
        {/* <input
          id="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='form-input'
        /> */}
        <TextField className={classes.textField} id="room" onChange={(e) => setName(e.target.value)} label="Room" variant="outlined" />
        <TextField className={classes.textField} id="name" onChange={(e) => setName(e.target.value)} label="Name" variant="outlined" />
        <Button variant="contained" color="secondary" onClick={handleClick} >
        Join
      </Button>
      </form>
      </div>
  );
}

export default App
