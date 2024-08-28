import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function User() {

  const navigate = useNavigate()

  function getTokenLocalStorage() {
    return localStorage.getItem('token')
  }

  // Fungsi untuk logout dengan animasi SweetAlert
  function handleLogout() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You will be logged out!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('token')  // Hapus token dari localStorage
        Swal.fire({
          title: 'Logged out!',
          text: 'You have been logged out successfully.',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          navigate('/')  // Arahkan kembali ke halaman login
        })
      }
    })
  }

  useEffect(() => {
    // cek apakah token ada
    if (!getTokenLocalStorage()) {
      navigate('/')
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
          navigate('/')
        }
      });
  }, [navigate])

  return (
    <div>
      <h1>Halaman Users</h1>
      <button 
        onClick={handleLogout} 
        className="py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200 ease-in-out"
      >
        Logout
      </button>
    </div>
  )
}
