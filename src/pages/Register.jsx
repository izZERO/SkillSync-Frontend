import { useState } from "react"
import { RegisterUser } from "../services/auth.js"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../services/api.js"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

const Register = () => {
  let navigate = useNavigate()
  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  }

  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser(formValues)
    setFormValues(initialState)
    navigate("/login")
  }

  return (
    <>
      <div className="login-container">
        <div className="login-area">
          <img
            src={`${BASE_URL}/public/images/skillsynclogo.png`}
            className="login-img"
          />

          <form onSubmit={handleSubmit} className="login-form">
            <TextField
              name="name"
              type="text"
              placeholder="Full Name"
              onChange={handleChange}
              value={formValues.name}
              required
              autoComplete="name"
              className="login-field"
            />

            <TextField
              name="email"
              type="email"
              placeholder="example@example.com"
              onChange={handleChange}
              value={formValues.email}
              required
              autoComplete="email"
              className="login-field"
            />

            <TextField
              name="password"
              type="password"
              placeholder="password"
              onChange={handleChange}
              value={formValues.password}
              required
              autoComplete="off"
              className="login-field"
            />

            <TextField
              name="confirmPassword"
              type="password"
              placeholder="confirm password"
              onChange={handleChange}
              value={formValues.confirmPassword}
              required
              autoComplete="off"
              className="login-field"
            />

            <Button
              type="submit"
              variant="outlined"
              className="login-button"
              disabled={
                !formValues.email ||
                !formValues.password ||
                !formValues.name ||
                formValues.password !== formValues.confirmPassword
              }
            >
              Register
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register
