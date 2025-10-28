import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ShowCourse } from "../services/course.js"
import { DeleteCourse } from "../services/course.js"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"

import * as React from "react"
import Box from "@mui/material/Box"
import Tab from "@mui/material/Tab"
import TabContext from "@mui/lab/TabContext"
import TabList from "@mui/lab/TabList"
import TabPanel from "@mui/lab/TabPanel"
import Chip from "@mui/material/Chip"
import Button from "@mui/material/Button"

const CourseDetails = () => {
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
    await DeleteCourse(courseId)
    navigate("/courses")
  }

  return (
    <>
      <div className="course-details-page">
        <div className="course-header">
          <h1 className="course-title">{details.title}</h1>
          <div className="course-buttons">
            <Link to={`/courses/${details._id}/edit`}>
              <Button variant="contained">Edit Course</Button>
            </Link>
            <form onSubmit={handleDelete}>
              <Button variant="contained" color="error">
                Delete Course
              </Button>
            </form>
          </div>
        </div>

        <h3 className="course-description">{details.description}</h3>

        <div className="chips-container">
          <Chip className="chip-level" label={details.level} />
          <Chip className="chip-category" label={details.category} />
        </div>

        <Button variant="contained" color="success" className="btn-enroll">
          Enroll
        </Button>

        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              className="custom-tab-list"
            >
              <Tab label="About" value="1" />
              <Tab label="Content" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1" className="custom-tab-panel">
            <h3>Learning objectives</h3>
            <h5>{details.objective}</h5>
          </TabPanel>
          <TabPanel value="2" className="custom-tab-panel">
            Item Two
          </TabPanel>
        </TabContext>
      </div>
    </>
  )
}

export default CourseDetails
