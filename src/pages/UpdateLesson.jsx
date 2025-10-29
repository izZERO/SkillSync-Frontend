import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import React from "react"
import { ShowLesson } from "../services/lesson.js"
import { EditLesson } from "../services/lesson.js"

import Button from "@mui/material/Button"
import SendIcon from "@mui/icons-material/Send"
import TextField from "@mui/material/TextField"
import MDEditor from "@uiw/react-md-editor"

import "../App.css"

const UpdateLesson = () => {
  let navigate = useNavigate()
  const { lessonId } = useParams()
  const initialState = {
    title: "",
    content: "",
    order: "",
  }

  const [formValues, setFormValues] = useState(initialState)

  useEffect(() => {
    const getALesson = async () => {
      const data = await ShowLesson(lessonId)
      setFormValues(data)
    }
    getALesson()
  }, [lessonId])

  const handleChange = (e) => {
    if (e.target.type === "number") {
      if (e.target.value > 0) {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
      }
    } else {
      setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await EditLesson(lessonId, formValues)
    setFormValues(initialState)
    navigate(`/instructorDashboard`)
  }

  return (
    <>
      <div className="add-course-container">
        <h1>Update Lesson</h1>
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
            value={formValues.content}
            onChange={(value) => {
              setFormValues({ ...formValues, content: value })
            }}
          />
          <Button variant="contained" endIcon={<SendIcon />} type="submit">
            Update Lesson
          </Button>
        </form>
      </div>
    </>
  )
}

export default UpdateLesson
