import { useState } from 'react';

function Login() {

    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password:'',
      });
  return (
    <>
    <div className='flex flex-col justify-center items-center h-screen '>
        <h1>Login</h1>
    <div className='flex flex-col border border-black w-80 h-80 gap-8 '>
    <label className='w-20 text-center'>
        First name:
        <input className='border border-black w-auto ml-2'
        //   value={form.firstName}
          onChange={e => {
            setForm({
              ...form,
              firstName: e.target.value
            });
          }}
        />
      </label>
      <label className='w-20 text-center'>
        Last name:
        <input className='border border-black w-auto ml-2' 
        //   value={form.lastName}
          onChange={e => {
            setForm({
              ...form,
              lastName: e.target.value
            });
          }}
        />
      </label>
      <label className='w-20 text-center'>
        Email:
        <input className='border border-black w-auto ml-2'
        type='email'        //   value={form.email}
          onChange={e => {
            setForm({
              ...form,
              email: e.target.value
            });
          }}
        />
      </label>
      <label className='w-20 text-center'>
        Password:
        <input className='border border-black w-auto ml-2'
        type='Password'        //   value={form.email}
          onChange={e => {
            setForm({
              ...form,
              email: e.target.value
            });
          }}
        />
      </label>
      </div>
      </div>
      {/* <p>
        {form.firstName}{' '}
        {form.lastName}{' '}
        ({form.email})
      </p> */}
    </>
  )
}

export default Login