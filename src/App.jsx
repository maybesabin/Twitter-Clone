import React from 'react'
import LeftSideBar from './components/LeftSideBar'
import RightSideBar from './components/RightSidebar'
import MiddleSide from './components/MiddleSide'

const App = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='flex items-start justify-center w-[1300px] h-[100vh] relative'>
        <div className='flex items-center justify-start w-[260px] h-[100vh] fixed left-[20rem] '>
          <LeftSideBar />
        </div>
        <div className='flex items-center justify-center w-[700px] h-[100%] bg-black border-gray-500 border border-t-0 border-b-0'>
          <MiddleSide />
        </div>
        <div className='flex items-center justify-end w-[260px] fixed right-[20rem] h-[100%]'>
          <RightSideBar />
        </div>
      </div>
    </div>
  )
}

export default App