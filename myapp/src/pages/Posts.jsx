import React from "react";
import { useState } from "react";
import PostForm from "../components/UI/PostForm"
import MySelect from "../components/UI/Select/MySelect";
import Postlist from "../components/Postlist";




const Posts = () => {
    const [posts, setPosts] = useState([
        {id: 1, title: "React midterem", body : "28.10.23"},
        {id: 1, title: "Software testing" , body : "03.11.23"},
        {id: 1, title: "FBIS", body : "02.11.23"},
      ])
    
      const createPost = (newPost) => {
        setPosts([...posts,newPost])
      }
    
      const removePost = (post) => {
    
        setPosts(posts.filter(p => p.id !== post.id))
        
      }
    
     
      return (
        <div className="App">   
          <PostForm create = {createPost} /> 
          <hr style={{margin: '15px 0'}}></hr>
          <div>
           <MySelect
              defaultValue="Sort"
              options={[
                {value: 'title', name: 'By name'},
                {value: 'body', name :'By content'}
                
              ]}
           />
          </div>
          {posts.length
            ? 
            <Postlist remove = {removePost} posts = {posts} title = "List of posts"/>
            :
            <h1 style={{textAlign : "center"}}>Not Found Post</h1>
    
          }
        </div>
      );

}

export default Posts;
