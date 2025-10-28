import * as React from "react"
import PropTypes from "prop-types"
import LinearProgress from "@mui/material/LinearProgress"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

function LinearProgressWithLabel({ value, max }) {
  let normalizedValue = (value / max) * 100
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          sx={{
            background: "linear-gradient(90deg, #0f2027, #203a43, #2c5364)",
            height: "10px",
            borderRadius: "16px",
          }}
          variant="determinate"
          value={normalizedValue}
        />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" sx={{ color: "white" }}>
          {`${value}/${max}`}
        </Typography>
      </Box>
    </Box>
  )
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
}

export default function ProgressBar({ value, max }) {
  const [progress, setProgress] = React.useState(value)

  return (
    <Box sx={{ width: "100%" }}>
      <LinearProgressWithLabel value={progress} max={max} />
    </Box>
  )
}
