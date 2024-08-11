import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import Login from './Login';



function Signup() {
  const {
    register,
    handleSubmit,
 
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <>
     <div className="flex h-screen item-center justify-center " >
     <div id="" className="w-[600px]">
  <div className="modal-box ">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
  
    <h3 className="font-bold text-lg">Sign up</h3>
    <div className='mt-4 space-y-2'>
        <span>Name</span>
        <br />
        <input type="text" 
        placeholder='Enter your full name'
        className='w-80 px-3 py-1 border rounded-md outline-none'
        {...register("Name", { required: true })}
        />
         <br />
        {errors.Name && <span className='text-sm text-red-500'>
          This field is required</span>}

    </div>
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br />
        <input type="Email" 
        placeholder='Enter your email'
        className='w-80 px-3 py-1 border rounded-md outline-none'
        {...register("Email", { required: true })}
        />
         <br />
        {errors.Email && <span className='text-sm text-red-500'>
          This field is required</span>}

    </div>
    {/* Password */}
    <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br />
        <input type="Password" 
        placeholder='Enter your password'
        className='w-80 px-3 py-1 border rounded-md outline-none'
        {...register("Password", { required: true })}
        />
         <br />
        {errors.Password && <span className='text-sm text-red-500'>
          This field is required</span>}

    </div>
    {/*Button */}
    <div className='flex mt-4 justify-between'>
        <button className='bg-pink-500 text-white rounded md px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>
            <p className='text-xl'>
            Have Account ? {" "}
            <button 
            className='underline text-blue-500 cursor-pointer'
            onClick={()=>{
                document.getElementById("my_modal_3").showModal();
            }
        }
            
            >
            Login
            </button>{" "}
            <Login />
        </p>
    </div>
    </form>
  </div>
</div>
     </div>
    </>
  )
}

export default Signup
