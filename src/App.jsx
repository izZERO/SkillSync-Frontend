import { Route, Routes } from "react-router"

import "./App.css"

import Home from "./pages/Home"

function App() {
  ;<div style={{ width: "100%", height: "600px", position: "relative" }}>
    <Home
      raysOrigin="top-center"
      raysColor="#00ffff"
      raysSpeed={1.5}
      lightSpread={0.8}
      rayLength={1.2}
      followMouse={true}
      mouseInfluence={0.1}
      noiseAmount={0.1}
      distortion={0.05}
      className="custom-rays"
    />
  </div>
  return (
    <>
      <Nav></Nav>
      <h2>SkillSync</h2>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
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
        <Route path="/profile/password" element={<UpdatePassword />}></Route>
      </Routes>
    </>
  )
}

export default App
