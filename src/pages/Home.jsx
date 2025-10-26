import LightRays from "../components/LightRays"
import TrueFocus from "../components/TrueFocus"
import TargetCursor from "../components/TargetCursor"
import "../App.css"

const Home = () => {
  return (
    <div className="section-home">
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffffff"
        raysSpeed={1}
        lightSpread={0.5}
        rayLength={3}
        followMouse={false}
        mouseInfluence={0.1}
        noiseAmount={0}
        distortion={0}
        className="custom-rays"
      />

      <TrueFocus
        sentence="Skill Sync"
        manualMode={false}
        blurAmount={5}
        borderColor="blue"
        animationDuration={2}
        pauseBetweenAnimations={1}
      />
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />

      <div className="buttons-container">
        <button className="cursor-target">Sign up</button>
        <button className="cursor-target">Log in</button>
      </div>
    </div>
  )
}

export default Home
