import React from 'react'
import DivideSvg from '../assets/divider.svg'

const Divider = () => {
  return (
    <div className="h-4 w-full">
        <img src={DivideSvg} className="w-full" alt="divider" />
    </div>
  )
}

export default Divider