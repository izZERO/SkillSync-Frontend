import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { GetAllLessons } from "../services/lesson.js"
import { updateEnrollment } from "../services/enroll.js"

import Accordion from "@mui/material/Accordion"
import AccordionActions from "@mui/material/AccordionActions"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Button from "@mui/material/Button"

import Markdown from "react-markdown"

const CourseLessons = ({ courseId, enrollmentId, progress }) => {
  const [lessons, setLessons] = useState(null)
  const [newProgress, setNewProgress] = useState(0)

  let navigate = useNavigate()

  useEffect(() => {
    const getDetailsByCourse = async () => {
      const data = await GetAllLessons(courseId)
      setLessons(data)
    }
    getDetailsByCourse()
  }, [courseId])

  const handleLesson = async () => {
    const lessonLength = lessons.length
    // const currentProgress = progress
    console.log(progress)
    const data = progress + 1
    setNewProgress(data)
    await updateEnrollment(enrollmentId, newProgress)
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
          <AccordionActions>
            <Button
              onClick={() => {
                handleLesson()
              }}
            >
              Complete
            </Button>
          </AccordionActions>
        </Accordion>
      ))}
    </>
  )
}

export default CourseLessons
