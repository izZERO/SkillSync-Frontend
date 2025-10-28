import { useEffect, useState } from "react"
import { fetchAllCourses } from "../services/utils.js"
import { Stack, TextField, InputAdornment } from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import Course from "./Course.jsx"

const AllCourses = () => {
  const [courses, setCourses] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const handleCourses = async () => {
      const response = await fetchAllCourses()
      setCourses(response.data)
    }
    handleCourses()
  }, [])

  const filteredCourses = courses?.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Stack sx={{ m: "20px 0" }}>
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          mt: "20px",
        }}
      >
        <TextField
          placeholder="Search courses..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          variant="outlined"
          size="small"
          sx={{
            width: "100%",
            maxWidth: "400px",
            backgroundColor: "#232830",
            borderRadius: "16px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "16px",
              color: "white",
              "& fieldset": {
                borderColor: "rgba(118, 109, 226, 0.3)",
              },
              "&:hover fieldset": {
                borderColor: "rgba(118, 109, 226, 0.6)",
              },
            },
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{ color: "white" }} />
                </InputAdornment>
              ),
            },
          }}
        />
      </Stack>

      <Stack
        direction="row"
        spacing={2}
        useFlexGap
        sx={{
          m: "0 40px",
          mt: "20px",
          flexWrap: "wrap",
        }}
      >
        {filteredCourses?.map((course) => (
          <Course key={course._id} course={course} />
        ))}
      </Stack>
    </Stack>
  )
}

export default AllCourses
