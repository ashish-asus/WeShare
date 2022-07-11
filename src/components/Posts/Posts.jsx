import React from 'react'
import './Posts.css'
import { PostsData } from '../../Data/PostsData'
import Post from '../Post/Post'
const Posts = () => {
  return (
    <div className='Posts'>
    {PostsData.map((post,id)=>{

       return <Post data={post} id={id}/> // passing data present in array:PostData to Post component.

    })}
    
    </div>
  )
}

export default Posts
