import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import SchoolIcon from "@mui/icons-material/School"
import Stack from "@mui/material/Stack"
import NumbersIcon from "@mui/icons-material/Numbers"
import SmartToyIcon from "@mui/icons-material/SmartToy"
import Avatar from "@mui/material/Avatar"
import { BASE_URL } from "../services/api"

const Course = ({ course }) => {
  let difficultyColor

  if (course.level === "Beginner") {
    difficultyColor = "success"
  } else if (course.level === "Intermediate") {
    difficultyColor = "warning"
  } else if (course.level === "Advanced") {
    difficultyColor = "error"
  }
  return (
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
          {course?.title}
        </Typography>
        <Typography
          variant="p"
          sx={{
            fontSize: "12px",
            opacity: "80%",
          }}
        >
          {course?.objective}
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
          {/* Left side - Course info */}
          <Stack
            direction="row"
            spacing={2}
            sx={{
              alignItems: "center",
            }}
          >
            <Stack
              direction="row"
              spacing={0.5}
              sx={{
                alignItems: "center",
              }}
            >
              <SchoolIcon sx={{ color: "#766de2", fontSize: "16px" }} />
              <Typography
                variant="p"
                sx={{
                  fontSize: "10px",
                }}
              >
                {course?.category}
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={0.5}
              sx={{
                alignItems: "center",
              }}
            >
              <NumbersIcon color="primary" sx={{ fontSize: "16px" }} />
              <Typography
                variant="p"
                sx={{
                  fontSize: "10px",
                }}
              >
                {`${course?.lessons.length} lessons`}
              </Typography>
            </Stack>

            <Stack
              direction="row"
              spacing={0.5}
              sx={{
                alignItems: "center",
              }}
            >
              <SmartToyIcon color={difficultyColor} sx={{ fontSize: "16px" }} />
              <Typography
                variant="p"
                sx={{
                  fontSize: "10px",
                }}
              >
                {course?.level}
              </Typography>
            </Stack>
          </Stack>

          {/* Right side - Avatar */}
          <Avatar
            src={`${BASE_URL}/${course?.instructor?.profilePicture}`}
            alt={course?.instructor?.name}
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
  )
}

export default Course
