import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./mix.css";
import apiURL from "../config";

const Register = () => {
  const api = apiURL.url;
  const pageNavigate = useNavigate();
  const [sendData, setSendData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: ""
  });

  const changeData = (e) => {
    setSendData({
      ...sendData,
      [e.target.name]: e.target.value
    });
  };
  console.log(sendData);

  const submitToRegister = async (e) => {
    e.preventDefault();

    const { name, email, password, cpassword } = sendData;

    if (!name || !email || !password || !cpassword) {
      alert("Please enter all fields");
    } else if (!email.includes("@")) {
      alert("Emial invaled Eg abc@gmail.com");
    } else if (password.length < 6 || cpassword.length < 6) {
      alert("Please enter password and confirm password must be 6");
    } else if (password !== cpassword) {
      alert("Password and confirm password not matched");
    } else {
      console.log("reg");
      const data = await fetch(`${api}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(sendData)
      });
      const res = await data.json();
        console.log(res);
    //   if (res.status === 201) {
    //     alert("User Already Exist");
    //     pageNavigate("/");
    //   } else if (res.status === 202) {
    //     console.log(res);
    //     pageNavigate("/");
    //   }
    }
  };

  return (
    <>
      <div className="reg">
        <div className="regCon">
          <div className="form">
            <h1>Welcome to Register</h1>
          </div>
          <div className="form">
            <label htmlFor="name">Name</label>
            <br />
            <input
              type="text"
              name="name"
              value={sendData.name}
              onChange={changeData}
              placeholder="Enter name here ..."
            />
          </div>
          <div className="form">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="email"
              name="email"
              value={sendData.email}
              onChange={changeData}
              placeholder="Enter email here ..."
            />
          </div>
          <div className="form">
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              name="password"
              value={sendData.password}
              onChange={changeData}
              placeholder="Enter password here ..."
            />
          </div>
          <div className="form">
            <label htmlFor="cpassword">Confirm Password</label>
            <br />
            <input
              type="password"
              name="cpassword"
              value={sendData.cpassword}
              onChange={changeData}
              placeholder="Enter confirm password here ..."
            />
          </div>
          <div className="form">
            <button onClick={submitToRegister}>Register</button>
          </div>
          <div className="form">
            <p>
              I have already account ? <NavLink to={"/"}>Login</NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
