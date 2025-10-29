import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import React from "react"
import { AddNewLessons } from "../services/lesson.js"
import { EditCourse } from "../services/utils.js"
import { ShowCourse } from "../services/utils.js"

import Button from "@mui/material/Button"
import SendIcon from "@mui/icons-material/Send"
import TextField from "@mui/material/TextField"
import MDEditor from "@uiw/react-md-editor"

import "../App.css"

const AddLesson = () => {
  let navigate = useNavigate()
  const { courseId } = useParams()
  const initialState = {
    title: "",
    content: "",
    order: "",
  }

  const [formValues, setFormValues] = useState(initialState)
  const [details, setDetails] = useState([])
  const [value, setValue] = React.useState("")

  const handleChange = (e) => {
    if (e.target.type === "number" && e.target.value > 0) {
      setFormValues({ ...formValues, [e.target.name]: e.target.value })
    } else {
      setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }
  }
  useEffect(() => {
    const getDetailsByCourse = async () => {
      const data = await ShowCourse(courseId)
      setDetails(data)
    }
    getDetailsByCourse()
  }, [courseId])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = { ...formValues, content: value }
    const lessonId = await AddNewLessons(courseId, data)
    const currentLessons = details.lessons
    await EditCourse(courseId, { lessons: [...currentLessons, lessonId] })
    setFormValues(initialState)
    navigate("/instructorDashboard")
  }

  return (
    <>
      <div className="add-course-container">
        <h1>Add a New Lesson</h1>
        <form onSubmit={handleSubmit} className="add-course-form">
          <TextField
            required
            label="Lesson Title"
            placeholder="Enter a clear lesson title"
            name="title"
            type="text"
            onChange={handleChange}
            value={formValues.title}
          />
          <TextField
            required
            label="Order"
            placeholder="set a order of lesson"
            name="order"
            type="number"
            onChange={handleChange}
            value={formValues.order}
          />
          <MDEditor
            name="content"
            required
            value={value}
            onChange={setValue}
            textareaProps={{
              placeholder: "Please enter Markdown text",
            }}
          />
          <Button variant="contained" endIcon={<SendIcon />} type="submit">
            Add Lesson
          </Button>
        </form>
      </div>
    </>
  )
}

export default AddLesson
