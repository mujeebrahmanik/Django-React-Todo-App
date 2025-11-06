import React, { useContext, useState } from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const Login = () => {
    const[formData,setFormData]=useState({
        username:"",password:""
    })
    const[loading,setLoading]=useState(false)
    const[error,setError]=useState("")
    const navigate=useNavigate()
    const {isLoggedIn,setIsLoggedIn}=useContext(AuthContext)

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        setLoading(true)

        try {
            const response=await axios.post('http://localhost:8000/token/',formData)
            setError("")
            setFormData({username:"",password:""})
            localStorage.setItem('accessToken',response.data.access)
            localStorage.setItem('refreshToken',response.data.refresh)
            navigate("/todo")
            setIsLoggedIn(true)
            
        } catch (error) {
            setError("Invalid Credentials : User not found")
            
        }finally{
            setLoading(false)
        }
    }
  return (
    <>
        <div className="container py-5 d-flex justify-content-center align-items-center vh-100">
                <div className='col-12 py-5'>
                        <h1 className='text-center fw-bold'>Welcome Back</h1>
                        <h6 className="text-center text-secondary">Sign-in to continue</h6>
                        {error && 
                            <>
                                <h5 className="text-danger text-center my-4">{error}</h5>
                            </>
                        }
                    <div className="col-4 offset-4">
                        <form action="" method="post" onSubmit={handleSubmit}>
                                        <div className='my-3 inputbox'>
                                            <label htmlFor="">Username</label><br />
                                            <input type="text"  className='form-control' name='username' value={formData.username} onChange={handleChange} required/>
                                        </div>
                                        <div className='my-3 inputbox'>
                                            <label htmlFor="">Password</label><br />
                                            <input type="password"  className='form-control' name='password' value={formData.password} onChange={handleChange} required/>
                                        </div>
                                        
                                        {loading?(
                                            <button type="submit" className='form-control btn btn-primary' disabled><FontAwesomeIcon icon={faSpinner} /> Logging in</button>

                                        ):(
                                            <button type="submit" className='form-control btn btn-primary'>Sign in</button>

                                        )}
                                        
                                        <div className="row pt-3">
                                            <div className="text-center">Create new account ? <Link to='/register'>Sign up</Link></div>
                                            
                                        </div>  
                                    </form>
                    </div>
            </div>
           
        </div>
    </>
  )
}

export default Login