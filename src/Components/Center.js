import React from 'react';

const Center =(props)=>(
 <div style= {{width:"100%", height:"100%",minHeight:"4rem", display:"flex", justifyContent:"center", alignItems:"center"}}>
    {props.children}
  </div>
)

export default Center;