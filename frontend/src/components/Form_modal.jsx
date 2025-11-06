import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Modal } from "react-bootstrap";
import axiosInstance from '../axiosinstance';

const Form_modal = (props) => {
    const[category,setCategory]=useState([])
    const[formData,setFormData]=useState({
        title:"",
        description:"",
        category:"",
        priority:"medium",
    })
    const[success,setSuccess]=useState(false)

    useEffect(()=>{
        const fetchCategory = async()=>{
            try {
                const response = await axiosInstance.get('/category/')
                setCategory(response.data)
            } catch (error) {
                console.log(error)
            }
        }

        fetchCategory()
    },[])

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            console.log(formData)
            const response=await axiosInstance.post('/task/',formData)
            setSuccess(true)
            setFormData({title:"",
                description:"",
                category:"",
                priority:"medium"
            })
            setTimeout(()=>{
                setSuccess(false)
            },3000)

            if(props.refresh){
                props.refresh();
            }
            
        } catch (error) {
            console.error(error)
            setSuccess(false)
        }
    }
  return (
    <>
        <Modal show={props.show} onHide={props.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Todo</Modal.Title>
                    </Modal.Header>
                        <Modal.Body className='p-4'>
                            {success&&
                                <h5 className='text-center text-success'>Todo Added Succefully</h5>
                            }
                            <form action="" method="post" onSubmit={handleSubmit}>
                                <div className='my-3 inputbox'>
                                    <label htmlFor="" className='mb-2'>Title</label><br />
                                    <input type="text"  className='form-control' name='title' value={formData.title} onChange={handleChange} required/>
                                </div>
                                <div className='my-3 inputbox'>
                                    <label htmlFor="" className='mb-2'>Description</label><br />
                                    <textarea  className='form-control' name='description' value={formData.description} onChange={handleChange} required/>
                                </div>
                                <div className="row mb-4">
                                    <div className='col-6 inputbox'>
                                    <label htmlFor="" className='mb-2'>Category</label><br />
                                        <select  className='form-control' name='category' value={formData.category} onChange={handleChange} required>
                                           <option value="" disabled>
                                                Choose Category
                                            </option>

                                            {category.map((i)=>
                                                <option value={i.id} key={i.id}>{i.title}</option>
                                            )}
                                        </select>
                                    </div>
                                    <div className='col-6 inputbox'>
                                        <label htmlFor="" className='mb-2'>Priority</label><br />
                                        <select  className='form-control' name='priority' value={formData.priority} onChange={handleChange} required>
                                           
                                            <option value="low">Low</option>
                                            <option value="medium">Medium</option>
                                            <option value="high">High</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <button type="submit" className='form-control btn btn-primary'>Add Todo</button>
                            </form>
                        </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
    </>
  )
}

export default Form_modal