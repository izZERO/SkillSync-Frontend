import { useEffect, useState } from "react"
import { Route, Routes } from "react-router"
import { CheckSession } from "./services/auth"
import Nav from "./components/Nav"
import Profile from "./pages/Profile"
import Register from "./pages/Register"
import Login from "./pages/Login"

import "./App.css"

const App = () => {
  const [user, setUser] = useState(null)

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
      <Nav user={user} handleLogOut={handleLogOut} />
      <main>
        <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login setUser={setUser}/>}></Route>
        {/* <Route path="/student" element={<DashboardStudent />}></Route>
        <Route path="/instructor" element={<DashboardInstructor />}></Route>
        <Route path="/course/:courseId" element={<CourseDetails />}></Route>
        <Route path="/addcourse" element={<AddCourse />}></Route>
        <Route
          path="/course/:courseId/update"
          element={<UpdateCourse />}
        ></Route>
        <Route path="/addlessons" element={<AddLessons />}></Route>
        <Route
          path="/lesson/:lessonId/update"
          element={<UpdateLesson />}
        ></Route>
        <Route path="/profile" element={<Profile />}></Route> */}
        <Route path="/profile" element={<Profile />}></Route>
        {/* <Route
          path="/profile/information"
          element={<UpdateInformation />}
        ></Route> */}
        {/* <Route path="/profile/password" element={<UpdatePassword />}></Route> */}
      </Routes>
      </main>
    </>

  )
}

export default App
