import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axiosInstance from '../axiosinstance'


const Register = () => {
    const[formData,setFormData]=useState({
            username:"",password:"",email:""
        })
    
        const handleChange=(e)=>{
            setFormData({...formData,[e.target.name]:e.target.value})
    
        }

        const [error,setError] =useState({})

        const navigate=useNavigate()
    
        const handleSubmit= async (e)=>{
            e.preventDefault()
            try {
                const response = await axiosInstance.post('/register/',formData);
                navigate('/')
            } catch (error) {
                setError(error.response.data)
                console.log(error)
            }
    
        }
  return (
    <>
        <div className="container py-5 d-flex justify-content-center align-items-center vh-100">

            <div className='col-12 py-5'>
                        <h1 className='text-center mb-4 fw-bold'>Create new account</h1>

                    <div className="col-md-4 offset-md-4">
                        <form action="" method="post" onSubmit={handleSubmit}>
                                        <div className='my-3 inputbox'>
                                            <label htmlFor="" className='mb-2'>Username</label><br />
                                            <input type="text"  className='form-control' name='username' value={formData.username} onChange={handleChange} required/>
                                            {error.username && <p className='text-danger py-2'>{error.username[0]}</p>}

                                        </div>
                                        <div className='my-3 inputbox'>
                                            <label htmlFor="" className='mb-2'>Email</label><br />
                                            <input type="email"  className='form-control' name='email' value={formData.email} onChange={handleChange} required/>
                                            {error.email && <p className='text-danger py-2'>{error.email[0]}</p>}

                                        </div>
                                        <div className='my-3 inputbox'>
                                            <label htmlFor="" className='mb-2'>Password</label><br />
                                            <input type="password"  className='form-control' name='password' value={formData.password} onChange={handleChange} required/>
                                            {error.password && <p className='text-danger py-2'>{error.password[0]}</p>}

                                        </div>
                                        
                                        
                                        <button type="submit" className='form-control btn btn-primary'>Sign up</button>
                                        <div className="row pt-3">
                                            <div className="text-center">Already have account ? <Link to='/'>Login</Link></div>
                                        </div>
                                    </form>
                    </div>
            </div>
        </div>
    </>
  )
}

export default Register