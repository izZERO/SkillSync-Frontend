import LightRays from "../components/LightRays"
import TrueFocus from "../components/TrueFocus"
import TargetCursor from "../components/TargetCursor"
import { Link } from "react-router-dom"
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
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.2}
        distortion={0}
        className="custom-rays"
      />

      <TrueFocus
        sentence="Skill Sync"
        manualMode={false}
        blurAmount={5}
        borderColor="blue"
        animationDuration={2}
        pauseBetweenAnimations={0.5}
      />
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />

      <div className="buttons-container">
        <Link to="/register">
          <button className="cursor-target">Sign up</button>
        </Link>
        <Link to="/login">
          <button className="cursor-target">Log in</button>
        </Link>
        <Link to="/studentDashboard">
          <button className="cursor-target">Dashboard</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
