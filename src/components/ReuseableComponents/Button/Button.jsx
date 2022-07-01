import React from 'react'

function Button(props) {
  return (
    <div>
        <button className={`${props.btn} btn px-4 py-2`} style={{fontSize:"13px", fontWeight:550,width:"100%",backgroundColor:`${props.bg}`,color:`${props.color}`}}>{props.name}</button>
    </div>
  )
}

export default Button