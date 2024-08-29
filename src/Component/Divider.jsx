import React from 'react'
import DivideSvg from '../assets/divider.svg'

const Divider = () => {
  return (
    <div className="h-auto w-full mt-14">
        <img src={DivideSvg} className="w-full" alt="divider" />
    </div>
  )
}

export default Divider