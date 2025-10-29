import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { getCourseEnrolled } from "../services/enroll.js"

import * as React from "react"
import Box from "@mui/material/Box"
import Tab from "@mui/material/Tab"
import TabContext from "@mui/lab/TabContext"
import TabList from "@mui/lab/TabList"
import TabPanel from "@mui/lab/TabPanel"
import Chip from "@mui/material/Chip"
import Button from "@mui/material/Button"

import CourseLessons from "../components/CourseLessons"

const CourseEnrollment = () => {
  const { id } = useParams()

  const [details, setDetails] = useState([])
  const [studentProgress, setStudentProgress] = useState("")
  const [value, setValue] = React.useState("1")

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  useEffect(() => {
    const getDetailsByCourse = async () => {
      const data = await getCourseEnrolled(id)
      setStudentProgress(data.progress)
      setDetails(data.courseId)
    }
    getDetailsByCourse()
  }, [id])

  return (
    <>
      <div className="course-details-page">
        <div className="course-header">
          <h1 className="course-title">{details.title}</h1>
          <div className="course-buttons"></div>
        </div>

        <h3 className="course-description">{details.objective}</h3>

        <div className="chips-container">
          <Chip className="chip-level" label={details.level} />
          <Chip label={studentProgress} />
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
              <Tab label="Content" value="2" />
              <Tab label="Rating & Review" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1" className="custom-tab-panel">
            <h5>{details.description}</h5>
          </TabPanel>
          <TabPanel value="2" className="custom-tab-panel">
            <CourseLessons
              courseId={details._id}
              enrollmentId={id}
              progress={studentProgress}
            />
          </TabPanel>
          <TabPanel value="3" className="custom-tab-panel">
            Item Three
          </TabPanel>
        </TabContext>
      </div>
    </>
  )
}

export default CourseEnrollment
