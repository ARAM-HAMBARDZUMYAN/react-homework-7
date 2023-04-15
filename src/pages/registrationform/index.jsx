import React, { useState } from "react";

import "./style.scss"
const RegisterUser = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "male",
    specialiist:""
  });
  const [errorText, setErrorText] = useState("");
  const [usersList, setUsersList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const createUser = () => {
    let users = JSON.parse(localStorage.getItem("users-list"));

    if (users && users.length) {
      users.push(formData);
    } else {
      users = [formData];
    }

    localStorage.setItem("users-list", JSON.stringify(users));
    setFormData({
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      password: "",
      confirmPassword: "",
      gender: "male",
      specialiist:""
    });
  };

  return (<div className="container">
  <div className="title">Registration 
  </div>
  <div className="content">
    <form >
      <div className="user-details">
        <div className="input-box">
          <span className="details">Full Name</span>
          <input type="text" name={'firstName'} placeholder="Enter your name" required onChange={handleChange} 
             value={formData.firstName}
          />
        </div>
        <div className="input-box">
          <span className="details">Username</span>
          <input type="text"  name={'lastName'} placeholder="Enter your username" required onChange={handleChange}
             value={formData.lastName}
          />
        </div>
        <div className="input-box">
          <span className="details">Email</span>
          <input type="text"  name={'email'}  placeholder="Enter your email" required onChange={handleChange}
value={formData.email}
          />
        </div>
        <div className="input-box">
          <span className="details">Age</span>
          <input type="text"   name={'age'} placeholder="Enter your number" required onChange={handleChange}
              value={formData.age}
          />
        </div>
        <div className="input-box">
          <span className="details">Password</span>
          <input type="text" name={'password'}  placeholder="Enter your password" required onChange={handleChange}
      value={formData.password}
          />
        </div>
        <div className="input-box">
          <span className="details">Confirm Password</span>
          <input type="text" name={'confirmPassword'} placeholder="Confirm your password" required onChange={handleChange}
              value={formData.confirmPassword}
          />
        </div>
      <div className="input-box">
      <label>
      <span className="details">Specialiist</span>
          <select onChange={handleChange} name="specialist" defaultValue="Select Specialist">
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="UI/UX Design">UI/UX Design</option>
          </select>
      </label>
       </div>
       <div className={`P-radioClass`}>
          <label>
            <span>Male :</span>
            <input
              onChange={handleChange}
              type="radio"
              name="gender"
              checked={formData.gender === "male"}
              value={"male"}
            />
            <span>Female :</span>
            <input
              type="radio"
              name="gender"
              checked={formData.gender === "female"}
              value={"female"}
              onChange={handleChange}
            />
          </label>
        </div>
      </div>
      </form> 
      <div className="button">
     <button onClick={createUser}>Registration</button>
      </div>
  </div>       
  <div>
</div>
</div>

  )
}

export default  RegisterUser 
