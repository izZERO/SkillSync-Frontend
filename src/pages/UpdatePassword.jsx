import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { BASE_URL } from "../services/api.js"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import { updatePassword } from "../services/auth.js"

const UpdatePassword = ({ user }) => {
  const navigate = useNavigate()
  const initialState = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  }

  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await updatePassword({
        id: user.id,
        currentPassword: formValues.currentPassword,
        newPassword: formValues.newPassword,
      })
      setFormValues(initialState)
      if (user?.role === "student") {
        navigate("/studentDashboard")
      } else {
        navigate("/instructorDashboard")
      }
    } catch (error) {
      throw error
    }
  }

  const isFormValid =
    formValues.currentPassword &&
    formValues.newPassword &&
    formValues.confirmPassword &&
    formValues.newPassword === formValues.confirmPassword

  return (
    <>
      <div className="login-container">
        <div className="login-area">
          <img
            src={`${BASE_URL}/public/images/skillsynclogo.png`}
            className="login-img"
            alt="Update Password"
          />

          <form onSubmit={handleSubmit} className="login-form">
            <TextField
              name="currentPassword"
              type="password"
              placeholder="Current Password"
              onChange={handleChange}
              value={formValues.currentPassword}
              required
              autoComplete="current-password"
              className="login-field"
            />

            <TextField
              name="newPassword"
              type="password"
              placeholder="New Password"
              onChange={handleChange}
              value={formValues.newPassword}
              required
              autoComplete="new-password"
              className="login-field"
            />

            <TextField
              name="confirmPassword"
              type="password"
              placeholder="Confirm New Password"
              onChange={handleChange}
              value={formValues.confirmPassword}
              required
              autoComplete="new-password"
              className="login-field"
            />

            <Button
              type="submit"
              variant="outlined"
              className="login-button"
              disabled={!isFormValid}
            >
              Update Password
            </Button>
          </form>
          <Link
            to={
              user?.role === "student"
                ? "/studentDashboard"
                : "/instructorDashboard"
            }
            className="auth-link"
          >
            Back to Dashboard
          </Link>
        </div>
      </div>
    </>
  )
}

export default UpdatePassword
