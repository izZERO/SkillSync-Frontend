import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { ShowCourse } from "../services/utils.js"
import { DeleteCourse } from "../services/utils.js"

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
    await DeleteCourse(details._id)
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
            <Button
              variant="contained"
              color="error"
              onClick={() => {
                handleDelete()
              }}
            >
              Delete Course
            </Button>
          </div>
        </div>

        <h3 className="course-description">{details.objective}</h3>

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
              <Tab label="Rating & Review" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1" className="custom-tab-panel">
            <h5>{details.description}</h5>
          </TabPanel>
          <TabPanel value="2" className="custom-tab-panel">
            Item Two
          </TabPanel>
          <TabPanel value="3" className="custom-tab-panel">
            Item Three
          </TabPanel>
        </TabContext>
      </div>
    </>
  )
}

export default CourseDetails
