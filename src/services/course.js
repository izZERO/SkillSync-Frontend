import Client from "./api"

export const AddNewCourse = async (data) => {
  try {
    const res = await Client.post("/course", data)
    return res.data
  } catch (error) {
    throw error
  }
}
