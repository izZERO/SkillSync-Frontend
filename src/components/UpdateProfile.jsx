import { useState, useEffect } from "react"
import {
  Modal,
  Typography,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Stack,
  Button,
} from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import PersonIcon from "@mui/icons-material/Person"
import EmailIcon from "@mui/icons-material/Email"
import InboxIcon from "@mui/icons-material/Inbox"

import { updateProfile } from "../services/utils"

const UpdateProfile = ({
  toggleModal,
  handleToggle,
  profile,
  onProfileUpdate,
}) => {
  const [formData, setFormData] = useState({
    name: profile?.name,
    email: profile?.email,
    bio: profile?.bio,
  })

  useEffect(() => {
    if (profile) {
      setFormData({
        name: profile.name,
        email: profile.email,
        bio: profile.bio,
      })
    }
  }, [profile])

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await updateProfile(formData)
      onProfileUpdate()
      handleToggle()
    } catch (error) {
      throw error
    }
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "#2a3440",
    border: "1px solid rgba(118, 109, 226, 0.4)",
    borderRadius: "12px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
    p: 4,
  }

  const textFieldStyle = {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#232830",
      color: "white",
      borderRadius: "12px",
      "& fieldset": {
        borderColor: "rgba(118, 109, 226, 0.3)",
      },
      "&:hover fieldset": {
        borderColor: "rgba(118, 109, 226, 0.6)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#766de2",
      },
    },
    "& .MuiInputLabel-root": {
      color: "rgba(255, 255, 255, 0.7)",
      "&.Mui-focused": {
        color: "#766de2",
      },
    },
  }

  return (
    <Modal
      open={toggleModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            color="white"
          >
            Update Profile
          </Typography>
          <IconButton onClick={handleToggle} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              variant="outlined"
              size="medium"
              value={formData.name}
              onChange={handleInputChange}
              sx={textFieldStyle}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon sx={{ color: "white" }} />
                    </InputAdornment>
                  ),
                },
              }}
            />

            <TextField
              fullWidth
              label="Email"
              name="email"
              variant="outlined"
              size="medium"
              value={formData.email}
              onChange={handleInputChange}
              sx={textFieldStyle}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon sx={{ color: "white" }} />
                    </InputAdornment>
                  ),
                },
              }}
            />

            <TextField
              fullWidth
              label="Bio"
              name="bio"
              variant="outlined"
              size="medium"
              multiline
              rows={4}
              value={formData.bio}
              onChange={handleInputChange}
              sx={textFieldStyle}
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <InboxIcon sx={{ color: "white" }} />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Stack>

          <Stack mt={3} justifyContent="flex-end">
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "#4a5568",
                color: "white",
                minWidth: "120px",
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
              Update
            </Button>
          </Stack>
        </form>
      </Box>
    </Modal>
  )
}

export default UpdateProfile
