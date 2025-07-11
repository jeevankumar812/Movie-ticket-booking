import React from 'react'

const BlurCircle = ({top="auto",left="auto",right="auto",bottom="auto"}) => {
  return (
    <div className="absolute -z-50 h-58 w-50 aspect-square rounded-full bg-primary/30 blur-3x1"
    style={{top: top,left: left,right: right,bottom: bottom}}>
      
    </div>
  )
}

export default BlurCircle
