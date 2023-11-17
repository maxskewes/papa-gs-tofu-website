import React from 'react'
import {outline} from '../fonts'

const OutlineHeading = ({children}) => {
  return (
    <div className={outline.className}>
    <p>{children}</p>
    </div>
  )
}

export default OutlineHeading