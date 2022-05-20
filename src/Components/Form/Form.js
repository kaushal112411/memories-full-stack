import React, { useState ,useEffect} from 'react';
import { TextField,Button,Paper,Typography } from '@material-ui/core';
import FileBase from 'react-file-base64'
import useStyles from './styles';
import { useDispatch,useSelector } from 'react-redux';
import { CreatePost ,updatePost} from '../../actions/getPosts';
import { fetchPosts } from '../../api/api';
const Form = ({currentId,setcurrentId}) => {
    const [postData,setPostData] = useState({creator:"",title:"",message:"",tags:"",selectedFile:"" })
    const post = useSelector((state)=> currentId ?
    state.posts.find((p) => p._id === currentId):null
    )
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
      if(post){
          console.log(post)
          setPostData(post)
      }
    },[post])
    const handleSubmit = (e)=>{
     e.preventDefault();
     if(currentId === 0){
         dispatch(CreatePost(postData))
         clear()
     }
     else{
        //dispatch(updatePost(currentId,postData))
        clear()
     }
     clear()
    }
    const clear = ()=>{
    setcurrentId(0);
    setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    };
    return (
        <Paper className={classes.Paper} style={{marginTop:"10px",marginBottom:"20px",borderRadius:"10px"}}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
              <Typography >{currentId ? 'Editing': 'Create'} a memory</Typography>
              <TextField
              name='creator'
              value={postData.creator}
              label="creator"
              variant='outlined'
              fullWidth
              onChange={(e)=> setPostData({...postData,creator:e.target.value})}
              />
                <TextField
              name='title'
              value={postData.title}
              label="title"
              variant='outlined'
              fullWidth
              onChange={(e)=> setPostData({...postData,title:e.target.value})}
              />
                <TextField
              name='message'
              value={postData.message}
              label="message"
              variant='outlined'
              fullWidth
              onChange={(e)=> setPostData({...postData,message:e.target.value})}
              />
                <TextField
              name='tags'
              value={postData.tags}
              label="tags"
              variant='outlined'
              fullWidth
              onChange={(e)=> setPostData({...postData,tags:e.target.value})}
              />
              <div className={classes.fileInput}>
              <FileBase type="" multiple={false} onDone={({base64}) => setPostData({...postData,selectedFile:base64})} />
              </div>
              <Button color='primary' variant='contained' type='submit' className={classes.buttonSubmit}>Submit</Button>
            <Button color='secondary' variant='contained' className={classes.buttonSubmit} onClick={clear}>clear</Button>
            </form>
            
        </Paper>
    );
};

export default Form;