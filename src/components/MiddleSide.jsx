import React, { useState } from 'react';
import PostForm from './PostForm';
import Post from './Post';

const MiddleSide = () => {
  // Switch Content 
  const [foryouActive, setForyouActive] = useState(true)
  const [followingActive, setFollowingActive] = useState(false)
  const toggleForyou = () => {
    setForyouActive(true)
    setFollowingActive(false)
  }
  const toggleFollowing = () => {
    setForyouActive(false)
    setFollowingActive(true)
  }

  const [posts, setPosts] = useState([]);

  // Add & Delete Posts
  const addPost = (newPost) => {
    if (newPost !== "") {
      setPosts([...posts, newPost]);
    } 
    
  };

  const deletePost = (postToDelete) => {
    setPosts(posts.filter((post) => post !== postToDelete));
  };

  return (
    <div className='flex flex-col w-[100%] items-start justify-start h-[100%]'>
      <div style={{zIndex: '999'}} className='flex fixed w-[645px] bg-black items-center justify-center border-b-[1px] border-[#181818]'>
         <div onClick={toggleForyou} className={`transition-all w-[50%] h-[60px] flex relative items-center justify-center gap-3 cursor-pointer hover:bg-[#181818] ${foryouActive ? 'opacity-100' : 'opacity-50'}`}>
          <h1 className='font-semibold text-md'>For you</h1>
          <div className={`w-[65px] absolute bottom-0 rounded-2xl bg-blue-500 h-[4px] ${foryouActive ? '' : 'hidden'}`}></div>
        </div>

        <div onClick={toggleFollowing} className={`transition-all w-[50%] h-[60px] flex relative items-center justify-center gap-3 cursor-pointer hover:bg-[#181818] ${followingActive ? 'opacity-100' : 'opacity-50'}`}>
          <h1 className='font-semibold text-md'>Following</h1>
          <div className={`w-[80px] absolute bottom-0 rounded-2xl bg-blue-500 h-[4px] ${followingActive ? '' : 'hidden'}`}></div>
        </div>
      </div>

      {/* Post Form */}
      <PostForm addPost={addPost} />

      {/* Displaying Posts */}
      {posts.map((post, index) => (
        <Post key={index} post={post} deletePost={deletePost} />
      ))}
    </div>
  );
};

export default MiddleSide;
