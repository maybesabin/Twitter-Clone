import React, { useState } from 'react';
import PostOptions from './PostOptions';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DeleteIcon from '@mui/icons-material/Delete';
import UserIcon from '../assets/userIcon.png'

const Post = ({ post, deletePost }) => {
  const [displayDelete, setDisplayDelete] = useState(false);

  const toggleDeleteButton = () => {
    setDisplayDelete(!displayDelete);
  };

  return (
    <div className='relative flex items-start justify-between px-6 py-4 w-[100%] border border-t-0 border-gray-600'>
      <div className='flex items-start justify-start gap-4 w-[100%]'>
        <img src={UserIcon} width={'40px'} alt="User" className='w-12 h-12 rounded-full' />
        <div className='flex flex-col items-start justify-center gap-2 w-[100%]'>
          <h1 className='font-semibold text-white'>sabinhamal</h1>
          <p className='text-white'>{post}</p>

          {/* Post Options */}
          <PostOptions />
        </div>
      </div>

      <div className='relative'>
        <MoreHorizIcon onClick={toggleDeleteButton} className='hover:bg-[#181818] rounded-full transition-all cursor-pointer text-white' />
        {displayDelete && (
            <div onClick={() => deletePost(post)} className="absolute right-0 top-7 bg-red-600 transition-all hover:bg-red-800 w-[100px] text-white p-2 rounded-full cursor-pointer">
            <DeleteIcon fontSize='small' /> Delete
            </div>
        )}
      </div>
    </div>
  );
};

export default Post;
