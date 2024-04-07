import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  // console.log(formData);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //setup proxy server first
    const response = await fetch("/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), //convert formdata object to json and send to server
    });

    //server respond with the readable stream data so first convert it to json before console logging
    // const data = await  response.json();
    // console.log(data)
    if (!response.ok) {
      alert("Wrong email or password!");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-3">
      <h1 className="text-center font-bold text-3xl my-7">Sign In</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          type="text"
          id="email"
          placeholder="email"
          className="border p-3 rounded-lg focus:outline-none"
          onChange={handleChange}
        />
        <input
          type="text"
          id="password"
          placeholder="Password"
          className="border p-3 rounded-lg focus:outline-none"
          onChange={handleChange}
        />

        <button className="bg-teal-800 text-white p-3 rounded-lg hover:opacity-90 disabled:opasity-70">
          Sign In
        </button>
      </form>

      <div className="flex my-5 gap-2 ">
        <p>Dont Have an account?</p>
        <Link to="/sign-up">
          <span className="text-blue-600 hover:underline">Sign up</span>
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
