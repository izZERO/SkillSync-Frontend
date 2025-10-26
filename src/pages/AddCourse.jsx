import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { AddNewCourse } from "../services/course.js"

import Button from "@mui/material/Button"
import SendIcon from "@mui/icons-material/Send"
import TextField from "@mui/material/TextField"

import "../App.css"

const AddCourse = () => {
  let navigate = useNavigate()
  const initialState = {
    title: "",
    description: "",
    objective: "",
    level: "",
    category: "",
  }

  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await AddNewCourse(formValues)
    setFormValues(initialState)
    navigate("/")
  }

  return (
    <>
      <div className="add-course-container">
        <h1>Add a New Course</h1>
        <form onSubmit={handleSubmit} className="add-course-form">
          <TextField
            required
            label="Course Title"
            placeholder="Enter a Course Title"
            name="title"
            type="text"
            onChange={handleChange}
            value={formValues.title}
          />
          <TextField
            required
            label="Description"
            placeholder="Enter a description"
            name="description"
            type="text"
            multiline
            rows={4}
            onChange={handleChange}
            value={formValues.description}
          />
          <TextField
            required
            label="Objectives"
            placeholder="Enter a objectives"
            name="objective"
            type="text"
            multiline
            rows={2}
            onChange={handleChange}
            value={formValues.objective}
          />
          <TextField
            required
            label="Level"
            placeholder="Beginner, Intermediate, Advanced"
            name="level"
            type="text"
            onChange={handleChange}
            value={formValues.level}
          />
          <TextField
            required
            label="Category"
            placeholder="Enter a category"
            name="category"
            type="text"
            onChange={handleChange}
            value={formValues.category}
          />
          <Button variant="contained" endIcon={<SendIcon />}>
            Add Lessons
          </Button>
        </form>
      </div>
    </>
  )
}

export default AddCourse
