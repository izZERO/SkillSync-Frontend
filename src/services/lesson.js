import Client from "./api"

export const AddNewLessons = async (courseId, data) => {
  try {
    const res = await Client.post(`/courses/${courseId}/lessons`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetAllLessons = async (courseId) => {
  try {
    const res = await Client.get(`/courses/${courseId}/lessons`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteLesson = async (courseId, lessonId) => {
  try {
    const res = await Client.delete(`/courses/${courseId}/lessons/${lessonId}`)
    return res.data
  } catch (error) {
    throw error
  }
}
