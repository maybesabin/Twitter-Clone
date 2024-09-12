import React, { useState } from 'react';
import UserIcon from '../assets/userIcon.png'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ImageIcon from '@mui/icons-material/Image';
import GifBoxIcon from '@mui/icons-material/GifBox';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import LocationOnIcon from '@mui/icons-material/LocationOn';

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

  //Add Post Mechanism
  const [post, setPost] = useState("");
  const [posts, setPosts] = useState([])
  const postSubmit = () => {
    setPosts([...posts, post])
    setPost("");
  }

  return (
    <div className='flex flex-col items-start justify-start h-[100%] w-[100%]'>
      <div className='flex items-center justify-center w-[100%] border-b-[1px] border-gray-500'>

        <div onClick={toggleForyou} className={`transition-all w-[50%] h-[60px] flex relative items-center justify-center gap-3 cursor-pointer hover:bg-[#181818] ${foryouActive ? 'opacity-100' : 'opacity-50'}`}>
          <h1 className='font-semibold text-md'>For you</h1>
          <div className={`w-[65px] absolute bottom-0 rounded-2xl bg-blue-500 h-[4px] ${foryouActive ? '' : 'hidden'}`}></div>
        </div>

        <div onClick={toggleFollowing} className={`transition-all w-[50%] h-[60px] flex relative items-center justify-center gap-3 cursor-pointer hover:bg-[#181818] ${followingActive ? 'opacity-100' : 'opacity-50'}`}>
          <h1 className='font-semibold text-md'>Following</h1>
          <div className={`w-[80px] absolute bottom-0 rounded-2xl bg-blue-500 h-[4px] ${followingActive ? '' : 'hidden'}`}></div>
        </div>
      </div>

      {/* Posting Post  */}
      <div className='flex flex-col items-start justify-center w-[100%] px-6 pt-6 pb-12 gap-9'>
        <div className='flex items-start justify-center gap-4 w-[100%]'>
          <img src={UserIcon} width={'40px'} alt="" />
          <input value={post} onChange={(e) => setPost(e.target.value)} type="text" placeholder='What is happening?!' className='bg-black text-xl font-light text-white outline-none 
                w-[calc(100%-40px)]' />
        </div>

        <div className='w-[calc(100%-65px)] flex flex-col items-start gap-2 ml-[55px]'>
          <div className='bg-[#181818] w-[100%] h-[1px]'></div>

          <div className='flex items-center justify-between w-[100%]'>
            <div className='flex items-center justify-center' id='postComponents'>
              <div className='ml-[-10px]'><ImageIcon fontSize='medium' /></div>
              <div><GifBoxIcon fontSize='medium' /></div>
              <div><EmojiEmotionsIcon fontSize='medium' /></div>
              <div><LocationOnIcon fontSize='medium' /></div>
            </div>

            <button onClick={postSubmit} className='bg-blue-500 transition-all hover:bg-blue-600 cursor-pointer text-white w-[80px] font-semibold rounded-full h-[40px]'>Post</button>

          </div>
        </div>
      </div>

      {/* Posts */}
      {
        posts.map((item, index) => {
          return (
            <div key={index} className='flex items-start justify-between px-6 py-4 w-[100%] border-b-2 border-[#181818]'>
              <div className='flex items-start justify-start gap-4'>
                <img src={UserIcon} width={'40px'} alt="" />
                <div className='flex flex-col items-start justify-center gap-2'>
                  <div className='flex items-start justify-center gap-2'>
                    <h1 className='font-semibold'>sabinhamal</h1>
                    <h3 className='text-sm text-gray-400'>@16calc</h3>
                    <h5 className='text-sm text-gray-400'>• 1m</h5>
                  </div>
                  <p>{item}</p>
                </div>
              </div>
              <MoreHorizIcon className=' text-gray-400' fontSize='small' />
            </div>
          )
        })
      }
    </div>
  )
}

export default MiddleSide