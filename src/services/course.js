import Client from "./api"

export const AddNewCourse = async (data) => {
  try {
    const res = await Client.post("/courses", data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetAllCourse = async () => {
  try {
    const res = await Client.get("/courses")
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

export const EditCourse = async (courseId) => {
  try {
    const res = await Client.put(`/courses/${courseId}/edit`)
    return res.data
  } catch (error) {
    throw error
  }
}
