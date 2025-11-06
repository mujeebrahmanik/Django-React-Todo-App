import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Modal } from "react-bootstrap";
import axiosInstance from '../axiosinstance';

const Edit_form_modal = (props) => {
    const[category,setCategory]=useState([])
    const[formData,setFormData]=useState({})
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

        setFormData({
            title: props.todo.title,
            description: props.todo.description,
            category: props.todo.category,
            priority: props.todo.priority,
            completed: props.todo.completed
        });

        
    },[props.todo])



    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };


    const handleSubmit = async(e)=>{
        e.preventDefault()
        try {
            console.log(formData)
            const response=await axiosInstance.put(`/task/${props.todo.id}/`,formData)
            setSuccess(true)
            
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
                                <Modal.Title>Edit Todo</Modal.Title>
                            </Modal.Header>
                                <Modal.Body className='p-4'>
                                    {success&&
                                        <h5 className='text-center text-success'>Todo Edited Succefully</h5>
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
                                            <div className='my-3 inputbox'>
                                            <label htmlFor="" className='mb-2'>Completed</label>
                                            <input type='checkbox' name='completed' className='ms-2 w-5 h-5' checked={formData.completed} onChange={handleChange}/>
                                        </div>
                                        </div>
                                        
                                        <button type="submit" className='form-control btn btn-primary'>Save Changes</button>
                                    </form>
                                </Modal.Body>
                            <Modal.Footer>
                            </Modal.Footer>
                        </Modal>
    </>
  )
}

export default Edit_form_modal