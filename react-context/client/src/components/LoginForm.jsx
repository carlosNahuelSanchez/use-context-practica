import React from 'react'

export const LoginForm = () => {
  return (
    <div className='bg-slate-300 flex justify-center items-center min-h-screen'>
        <form action="" className=' flex flex-col bg-gray-500 rounded-md justify-center p-9'>
          <label  className='mb-1' htmlFor="email">E-mail</label>
          <input placeholder='Ingrese su e-mail' className='rounded-md p-2' type="email" name="email" id="email" />
          <label htmlFor="password" className='mt-5 mb-1'>Contraseña</label>
          <input placeholder='Ingrese su contraseña' className='rounded-md p-2' type="password" name="password" id="password" />
        </form>
    </div>
  )
}
