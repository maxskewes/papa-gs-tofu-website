import React from 'react'

const SiteBG = ({children}) => {
  return (
    <div className='w-full h-full min-h-min bg-gradient-radial from-BGoutter via-BGinner to-BGoutter'>{children}</div>
  )
}

export default SiteBG