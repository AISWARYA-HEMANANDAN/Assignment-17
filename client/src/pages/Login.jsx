import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axiosInstance from '../axios/axiosInstance';
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    console.log(e.target.name, "name");
    console.log(e.target.value, "value");
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values);
    axiosInstance.post("/user/login", values).then((res) => {
      console.log(res);
      localStorage.setItem('token', res.data.token);
      navigate("/dashboard")
    }).catch((err) => {
      console.log(err);
      alert("Invalid credentials")
    })
  }
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Form className="border p-5" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={handleChange} name='email' />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={handleChange} name='password' />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </div>
  )
}

export default Login
