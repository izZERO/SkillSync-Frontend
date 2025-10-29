import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { GetAllLessons } from "../services/lesson.js"
import { DeleteLesson } from "../services/lesson.js"

import Accordion from "@mui/material/Accordion"
import AccordionActions from "@mui/material/AccordionActions"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import Typography from "@mui/material/Typography"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import Button from "@mui/material/Button"

import Markdown from "react-markdown"

const AllLessons = ({ courseId }) => {
  const [lessons, setLessons] = useState(null)
  let navigate = useNavigate()

  useEffect(() => {
    const getDetailsByCourse = async () => {
      const data = await GetAllLessons(courseId)
      setLessons(data)
    }
    getDetailsByCourse()
  }, [courseId])

  const handleDelete = async (id) => {
    await DeleteLesson(courseId, id)
    navigate("/instructorDashboard")
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
        </Accordion>
      ))}
    </>
  )
}

export default AllLessons
