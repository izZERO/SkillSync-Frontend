import Client from "./api"

export const fetchAllCourses = async () => {
  const response = await Client.get("/courses")
  return response
}

export const fetchCurrentUserEnrollments = async () => {
  const response = await Client.get("/enrollments/currentUser")
  return response
}

export const AddNewCourse = async (data) => {
  try {
    const res = await Client.post("/courses", data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const ShowCourse = async (courseId) => {
  try {
    const res = await Client.get(`/courses/${courseId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const EditCourse = async (courseId, formValues) => {
  try {
    const res = await Client.put(`/courses/${courseId}/edit`, formValues)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteCourse = async (courseId) => {
  try {
    const res = await Client.delete(`/courses/${courseId}`)
    return res.data
  } catch (error) {
    throw error
  }
}
