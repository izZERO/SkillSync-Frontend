import { Link } from "react-router-dom"

import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import SchoolIcon from "@mui/icons-material/School"
import Stack from "@mui/material/Stack"
import NumbersIcon from "@mui/icons-material/Numbers"
import SmartToyIcon from "@mui/icons-material/SmartToy"
import Avatar from "@mui/material/Avatar"
import { BASE_URL } from "../services/api"
import LinearWithValueLabel from "./ProgressBar"
import ProgressBar from "./ProgressBar"

const Enrollment = ({ enrollment }) => {
  return (
    <>
      <Link
        to={`/enrollments/${enrollment._id}`}
        className="link-course-details"
      >
        <Card
          sx={{
            minWidth: "275px",
            maxWidth: "500px",
            backgroundColor: "#232830",
            color: "white",
            borderRadius: "16px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
            border: "1px solid rgba(118, 109, 226, 0.2)",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "0 12px 48px rgba(0, 0, 0, 0.4)",
              border: "1px solid rgba(118, 109, 226, 0.4)",
              backgroundColor: "#2a3440",
            },
          }}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              background:
                "linear-gradient(135deg, rgba(118, 109, 226, 0.05) 0%, rgba(118, 109, 226, 0.02) 100%)",
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "700",
                mb: "10px",
              }}
            >
              {enrollment?.courseId?.title}
            </Typography>
            <Typography
              variant="p"
              sx={{
                fontSize: "12px",
                opacity: "80%",
              }}
            >
              {enrollment?.courseId?.objective}
            </Typography>

            {/* Information */}
            <Stack
              direction="row"
              sx={{
                mt: "10px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {/* Left side - Enrollment info */}

              <ProgressBar
                value={enrollment?.progress}
                max={enrollment?.courseId?.lessons.length}
              />

              {/* Right side - Avatar */}
              <Avatar
                src={`${BASE_URL}/${enrollment?.courseId?.instructor?.profilePicture}`}
                alt={enrollment?.courseId?.instructor?.name}
                sx={{
                  width: 40,
                  height: 40,
                  border: "2px solid rgba(118, 109, 226, 0.3)",
                  boxShadow: "0 4px 16px rgba(118, 109, 226, 0.2)",
                }}
              />
            </Stack>
          </CardContent>
        </Card>
      </Link>
    </>
  )
}

export default Enrollment
