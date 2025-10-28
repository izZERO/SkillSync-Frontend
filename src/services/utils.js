import Client from "./api"

export const fetchAllCourses = async () => {
  const response = await Client.get("/courses")
  return response
}

export const fetchCurrentUserEnrollments = async () => {
  const response = await Client.get("/enrollments/currentUser")
  return response
}
