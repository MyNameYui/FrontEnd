import React from 'react'
import { CgMenuRound } from 'react-icons/cg';


const SelectHeader = () => {
  return (
    <div>
      <div className="h-16 bg-orange-600 rounded-tl-2xl rounded-tr-2xl flex justify-between items-center p-4">
        <div className="flex items-center">
          <div className="text-white text-4xl">
            <CgMenuRound />
          </div>
          <div className="text-white text-3xl pl-4">
            Topics
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectHeader
