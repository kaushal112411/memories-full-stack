import * as api from '../api/api';

//action creators
export const getPosts = ()=> async(dispatch)=>{
    try {
        const {data} = await api.fetchPosts();
        dispatch({type:'FETCH',payload:data})
    } catch (error) {
       console.log(error) 
    }
}
export const CreatePost = (newPost)=> async(dispatch)=>{
    try {
        const {data} = await api.postapi(newPost)
        dispatch({type:'CREATE',payload:data})
    } catch (error) {
        console.log(error)
    }
}
export const updatePost = (id, post)=> async(dispatch)=>{
    try {
      const {data} = await api.updatePost(id,post);
      console.log(data)
      dispatch({type:'UPDATE',payload:data});
    } catch (error) {
       console.log(error);
    }
}
export const deletePost = (id)=> async(dispatch)=>{
    try {
      await api.deletePost(id);
      dispatch({type:'DELETE',payload:id});
    } catch (error) {
       console.log(error);
    }
}