import React from 'react'

const PageContainer = ({children}) => {
  return (
    <div className='flex justify-center align-center w-full min-h-[500px] bg-transparent'>
      <div>{children}</div></div>
  )
}

export default PageContainer


