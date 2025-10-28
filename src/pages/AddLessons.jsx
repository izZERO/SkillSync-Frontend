import { useState } from "react"
import { useNavigate } from "react-router-dom"
import React from "react"
import { AddNewLessons } from "../services/lesson.js"

import Button from "@mui/material/Button"
import SendIcon from "@mui/icons-material/Send"
import TextField from "@mui/material/TextField"
import MDEditor from "@uiw/react-md-editor"

import "../App.css"

const AddLessons = () => {
  let navigate = useNavigate()
  const initialState = {
    title: "",
    content: "",
    order: "",
  }

  const [formValues, setFormValues] = useState(initialState)
  const [value, setValue] = React.useState("")

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await AddNewLessons(formValues, value)
    setFormValues(initialState)
    navigate("/")
  }

  return (
    <>
      <div className="add-course-container">
        <h1>Add Lessons</h1>
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
            value={formValues.objective}
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
            Submit
          </Button>
        </form>
      </div>
    </>
  )
}

export default AddLessons
