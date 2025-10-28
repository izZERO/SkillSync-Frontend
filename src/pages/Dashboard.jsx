import { Link } from "react-router-dom"

const Dashboard = ({ courses }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      {courses.map((course) => (
        <div className="card" key={course._id}>
          <h3>{course.title}</h3>
          <h3>{course.description}</h3>
          <h3>{course.level}</h3>
          <Link to={`/courses/${course._id}`}>
            <button>More Details</button>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default Dashboard
