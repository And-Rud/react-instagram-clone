import React, { useState } from 'react'
import './Timeline.css'
import Suggestions from './Suggestions'
import Post from './posts/Post'

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: 'andrud_',
      postsImage:
        'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80',
      likes: 12,
      timespamp: '2d',
    },
    {
      user: 'Jonnie',
      postsImage:
        'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      likes: 56,
      timespamp: '4d',
    },
    {
      user: 'Colli',
      postsImage:
        'https://imgd.aeplcdn.com/1056x594/n/cw/ec/44686/activa-6g-right-front-three-quarter.jpeg?q=75',
      likes: 72,
      timespamp: '1d',
    },
    {
      user: 'Colli',
      postsImage:
        'https://imgd.aeplcdn.com/1056x594/n/cw/ec/44686/activa-6g-right-front-three-quarter.jpeg?q=75',
      likes: 72,
      timespamp: '2d',
    },
  ])
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postsImage={post.postsImage}
              like={post.likes}
              timespamp={post.timespamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  )
}

export default Timeline
