import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { EditCourse } from "../services/course.js"
import { ShowCourse } from "../services/course.js"

import SendIcon from "@mui/icons-material/Send"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"

const UpdateCourse = () => {
  const { courseId } = useParams()
  let navigate = useNavigate()

  const initialState = {
    title: "",
    description: "",
    objective: "",
    level: "",
    category: "",
  }
  const [formValues, setFormValues] = useState(initialState)
  useEffect(() => {
    const updateCourse = async () => {
      const data = await ShowCourse(courseId)
      setFormValues(data)
    }
    updateCourse()
  }, [courseId])

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    await EditCourse(courseId, formValues)
    setFormValues(initialState)
    navigate(`/courses/${courseId}`)
  }

  return (
    <>
      <div className="add-course-container">
        <h1>Add a New Course</h1>
        <form onSubmit={handleSubmit} className="add-course-form">
          <TextField
            required
            label="Course Title"
            name="title"
            type="text"
            onChange={handleChange}
            value={formValues.title}
          />
          <TextField
            required
            label="Description"
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
            name="level"
            type="text"
            onChange={handleChange}
            value={formValues.level}
          />
          <TextField
            required
            label="Category"
            name="category"
            type="text"
            onChange={handleChange}
            value={formValues.category}
          />
          <Button variant="contained" endIcon={<SendIcon />} type="submit">
            Update Course
          </Button>
        </form>
      </div>
    </>
  )
}

export default UpdateCourse
