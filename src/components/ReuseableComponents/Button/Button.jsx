import React from 'react';
import '../../App.css'

function Button(props) {
  return (
    <div>
        <button className={`${props.btn} btn px-4`} style={{fontSize:"13px", fontWeight:550,width:"100%",backgroundColor:`${props.bg}`,color:`${props.color}`}}>{props.name}</button>
    </div>
  )
}

export default Button