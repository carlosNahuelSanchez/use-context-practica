import React from 'react'
import { loginUsers } from '../services/login'

export const LoginForm = () => {
  return (
    <div className='bg-slate-300 flex justify-center items-center min-h-screen'>
        <form onSubmit={loginUsers}  className=' flex flex-col bg-gray-500 rounded-md justify-center p-9'>
          <label  className='mb-1' htmlFor="username">Nombre de Usuario</label>
          <input placeholder='Ingrese su e-mail' className='rounded-md p-2' type="text" name="username" id="username" />
          <label htmlFor="password" className='mt-5 mb-1'>Contraseña</label>
          <input placeholder='Ingrese su contraseña' className='rounded-md p-2' type="password" name="password" id="password" />
          <button className='bg-slate-400 mt-5 rounded-md font-semibold hover:bg-slate-300 transition-colors'>Enviar</button>
        </form>
    </div>
  )
}
