import React from 'react'
import SelectHeader from './SelectHeader'
import SelectCard from './SelectCard'

const SelectTopic = () => {
  return (
    <div className="mx-auto px-2 md:px-48 pt-16 pb-32">
      <div className="bg-[#230F02]">
        <SelectHeader />
        <div className="w-full bg-[#230F02] rounded-bl-xl rounded-br-xl p-8 sm:p-4 md:p-4 lg:p-4 xl:p-4">
          <SelectCard />
        </div>
      </div>
    </div>

  )
}

export default SelectTopic
