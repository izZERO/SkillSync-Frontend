import { TextField, InputAdornment } from "@mui/material"

import PersonIcon from "@mui/icons-material/Person"
import EmailIcon from "@mui/icons-material/Email"
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload"
import InboxIcon from "@mui/icons-material/Inbox"
const ProfileText = ({ input, type }) => {
  let icon
  let isMultiline = false

  if (type === "Name") {
    icon = <PersonIcon sx={{ color: "white" }} />
  } else if (type === "Email") {
    icon = <EmailIcon sx={{ color: "white" }} />
  } else if (type === "Role") {
    icon = <AssuredWorkloadIcon sx={{ color: "white" }} />
  } else if (type === "Bio") {
    icon = <InboxIcon sx={{ color: "white" }} />
    isMultiline = true
  }

  return (
    input && (
      <TextField
        fullWidth
        value={input}
        variant="outlined"
        label={type}
        size="medium"
        multiline={isMultiline}
        readOnly
        sx={{
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
        }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">{icon}</InputAdornment>
            ),
          },
        }}
      />
    )
  )
}

export default ProfileText
