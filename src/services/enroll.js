import Client from "./api"

export const getCourseEnrolled = async (id) => {
  try {
    const res = await Client.get(`/enrollments/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const enrollmentCourse = async (data) => {
  try {
    const res = await Client.post("/enrollments", data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const updateEnrollment = async (id, data) => {
  try {
    const res = await Client.put(`/enrollments/${id}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}
