import React, { useState } from 'react'

const BoxCard = ({result,children}) => {
    const  [show ,setShow] = useState(true);
  return (
    <div className={show ? "":"hidden"}>
    <div className={`box ${result}`}>
        {children}
      
    <button className='' onClick={()=>setShow(!show)}>Hidex</button>
    </div>
    </div>
  )
}

export default BoxCard
