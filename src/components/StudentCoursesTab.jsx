import { useEffect, useState } from "react"
import { fetchCurrentUserEnrollments } from "../services/utils"
import { Stack } from "@mui/material"
import Enrollment from "./Enrollment"

const StudentCoursesTab = () => {
  const [enrollments, setEnrollments] = useState(null)

  useEffect(() => {
    const handleEnrollments = async () => {
      const response = await fetchCurrentUserEnrollments()
      setEnrollments(response.data)
    }
    handleEnrollments()
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
      {enrollments?.map((enrollment) => (
        <Enrollment key={enrollment._id} enrollment={enrollment} />
      ))}
    </Stack>
  )
}

export default StudentCoursesTab
