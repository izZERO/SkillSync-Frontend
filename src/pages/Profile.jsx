
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Profile = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchProfile()
  }, [])

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.get('http://localhost:3001/user/', {
        headers: { Authorization: `Bearer ${token}` }
      })
      setUser(response.data)
    } catch (err) {
      setError(err.response?.data?.msg || 'Failed to fetch profile')
      console.error('Error fetching profile:', err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>
  if (!user) return <div>No user data found</div>

  return (
    <div>
      <h2>Profile</h2>

      <div>
        <img
          src={user.profilePicture || '/images/defaultpfp.svg'}
          alt={user.name}
          width="150"
          height="150"
          style={{ borderRadius: '50%' }}
        />
      </div>

      <div>
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Role:</strong> {user.role}</p>
        <p><strong>Bio:</strong> {user.bio || 'No bio provided'}</p>

      </div>

      <div>
        <button onClick={() => navigate('/update-information')}>
          Edit Profile
        </button>
        <button onClick={() => navigate('/update-password')}>
          Change Password
        </button>
      </div>
    </div>
  )
}

export default Profile
