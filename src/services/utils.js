import Client from "./api"

export const fetchAllCourses = async () => {
  const response = await Client.get("/courses")
  return response
}
