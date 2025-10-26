import "./App.css"

import Home from "./pages/Home"

function App() {
  ;<div style={{ width: "100%", height: "600px", position: "relative" }}>
    <Home
      raysOrigin="top-center"
      raysColor="#00ffff"
      raysSpeed={1.5}
      lightSpread={0.8}
      rayLength={1.2}
      followMouse={true}
      mouseInfluence={0.1}
      noiseAmount={0.1}
      distortion={0.05}
      className="custom-rays"
    />
  </div>
  return (
    <>
      <p>SkillSync</p>
    </>
  )
}

export default App
