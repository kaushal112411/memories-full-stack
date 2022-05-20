import React, { useEffect,useState } from 'react';
import Post  from './post/Post';
import { useSelector,useDispatch } from 'react-redux';
import useStyles from './styles'
import { fetchPosts } from '../../api/api';
import { Grid ,CircularProgress} from '@material-ui/core';
import axios from 'axios';
import { getPosts } from '../../actions/getPosts';
const Postsvis = ({setcurrentId}) => {
  const dispatch = useDispatch();
  const posts = useSelector((state)=> state.posts)
  const classes = useStyles()
  const [data,setData]=useState([])
    return (
       !posts.length ? <CircularProgress/>:
          <Grid container spacing={3} className={classes.Grid}>
           {posts.map((post)=>{
           return <Grid key={post._id} item xs={6} sm={4}>
             <Post post={post} setcurrentId={setcurrentId}/>
           </Grid>})
           }
        </Grid>
    );
};
export default Postsvis;