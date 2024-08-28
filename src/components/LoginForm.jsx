import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

export default function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const Navigate = useNavigate()

  function handleLogin(e) {
    e.preventDefault()
    // alert(`Username: ${username}\nPassword: ${password}`)

    // validate username dan password
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
        expiresInMins: 30, // optional, defaults to 60
      })
    })
      .then(res => res.json())
      .then((data) => {


        if (data.token) {
          // save token to local storage
          localStorage.setItem('token', data.token)

          // show alert
          Swal.fire({
            icon: 'success',
            title: 'Login Success',
            text: 'Welcome back',
            confirmButtonColor: '#0984e3',
            timer: 1500
          }).then(() => {

            // redirect to home page
            Navigate('/users')

          })
        } else {
          // show alert
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

      <div className='flex flex-col'>
        <label htmlFor="password" className='text-gray-600 mb-2'>Password</label>
        <input
          className='py-2 px-4 border border-gray-300 rounded focus:outline-none focus:border-blue-400 transition duration-200 ease-in-out'
          type="password"
          id='password'
          placeholder='Enter your password'
          onInput={(e) => setPassword(e.target.value)}
          value={password}
        />
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
