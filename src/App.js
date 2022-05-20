import React , {useEffect,useState} from 'react';
import { Container,AppBar,Typography,Grid,Grow } from '@material-ui/core';
import memories from './images/memories.png'
import { useDispatch } from 'react-redux';
import {getPosts} from './actions/getPosts'
import Postsvis from './Components/Posts/Postsvis';
import Form from './Components/Form/Form';
import useStyles from './styles';
const App = ()=>{
    const [currentId,setcurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    },[dispatch])
    return (
      <Container maxWidth="lg">
          <AppBar className={classes.appBar} position='static' color='inherit'>
             <Typography className={classes.heading} variant="h4">Memories</Typography>
             <img className={classes.image} src={memories} alt="memories" height="60" width="100"/>
          </AppBar>
          <Grow in>
            <Container>
                <Grid container direction="column-reverse" justifyContent='space-between' alignItems='stretch'>
                   <Grid item xs={12} sm={8}>
                      <Postsvis setcurrentId={setcurrentId}/>
                   </Grid>
                   <Grid item xs={12} sm={6}>
                      <Form currentId={currentId} setcurrentId={setcurrentId} />
                   </Grid>
                </Grid>
            </Container>
          </Grow>
      </Container>
    )
}
export default App;