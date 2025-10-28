import * as React from "react"
import { Link, useNavigate } from "react-router-dom"
import { BASE_URL } from "../services/api"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import MenuItem from "@mui/material/MenuItem"
import { ExitToApp, Person } from "@mui/icons-material"

const Nav = ({ user, handleLogOut }) => {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const handleLogout = () => {
    handleLogOut()
    handleMenuClose()
    navigate("/")
  }

  return (
    <AppBar
      position="static"
      sx={{
        background: "#16232e",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box
          component={Link}
          to="/"
          sx={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <img
            src={`${BASE_URL}/public/images/skillsynclogo.png`}
            alt="SkillSync Logo"
            style={{
              width: "80px",
            }}
          />
        </Box>

        {/* Profile on the right */}
        <Box>
          {user ? (
            <>
              <IconButton onClick={handleMenuOpen} sx={{ p: 0 }}>
                <Avatar
                  src={`${BASE_URL}/${user.profilePicture}`}
                  alt={user.name || "User"}
                  sx={{ width: 36, height: 36 }}
                />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <MenuItem
                  onClick={handleMenuClose}
                  component={Link}
                  to="/profile"
                >
                  <Person sx={{ mr: 1 }} />
                  Profile
                </MenuItem>
                <MenuItem onClick={handleLogout}>
                  <ExitToApp sx={{ mr: 1 }} />
                  Logout
                </MenuItem>
              </Menu>
            </>
          ) : (
            <Button
              component={Link}
              to="/login"
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "white",
                "&:hover": {
                  borderColor: "white",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              Sign In
            </Button>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Nav
