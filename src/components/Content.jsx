import React from 'react';
import InputBox from './ReuseableComponents/inputBox/InputBox';
import Button from './ReuseableComponents/Button/Button';
import asterik from '../images/asterik.svg';
import './App.css'

function Content() {
  return (
    <div className="d-flex align-items-center flex-column pt-5 p-3 p-md-5 w-100">
      <div style={{marginBottom:"50px",width:"100%"}} className="mt-3">
        <h4 className="pb-4"
          style={{ color: "#788195", fontWeight: 300, textAlign:"center" }}
        >
          ISOMORPHIC
        </h4>
        <div className="mt-3 w-100">
          <InputBox name="Username" />
          <InputBox name="Password" />
        </div>
        <div className="d-flex mt-3 w-100 align-items-center justify-content-between">
          <div className='d-flex'>
            <label htmlFor="check" style={{fontSize:"13px"}}>
            <input
              type="checkbox"
              id="check"
              name="check"
              className="form-check-input"
            />
            <span className='px-2'>Remember me</span>
            </label>
          </div>
          <Button btn="btn-primary" name="Sign in" className="sign-up"/>
        </div>
        <div
          className="d-flex align-items-center justify-content-start w-100 mt-3"
          style={{ color: "#c1c1c1c1" }}
        >
          <img src={asterik} alt="asterik" />
          <h6 className="px-2 " style={{ fontSize: "12px", margin: "0px" }}>
            username: demo password: demodemo or just click on any button
          </h6>
        </div>
      </div>
      <div style={{ borderTop: "1px dashed #d8d8d8",width:"100%", paddingTop:"40px" }}>
        <div style={{display:'flex', flexDirection:"column", height:"250px",justifyContent:"space-between",marginBottom:"40px"}}>
          <Button btn="btn-blue" name="Sign in with Facebook"/>
          <Button btn="btn-danger" name="Sign in with Google Plus"/>
          <Button btn="btn-secondary" name="Sign in with Auth0"/>
          <Button btn="btn-warning" name="Sign in with Firebase"/>
        </div>
        <div className="d-flex flex-column align-items-center pb-3 pt-3">
          <h6 style={{ fontSize: "12px",color:"#797979"}} className="password">
            Forget Password
          </h6>
          <a href="!#" style={{ textDecoration:"none", marginBottom:"50px",fontSize:"14px"}}>Create an Isomorphic account</a>
        </div>
      </div>
    </div>
  );
}

export default Content