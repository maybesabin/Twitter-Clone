import React from 'react'
import twitterLogo from '../assets/logo-white.png'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import UserIcon from '../assets/userIcon.png'


const LeftSidebar = () => {
  return (
    <div className='flex flex-col items-start justify-between h-[100%] py-4'>

      <div id='twitterLogo'>
        <img src={twitterLogo} width={'30px'} alt="Twitter Logo" />
      </div>

      <div className='flex flex-col items-start justify-center gap-6 mt-[-5rem]' id='container'>
        <div className='flex items-center justify-center gap-4'>
          <HomeIcon fontSize='large' />
          <h3 className='font-semibold text-xl'>Home</h3>
        </div>
        <div className='flex items-center justify-center gap-4'>
          <SearchIcon fontSize='large' />
          <h3 className='font-semibold text-xl'>Explore</h3>
        </div>
        <div className='flex items-center justify-center gap-4'>
          <NotificationsIcon fontSize='large' />
          <h3 className='font-semibold text-xl'>Notifications</h3>
        </div>
        <div className='flex items-center justify-center gap-4'>
          <EmailIcon fontSize='large' />
          <h3 className='font-semibold text-xl'>Messages</h3>
        </div>
        <div className='flex items-center justify-center gap-4'>
          <BookmarkIcon fontSize='large' />
          <h3 className='font-semibold text-xl'>Bookmarks</h3>
        </div>
        <div className='flex items-center justify-center gap-4'>
          <PersonIcon fontSize='large' />
          <h3 className='font-semibold text-xl'>Profile</h3>
        </div>
        <div className='flex items-center justify-center gap-4'>
          <MoreHorizIcon fontSize='large' />
          <h3 className='font-semibold text-xl'>More</h3>
        </div>
        <button className='bg-blue-500 transition-all hover:bg-blue-600 cursor-pointer text-white w-[250px] font-semibold rounded-full h-[55px]'>Post</button>
      </div>


      <div className='flex items-center justify-between w-[100%]'>
        <div className='flex items-center justify-start gap-3'>
          <img src={UserIcon} width={'40px'} alt="" />
          <div className='flex flex-col items-start justify-center'>
            <h1 className='font-semibold'>sabinhamal</h1>
            <h3 className='text-sm text-gray-400'>@16calc</h3>
          </div>
        </div>
        <MoreHorizIcon fontSize='large' />
      </div>
    </div>
  )
}

export default LeftSidebar