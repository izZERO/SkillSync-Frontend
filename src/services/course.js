import Client from "./api"

export const AddNewCourse = async (data) => {
  try {
    const res = await Client.post("/courses", data)
    return res.data
  } catch (error) {
    throw error
  }
}
