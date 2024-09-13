import React, { useState, useEffect, useRef } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import randomIcon1 from '../assets/randomIcon1.png'
import randomIcon2 from '../assets/randomIcon2.png'
import randomIcon3 from '../assets/randomIcon3.png'
import randomIcon4 from '../assets/randomIcon4.png'

const RightSideBar = () => {
  const [toggleSearch, setToggleSearch] = useState(false);
  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setToggleSearch(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchRef]);

  //Trending Posts
  const trendingPosts = [
    { category: "Technology • Trending", topic: "Google", numberOfPosts: "490k posts" },
    { category: "Trending", topic: "Tristan", numberOfPosts: "6,331 posts" },
    { category: "Trending in Nepal", topic: "Pokhara", numberOfPosts: "" },
    { category: "Trending", topic: "Sneako", numberOfPosts: "36k posts" },
    { category: "Trending in Nepal", topic: "#Kathmandu", numberOfPosts: "" },
    { category: "Trending in Nepal", topic: "#scholarships", numberOfPosts: "36k posts" },
    { category: "Politics • Trending", topic: "Gross", numberOfPosts: "55.9k posts" },]

  const usersToFollow = [
    { name: "Emma Collins", username: "@emma_wanderlust", image: randomIcon1 },
    { name: "Lucas Ramirez", username: "@lucas_codes", image: randomIcon2 },
    { name: "Ava Patel", username: "@ava_innovates", image: randomIcon3 },
    { name: "Ethan Johnson", username: "@ethan_thewise", image: randomIcon4 },
  ]

  return (
    <div className='flex flex-col gap-4 pl-6 items-start h-[100%] w-[100%] justify-start'>

      <div className='flex items-center justify-start gap-6 my-2'>
        <div
          ref={searchRef}
          className={`text-gray-500 h-[50px] pl-6 pr-12  ${toggleSearch ? 'border-[#1d9ef4]' : 'border-none'
            } border rounded-full flex items-center justify-center gap-4 bg-[#202327] w-[100%]`}
        >
          <SearchIcon className={`${toggleSearch ? "text-[#1d9ef4]" : "text-gray-500"} `} fontSize='medium' />
          <input
            onClick={() => setToggleSearch(true)}
            className={`bg-[#202327] cursor-pointer outline-none text-md ${toggleSearch ? "text-white" : "text-gray-500"} `}
            type='text'
            placeholder='Search'
          />

        </div>
        <DarkModeIcon fontSize='large' className='cursor-pointer' />
      </div>

      {/* Subscribe  */}
      <div className='flex flex-col items-start justify-start gap-4 border border-[#181818] rounded-2xl p-4 w-[350px]'>
        <h1 className='font-semibold text-2xl'>Subscribe to Premium</h1>
        <p className='text-sm'>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
        <button className='w-[150px] h-[40px] flex items-center hover:bg-blue-600 transition-all justify-center font-semibold rounded-full bg-[#1d9ef4] text-white px-6 py-4'>Subscribe</button>
      </div>

      {/* Trends for you  */}
      <div className='flex flex-col items-start justify-start gap-9 border border-[#181818] h-auto rounded-2xl p-4 w-[350px]'>
        <h1 className='font-semibold text-2xl'>Trends for you</h1>

        {/* Trend Cards  */}
        {trendingPosts.map((item, index) => {
          return (
            <div key={index} className='w-[100%] flex flex-col items-start justify-center gap-2'>
              <div className='flex items-center font-extralight text-xs justify-between w-[100%]'>
                <h3>{item.category}</h3>
                <MoreHorizIcon fontSize='small' />
              </div>
              <h1 className='font-semibold'>{item.topic}</h1>
              <h4 className='text-xs font-extralight'>{item.numberOfPosts}</h4>
            </div>
          )
        })}
      </div>

      {/* Who to follow  */}
      <div className='flex flex-col items-start justify-start gap-9 border border-[#181818] h-auto rounded-2xl p-4 w-[350px]'>
        <h1 className='font-semibold text-2xl'>Who to follow</h1>

        {usersToFollow.map((item, index) => {
          return (
            <div key={index} className='flex items-center justify-between w-[100%]'>
              <div className='flex items-center justify-center gap-3'>
                <img src={item.image} width={'40px'} alt="" />
                <div className='flex flex-col items-start justify-center'>
                  <h1 className='font-semibold'>{item.name}</h1>
                  <h3 className='text-sm text-gray-500 font-light'>{item.username}</h3>
                </div>
              </div>
              <button className='bg-white text-black px-4 py-2 rounded-full font-semibold text-sm hover:bg-slate-200'>Follow</button>
            </div>
          )
        })}
        <button className='text-[#13669e]'>Show more</button>
      </div>

      {/* Footer  */}
      <div className='flex items-center text-xs pt-6 flex-wrap leading-[7px] text-gray-400 font-light justify-start gap-4'>
          <a href="#" className='hover:underline '>Terms of service</a>
          <a href="#" className='hover:underline '>Privacy Policy</a>
          <a href="#" className='hover:underline '>Cookie Policy</a>
          <a href="#" className='hover:underline '>Accessibility</a>
          <a href="#" className='hover:underline '>Ads info</a>
          <a href="#" className='hover:underline '>More...</a>
          <a href="#" className='hover:underline '>© 2024 Sxbin.</a>
      </div>  

    </div>
  );
};

export default RightSideBar;
