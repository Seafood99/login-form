import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

export default function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const navigate = useNavigate()

  // Fungsi untuk mendapatkan token dari localStorage
  function getTokenLocalStorage() {
    return localStorage.getItem('token')
  }

  // useEffect untuk mengecek status login saat komponen pertama kali dirender
  useEffect(() => {
    const token = getTokenLocalStorage()
    if (token) {
      // Jika token ditemukan, arahkan pengguna ke halaman users
      navigate('/users')
    }
  }, [navigate]) // Menambahkan `navigate` sebagai dependensi

  function handleLogin(e) {
    e.preventDefault()

    if (username === '' || password === '') {
      Swal.fire({
        icon: 'error',
        title: 'Login Failed',
        text: 'Username and password cannot be empty',
        confirmButtonColor: '#d63031'
      })
      return;
    }

    fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
        expiresInMins: 30,
      })
    })
      .then(res => res.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token)
          Swal.fire({
            icon: 'success',
            title: 'Login Success',
            text: 'Welcome back',
            confirmButtonColor: '#0984e3',
            timer: 1500
          }).then(() => {
            navigate('/users')
          })
        } else {
          Swal.fire({
            icon: 'error',
            title: 'Login Failed',
            text: data.message,
            confirmButtonColor: '#d63031'
          })
        }
      });
  }

  return (
    <form onSubmit={handleLogin} className='border py-6 px-8 rounded-lg shadow-lg space-y-6 bg-white max-w-sm mx-auto'>
      <h2 className='text-2xl font-bold text-gray-700 text-center'>Welcome Back</h2>

      <div className='flex flex-col'>
        <label htmlFor="username" className='text-gray-600 mb-2'>Username</label>
        <input
          className='py-2 px-4 border border-gray-300 rounded focus:outline-none focus:border-blue-400 transition duration-200 ease-in-out'
          type="text"
          id='username'
          placeholder='Enter your username'
          onInput={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>

      <div className='flex flex-col relative'>
        <label htmlFor="password" className='text-gray-600 mb-2'>Password</label>
        <input
          className='py-2 px-4 border border-gray-300 rounded focus:outline-none focus:border-blue-400 transition duration-200 ease-in-out'
          type={showPassword ? "text" : "password"}
          id='password'
          placeholder='Enter your password'
          onInput={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button
          type="button"
          className='absolute right-3 h-full mt-3 text-gray-500'
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
      </div>

      <button className='w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200 ease-in-out'>
        Login
      </button>

      <p className='text-sm text-center text-gray-500 mt-4'>
        Forgot your password? <a href="#" className='text-blue-500 hover:underline'>Reset it</a>
      </p>
    </form>
  )
}
