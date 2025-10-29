import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { GetUserProfile } from "../services/utils"
import { BASE_URL } from "../services/api"
import { Avatar, Stack, Typography, Button } from "@mui/material"
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts"
import { LockReset } from "@mui/icons-material"
import LogoutIcon from "@mui/icons-material/Logout"
import ProfileText from "../components/ProfileText"
import UpdateProfile from "../components/UpdateProfile"

const Profile = ({ handleLogOut }) => {
  const navigate = useNavigate()
  const [profile, setProfile] = useState(null)
  const [toggleModal, setToggleModal] = useState(false)

  const handleToggle = () => {
    setToggleModal(!toggleModal)
  }

  const fetchUserData = async () => {
    const response = await GetUserProfile()
    setProfile(response.data)
  }

  useEffect(() => {
    fetchUserData()
  }, [])

  return (
    <>
      <UpdateProfile
        toggleModal={toggleModal}
        handleToggle={handleToggle}
        profile={profile}
        onProfileUpdate={fetchUserData}
      />

      <Typography variant="h3" color="white" textAlign="center" mb="16px">
        Profile
      </Typography>

      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          color: "white",
          margin: "0 150px",
          padding: "30px",
          backgroundColor: "#2a3440",
          borderRadius: "16px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
          border: "1px solid rgba(118, 109, 226, 0.4)",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Stack direction="row" justifyContent="space-around" width="100%">
          {/* AVATAR SECTION */}
          <Stack direction="column" spacing={1.5} alignItems="center">
            <Avatar
              src={`${BASE_URL}/${profile?.profilePicture}`}
              alt={profile?.name}
              sx={{ width: 150, height: 150 }}
            />
            <Button
              variant="contained"
              startIcon={<ManageAccountsIcon />}
              onClick={() => handleToggle()}
              sx={{
                backgroundColor: "#4a5568",
                color: "white",
                minWidth: "100%",
                minHeight: "40px",
                borderRadius: "12px",
                fontSize: "16px",
                fontWeight: "600",
                boxShadow: "0 4px 15px rgba(74, 85, 104, 0.4)",
                border: "1px solid rgba(74, 85, 104, 0.3)",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: "#374151",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(74, 85, 104, 0.6)",
                  border: "1px solid rgba(74, 85, 104, 0.5)",
                },
                "&:active": {
                  transform: "translateY(0px)",
                },
              }}
            >
              Update Profile
            </Button>
            <Button
              variant="contained"
              startIcon={<LockReset />}
              onClick={() => navigate("/updatePassword")}
              sx={{
                backgroundColor: "#4a5568",
                color: "white",
                minWidth: "100%",
                minHeight: "40px",
                borderRadius: "12px",
                fontSize: "16px",
                fontWeight: "600",
                boxShadow: "0 4px 15px rgba(74, 85, 104, 0.4)",
                border: "1px solid rgba(74, 85, 104, 0.3)",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: "#374151",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(74, 85, 104, 0.6)",
                  border: "1px solid rgba(74, 85, 104, 0.5)",
                },
                "&:active": {
                  transform: "translateY(0px)",
                },
              }}
            >
              Update Password
            </Button>
            <Button
              variant="outlined"
              startIcon={<LogoutIcon />}
              onClick={() => {
                handleLogOut()
                navigate("/")
              }}
              sx={{
                color: "#ff6b6b",
                borderColor: "#ff6b6b",
                minWidth: "100%",
                minHeight: "40px",
                borderRadius: "12px",
                fontSize: "16px",
                fontWeight: "600",
                border: "2px solid #ff6b6b",
                backgroundColor: "rgba(255, 107, 107, 0.05)",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  backgroundColor: "rgba(255, 107, 107, 0.1)",
                  borderColor: "#ff5252",
                  color: "#ff5252",
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 25px rgba(255, 107, 107, 0.3)",
                  border: "2px solid #ff5252",
                },
                "&:active": {
                  transform: "translateY(0px)",
                },
              }}
            >
              Logout
            </Button>
          </Stack>

          {/* PROFILE INFORMATION */}
          <Stack
            spacing={3}
            sx={{
              width: "70%",
            }}
          >
            <ProfileText input={profile?.name} type={"Name"} />
            <ProfileText input={profile?.email} type={"Email"} />
            <ProfileText input={profile?.role} type={"Role"} />
            <ProfileText input={profile?.bio} type={"Bio"} />
          </Stack>
        </Stack>
      </Stack>
    </>
  )
}

export default Profile
