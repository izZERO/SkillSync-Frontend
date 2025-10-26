import { Route, Routes } from "react-router"

import "./App.css"

import Home from "./pages/Home"

function App() {
  return (
    <>
      {/* <Nav></Nav> */}
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<SignIn />}></Route>
        <Route path="/student" element={<DashboardStudent />}></Route>
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
        <Route path="/profile" element={<Profile />}></Route>
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
