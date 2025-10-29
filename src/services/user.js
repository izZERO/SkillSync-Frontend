import Client from "./api"

export const GetUserProfile = async () => {
  try {
    const res = await Client.get("/user/")
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateUserProfile = async (data) => {
  try {
    const res = await Client.put("/user/update", data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdatePassword = async (userId, data) => {
  try {
    const res = await Client.put(`/auth/update/${userId}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteUserProfile = async () => {
  try {
    const res = await Client.delete("/user/delete")
    return res.data
  } catch (error) {
    throw error
  }
}
