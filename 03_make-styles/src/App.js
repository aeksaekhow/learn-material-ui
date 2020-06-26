import React from 'react';
import './App.css';
import {Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  buttonBackground: (props => ({
    backgroundColor: (props.styleNo === 1 ? 'lightgreen' : 'yellow'),
    [theme.breakpoints.up('sm')]: {
      backgroundColor: (props.styleNo === 1 ? 'green' : 'orange')
    }
  })),
  buttonText: (props => ({
    color: (props.styleNo === 1 ? 'white' : 'black')
  }))
}))

const App = (props) => {

  const classes = useStyles(props);

  return (
    <div className="App">
      <Button fullWidth className={[classes.buttonText, classes.buttonBackground]}>Button</Button>
    </div>
  );
}

export default App;
