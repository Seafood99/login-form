import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function User() {

  const Navigate = useNavigate()

  function getTokenLocalStorage() {
    return localStorage.getItem('token')
  }

  useEffect(() => {
    // cek apakah token ada
    if (!getTokenLocalStorage()) {
      Navigate('/')
    }
    // cek apakah token benar
    fetch('https://dummyjson.com/auth/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${getTokenLocalStorage()}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === "Invalid/Expired Token!") {
          localStorage.removeItem('token')
          Navigate('/')
        }
      });
  }, [])


  return (
    <div>
      halaman users
    </div>
  )
}
