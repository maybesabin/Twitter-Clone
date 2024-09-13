import React from 'react'
import LeftSideBar from './components/LeftSideBar'
import RightSideBar from './components/RightSidebar'
import MiddleSide from './components/MiddleSide'

const App = () => {
  return (
    <div className='flex items-center justify-center w-[100%]'>
      <div className='flex items-start justify-center w-[70%] h-[180vh]'>
        <div className='flex items-center justify-start w-[20%] fixed left-[18rem] h-[100%]'>
          <LeftSideBar />
        </div>
        <div className='flex items-center justify-center w-[50%] ml-[18rem] h-[100%] bg-black border-[#181818] border border-t-0 border-b-0'>
          <MiddleSide />
        </div>
        <div className='flex items-center justify-end w-[30%] h-[100%]'>
          <RightSideBar />
        </div>
      </div>
    </div>
  )
}

export default App