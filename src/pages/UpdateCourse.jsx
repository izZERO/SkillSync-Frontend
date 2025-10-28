import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { EditCourse } from "../services/course.js"

import SendIcon from "@mui/icons-material/Send"
import TextField from "@mui/material/TextField"

const UpdateCourse = () => {
  const { courseId } = useParams()

  const [values, setValues] = useState([])
  useEffect(() => {
    const updateCourse = async () => {
      const data = await EditCourse(courseId)
      setValues(data)
    }
    updateCourse()
  }, [courseId])
  return (
    <>
      <h1>Update</h1>
    </>
  )
}

export default UpdateCourse
