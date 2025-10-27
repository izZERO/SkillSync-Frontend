import Stack from "@mui/material/Stack"
// import SharedTabs from "../components/SharedTabs"
import { useEffect, useState } from "react"
import Course from "../components/Course"

import { fetchAllCourses } from "../services/utils"

const StudentDashboard = () => {
  const [tabValue, setTabValue] = useState("0")
  const [courses, setCourses] = useState(null)

  useEffect(() => {
    const handleCourses = async () => {
      const response = await fetchAllCourses()
      setCourses(response.data)
    }
    handleCourses()
  }, [])

  const handleTabChange = (event, newTabValue) => {
    setTabValue(newTabValue)
  }
  return (
    <>
      <Stack
        sx={{
          mt: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p className="student-catchphrase">Learn Full Stack Developement</p>
        <p className="student-catchphrase-second">
          Kickstart your career, Learn, Grow, and be what you've always wanted
          to be!
        </p>
      </Stack>

      <Stack
        direction="row"
        spacing={2}
        useFlexGap
        sx={{
          m: "0 40px",
          mt: "40px",
          flexWrap: "wrap",
        }}
      >
        {courses?.map((course) => (
          <Course key={course._id} course={course} />
        ))}
        {/* <SharedTabs tabValue={tabValue} handleTabChange={handleTabChange} /> */}
      </Stack>
    </>
  )
}

export default StudentDashboard
