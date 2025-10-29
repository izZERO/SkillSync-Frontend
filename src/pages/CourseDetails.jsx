import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { ShowCourse } from "../services/utils.js"
import { DeleteCourse } from "../services/utils.js"
import { enrollmentCourse } from "../services/enroll.js"

import * as React from "react"
import Box from "@mui/material/Box"
import Tab from "@mui/material/Tab"
import TabContext from "@mui/lab/TabContext"
import TabList from "@mui/lab/TabList"
import TabPanel from "@mui/lab/TabPanel"
import Chip from "@mui/material/Chip"
import Button from "@mui/material/Button"

import CourseLessons from "../components/CourseLessons.jsx"

const CourseDetails = ({ user }) => {
  const { courseId } = useParams()
  let navigate = useNavigate()

  const [details, setDetails] = useState([])
  const [value, setValue] = React.useState("1")

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    const getDetailsByCourse = async () => {
      const data = await ShowCourse(courseId)
      setDetails(data)
    }
    getDetailsByCourse()
  }, [courseId])

  const handleDelete = async () => {
    await DeleteCourse(details._id)
    navigate("/courses")
  }

  const handleEnrollment = async () => {
    const userId = user.id
    const data = { courseId, userId }
    await enrollmentCourse(data)
    navigate("/StudentDashboard")
  }

  return (
    <>
      <div className="course-details-page">
        <div className="course-header">
          <h1 className="course-title">{details.title}</h1>
          <div className="course-buttons">
            {user?.role === "instructor" ? (
              <>
                <Link to={`/courses/${details._id}/edit`}>
                  <Button variant="contained">Edit Course</Button>
                </Link>
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => {
                    handleDelete()
                  }}
                >
                  Delete Course
                </Button>
              </>
            ) : null}
            {user?.role !== "instructor" ? (
              <Button
                variant="contained"
                color="success"
                className="btn-enroll"
                onClick={() => {
                  handleEnrollment()
                }}
              >
                Enroll
              </Button>
            ) : null}
          </div>
        </div>

        <h3 className="course-description">{details.objective}</h3>

        <div className="chips-container">
          <Chip className="chip-level" label={details.level} />
          <Chip className="chip-category" label={details.category} />
        </div>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              className="custom-tab-list"
            >
              <Tab label="About" value="1" />
              {user?.role === "instructor" ? (
                <Tab label="Content" value="2" />
              ) : null}
            </TabList>
          </Box>
          <TabPanel value="1" className="custom-tab-panel">
            <h5>{details.description}</h5>
          </TabPanel>
          <TabPanel value="2" className="custom-tab-panel">
            <Link to={`/courses/${details._id}/lessons`}>
              <Button variant="contained" className="new-lessons-btn">
                Add your Lessons
              </Button>
            </Link>
            <CourseLessons courseId={details._id} user={user} />
          </TabPanel>
        </TabContext>
      </div>
    </>
  )
}

export default CourseDetails
