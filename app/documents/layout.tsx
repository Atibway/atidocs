
import React from 'react'

const DocumentLayout = ({
    children
}:{
    children: React.ReactNode
}) => {
  return (
    <div className=' h-screen'>
        {children}
    </div>
  )
}

export default DocumentLayout