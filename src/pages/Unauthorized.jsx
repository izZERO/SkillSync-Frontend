import Noise from "../components/noise/Noise"

const Unauthorized = () => {
  return (
    <div
      style={{
        width: "auto",
        height: "auto",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Noise
        patternSize={250}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={15}
      />
      <div className="text">
        <p>Unauthorized!</p>
      </div>
    </div>
  )
}

export default Unauthorized
