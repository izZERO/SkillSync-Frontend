import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { GetAllLessons } from "../services/lesson.js"
import { DeleteLesson } from "../services/lesson.js"
import { updateEnrollment } from "../services/enroll.js"
import { getCourseEnrolled } from "../services/enroll.js"

import Accordion from "@mui/material/Accordion"
import AccordionActions from "@mui/material/AccordionActions"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Button from "@mui/material/Button"

import Markdown from "react-markdown"

const CourseLessons = ({ courseId, user, enrollmentId }) => {
  const [lessons, setLessons] = useState(null)
  const [studentProgress, setStudentProgress] = useState("")
  let navigate = useNavigate()

  useEffect(() => {
    const getDetailsByCourse = async () => {
      const data = await GetAllLessons(courseId)

      setLessons(data)
    }
    getDetailsByCourse()
  }, [courseId])

  useEffect(() => {
    const getProgressByEnrollment = async () => {
      const data = await getCourseEnrolled(enrollmentId)
      setStudentProgress(data.progress)
    }
    getProgressByEnrollment()
  }, [enrollmentId])

  const handleDelete = async (id) => {
    await DeleteLesson(courseId, id)
    navigate("/instructorDashboard")
  }

  const handleProgress = async () => {
    if (lessons.length >= studentProgress) {
      const data = { progress: studentProgress + 1 }
      await updateEnrollment(enrollmentId, data)
      navigate("/studentDashboard")
    } else {
      console.log("Complete the Course")
    }
  }

  return (
    <>
      {lessons?.map((lesson) => (
        <Accordion key={lesson._id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <Typography component="span">{lesson.title}</Typography>
          </AccordionSummary>

          <AccordionDetails className="lesson-content-wrapper">
            <Markdown>{lesson.content}</Markdown>
          </AccordionDetails>
          {user?.role === "instructor" ? (
            <AccordionActions>
              <Link to={`/lesson/${lesson._id}/edit`}>
                <Button>Edit</Button>
              </Link>
              <Button
                onClick={() => {
                  handleDelete(lesson._id)
                }}
              >
                Delete
              </Button>
            </AccordionActions>
          ) : (
            <AccordionActions>
              <Button
                onClick={() => {
                  handleProgress()
                }}
              >
                Complete
              </Button>
            </AccordionActions>
          )}
        </Accordion>
      ))}
    </>
  )
}

export default CourseLessons
