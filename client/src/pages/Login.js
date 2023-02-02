import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import { useDispatch } from 'react-redux';
// import { setLogin } from '../../state/authSlice';
import authImgMain from "../assets/AuthImageMain.svg";
import authbottom from "../assets/AuthBottom.svg";
import clouds from "../assets/Clouds.svg";
import injection from "../assets/Injection.svg";
import plus from "../assets/PlusSignsMirror.svg";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async (e) => {
    console.log("hello");
  }

  return (
    <div className="h-screen formClass overflow-y-hidden">
      <div className="flex">
        <div className="w-1/2 overflow-y-hidden">
          <img src={authImgMain} alt="alternate" className="w-full h-3/4 m-8" />
        </div>
        <div className="flex-1 h-screen w-50% justify-center content-center ml-12 z-10">
          <div className="flex flex-col w-full h-screen justify-center content-center">
            <div className="ml-4 w-[500px] bg-white h-[550px] my-auto rounded-3xl shadow-primary-sd justify-center content-center text-left overflow-y-hidden">
              <div className="p-10 ml-5">
                <p className="font-ourfont font-bold text-3xl overflow-y-hidden mt-11 text-primary-black">Log In</p>
                <p className="mt-3 font-ourfont font-normal text-sm text-subtext">New to our site?</p>
                <span className="font-ourfont font-normal text-sm text-subtext">You can </span>
                {/* {isReg ?  */}
                <button className="font-ourfont font-semibold text-sm text-ourmedpurp">Register Here!</button>
                {/* <button onClick={handleClick} className="font-ourfont font-normal text-sm text-ourmedpurp">{ifnot}</button>} */}
                <br/>
                <form className="w-full max-w-sm mt-5">
                <p className="font-medium">Email</p>
                  <div onChange={(e) => { setEmail(e.target.value) }} className="flex items-center border-b-2 border-ourmedpurp ">
                    <input className="appearance-none bg-transparent border-none w-full text-subtext mr-3 py-1 leading-tight focus:outline-none" type="text" placeholder="Enter your email address" name = "email" />                      
                  </div>
                  {/* <div className="text-[12px] text-red-600">{used}</div> */}
                <p className="font-medium mt-5">Password</p>
                  <div className="flex items-center border-b-2 border-ourmedpurp ">
                    <input onChange={(e) => { setPassword(e.target.value) }} className="appearance-none bg-transparent border-none w-full text-subtext mr-3 py-1 leading-tight focus:outline-none" type="password" placeholder="Enter your password" name="password"/>                      
                  </div>
                  <div>
                        <label  htmlFor="type"  className="font-medium mt-5 block mb-1 text-sm text-neutralSecondary">Role:</label>
                        <select type="text" name="role" id="role"  className="border-b-2 text-gray-900 text-sm rounded-sm focus:outline-none focus:border-b-buttons block w-full p-2 bg-[#F0F0F0] placeholder-[#F0F0F0] " required>
                        <option defaultValue>Choose a type</option>
                        <option value="national">User</option>
                        <option value="international">Volunteer</option>
                        <option value="international">NGO</option>
                        <option value="international">Doctor</option>
                        </select>
                    </div>
                  <div className= "mt-8">
                    <button type="submit" onClick={(e) => { loginUser(e) }} className="flex-shrink-0 bg-gradient-to-r from-btn-left to-btn-right text-sm text-white py-3 px-1 rounded-3xl w-1/2 font-medium btn-primary">
                    Sign In</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img src={authbottom} alt="bottom" className="absolute bottom-0"/>
      <img src={clouds} alt="bottom" className="absolute z-0 w-[850px] h-[340px] right-[30px] top-[20px] "/>
      <img src={injection} alt="bottom" className="absolute z-10 h-[315px] right-[485px] top-2 "/>
      <img src={plus} alt="bottom" className="absolute z-10 h-[200px] right-[180px] top-9"/>
    </div>
  )
}

export default Login