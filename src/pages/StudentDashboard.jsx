import Stack from "@mui/material/Stack"
import { Tabs, Tab } from "@mui/material"
import TabPanel from "../components/TabPanel"
import { useState } from "react"
import StudentCoursesTab from "../components/StudentCoursesTab"
import AllCourses from "../components/AllCoursesTab"

const StudentDashboard = () => {
  const [tab, setTab] = useState(0)

  const handleTabChange = (event, newTab) => {
    setTab(newTab)
  }

  return (
    <>
      <Stack
        sx={{
          mt: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p className="student-catchphrase">Learn Full Stack Development</p>
        <p className="student-catchphrase-second">
          Kickstart your career, Learn, Grow, and be what you've always wanted
          to be!
        </p>
      </Stack>
      <Tabs
        variant="standard"
        value={tab}
        onChange={handleTabChange}
        sx={{
          width: "fit-content",
          m: " 0px 40px",
          mt: "40px",
          border: "2px solid rgba(118, 109, 226, 0.2)",
          borderRadius: "10px",
        }}
      >
        <Tab
          label="My Courses"
          sx={{
            color: "white",
          }}
        />
        <Tab
          label="All Courses"
          sx={{
            color: "white",
          }}
        />
      </Tabs>

      <TabPanel value={tab} index={0}>
        <StudentCoursesTab />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <AllCourses />
      </TabPanel>
    </>
  )
}

export default StudentDashboard
