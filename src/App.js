 
// import {makeStyles} from '@material-ui/core/styles'
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'


const useStyles = makeStyles({
  typographyStyles :{
    color :'red'
  },
});


function App() {
  const classes = useStyles();
 
  return (
    <div className="App">
      <Typography 
      className = {classes.typographyStyles} 
      gutterBottom
      >
        What can I do for you!!
      </Typography>

    </div>
  );
}

export default App;
