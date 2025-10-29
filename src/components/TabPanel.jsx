import { Box } from "@mui/material"

const TabPanel = ({ children, value, index }) => {
  return value === index && <Box sx={{ mt: 2 }}>{children}</Box>
}

export default TabPanel
