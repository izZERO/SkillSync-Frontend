import { fetchInstructorCourses } from "../services/utils"
import { useEffect, useState } from "react"
import { Stack, Card, CardContent, Box, Typography } from "@mui/material"
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline"
import { useNavigate } from "react-router-dom"
import Course from "../components/Course"

const InstructorDashboard = () => {
  const [courses, setCourses] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const handleCourses = async () => {
      const response = await fetchInstructorCourses()
      setCourses(response.data)
    }
    handleCourses()
  }, [])

  const handleAddCourse = () => {
    navigate("/addcourse")
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
        <p className="student-catchphrase">Courses You've Made</p>
        <p className="student-catchphrase-second">
          Add | Edit your Courses below!
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
        {/* Add Course Card */}
        <Card
          onClick={handleAddCourse}
          sx={{
            minWidth: "275px",
            maxWidth: "500px",
            height: "200px",
            backgroundColor: "transparent",
            border: "2px dashed rgba(118, 109, 226, 0.5)",
            borderRadius: "16px",
            cursor: "pointer",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              border: "2px dashed rgba(118, 109, 226, 0.8)",
              backgroundColor: "rgba(118, 109, 226, 0.05)",
              transform: "translateY(-2px)",
            },
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              padding: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                opacity: 0.7,
              }}
            >
              <AddCircleOutlineIcon
                sx={{
                  fontSize: "48px",
                  color: "#766de2",
                  mb: "12px",
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: "#766de2",
                  fontWeight: "700",
                  textAlign: "center",
                }}
              >
                Add New Course
              </Typography>
            </Box>
          </CardContent>
        </Card>

        {/* Existing Course Cards */}
        {courses?.map((course) => (
          <Course key={course._id} course={course} />
        ))}
      </Stack>
    </>
  )
}

export default InstructorDashboard
