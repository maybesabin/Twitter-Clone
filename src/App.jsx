import React from 'react'
import LeftSideBar from './components/LeftSideBar'
import RightSideBar from './components/RightSidebar'
import MiddleSide from './components/MiddleSide'

const App = () => {
  return (
    <div className='flex items-center justify-center h-[100vh]'>
      <div className='flex items-start justify-center w-[65%] h-[100%]'>
        <div className='flex items-center justify-start w-[25%] h-[100%]'>
          <LeftSideBar />
        </div>
        <div className='flex items-center justify-center w-[55%] h-[100%] border-gray-500 border border-t-0 border-b-0'>
          <MiddleSide />
        </div>
        <div className='flex items-center justify-end w-[20%] h-[100%]'>
          <RightSideBar />
        </div>
      </div>
    </div>
  )
}

export default App