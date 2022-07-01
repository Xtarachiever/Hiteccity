import React from 'react'

function InputBox(props) {
  return (
    <div className="mt-3">
        <input type="text" style={{fontSize:'13px', color:'#ced4da', padding:"12px",opacity:"50%"}} placeholder={props.name} className="form-control"/>
    </div>
  )
}

export default InputBox