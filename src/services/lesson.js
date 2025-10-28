import Client from "./api"

export const AddNewLessons = async (formValues, value) => {
  try {
    const res = await Client.post(
      `/courses/:${courseId}/lessons`,
      formValues,
      value
    )
    return res.data
  } catch (error) {
    throw error
  }
}
