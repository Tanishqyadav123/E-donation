import React from 'react'
import DateTime from './DateTime/DateTime'
import './BlogComp.css'
function BlogComp({pic}) {
  return (
    <div className='BlogComp'>
      <div className="img">
        <img src={pic} alt="" />
      </div>
      <div className="Blog-dec">
        <span>Even the all-powerful Pointing has no control about</span>
      <div className='venue'>
      <DateTime text = "July 12, 2018"/>
       <DateTime text = "Admin"/>

      </div>
      </div>
    </div>
  )
}

export default BlogComp
