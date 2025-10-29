import { useEffect, useState } from "react"
import { Route, Routes, useNavigate } from "react-router"
import { CheckSession } from "./services/auth"

import Nav from "./components/Nav"

import Unauthorized from "./pages/Unauthorized"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Home from "./pages/Home"
import AddCourse from "./pages/AddCourse"
import CourseDetails from "./pages/CourseDetails"
import UpdateCourse from "./pages/UpdateCourse.jsx"
import StudentDashboard from "./pages/StudentDashboard"
import InstructorDashboard from "./pages/InstructorDashboard"
import AddLesson from "./pages/AddLesson"
import UpdateLesson from "./pages/UpdateLesson"
import "./App.css"

const App = () => {
  const [user, setUser] = useState(null)

  let navigate = useNavigate()
  const handleLogOut = () => {
    // Resets all auth related state and clears localStorage
    setUser(null)
    localStorage.clear()
  }

  useEffect(() => {
    const checkToken = async () => {
      const userData = await CheckSession()
      setUser(userData)
    }
    const token = localStorage.getItem("token")

    if (token) {
      checkToken()
    }
  }, [])

  return (
    <>
      {user ? <Nav user={user} handleLogOut={handleLogOut} /> : null}
      <main>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/studentDashboard"
            element={
              user?.role === "student" ? <StudentDashboard /> : <Unauthorized />
            }
          />
          <Route
            path="/instructorDashboard"
            element={
              user?.role === "instructor" ? (
                <InstructorDashboard />
              ) : (
                <Unauthorized />
              )
            }
          />
          <Route path="/addcourse" element={<AddCourse />} />
          <Route
            path="/courses/:courseId"
            element={<CourseDetails user={user} />}
          />
          <Route path="/courses/:courseId/edit" element={<UpdateCourse />} />
          <Route path="/courses/:courseId/lessons" element={<AddLesson />} />
          <Route path="/lesson/:lessonId/edit" element={<UpdateLesson />} />
          {/*<Route path="/profile" element={<Profile />}></Route>
          <Route
            path="/profile/information"
            element={<UpdateInformation />}
          ></Route>
          <Route path="/profile/password" element={<UpdatePassword />}></Route> */}
        </Routes>
      </main>
    </>
  )
}

export default App
