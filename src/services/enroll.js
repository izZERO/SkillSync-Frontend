import Client from "./api"

export const getCourseEnrolled = async (id) => {
  try {
    const res = await Client.get(`/enrollments/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const updateEnrollment = async (id, data) => {
  try {
    console.log("data sent", data)

    const res = await Client.put(`/enrollments/${id}`, data)
    console.log(res.data)

    return res.data
  } catch (error) {
    throw error
  }
}
