import axios from 'axios';
const url = 'https://peaceful-sea-74443.herokuapp.com/posts';
const urlp = 'https://peaceful-sea-74443.herokuapp.com/posts/Createpost';
export const fetchPosts = () => axios.get(url)
export const postapi = (newPost) => axios.post(url,newPost)
export const updatePost = (id,updatedPost) => axios.patch(`${url}/${id}`,updatedPost)
export const deletePost = (id) => axios.delete(`${url}/${id}`);