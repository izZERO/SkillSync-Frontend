import { useState } from "react"
import { SignInUser } from "../services/auth"
import { useNavigate, Link } from "react-router-dom"
import { BASE_URL } from "../services/api.js"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

const SignIn = ({ setUser }) => {
  const navigate = useNavigate()
  const initialState = { email: "", password: "" }

  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const userData = await SignInUser(formValues)
    setFormValues(initialState)
    setUser(userData)
    if (userData.role === "student") {
      navigate("/studentDashboard")
    } else {
      navigate("/instructorDashboard")
    }
  }

  return (
    <>
      <div className="login-container">
        <div className="login-area">
          <img
            src={`${BASE_URL}/public/images/skillsynclogo.png`}
            className="login-img"
            alt="Sign In Title Image"
          />

          <form onSubmit={handleSubmit} className="login-form">
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

            <Button
              type="submit"
              variant="outlined"
              className="login-button"
              disabled={!formValues.email || !formValues.password}
            >
              Sign In
            </Button>
          </form>
          <Link to="/register" className="auth-link">
            Don't have an account? Sign up here
          </Link>
        </div>
      </div>
    </>
  )
}

export default SignIn
