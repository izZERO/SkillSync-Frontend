import { useEffect, useState } from "react"
import { fetchAllCourses } from "../services/utils.js"
import { Stack } from "@mui/material"
import Course from "./Course.jsx"

const AllCourses = () => {
  const [courses, setCourses] = useState(null)

  useEffect(() => {
    const handleCourses = async () => {
      const response = await fetchAllCourses()
      setCourses(response.data)
    }
    handleCourses()
  }, [])

  return (
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
    </Stack>
  )
}

export default AllCourses
