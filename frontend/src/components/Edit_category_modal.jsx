import React, { useEffect, useState } from 'react'
import { Button, Modal } from "react-bootstrap";
import axiosInstance from '../axiosinstance';

const Edit_category_modal = (props) => {
    const [formData,setFormData]=useState({})
    const [success,setSuccess]=useState(false)

    useEffect(()=>{
        setFormData({
            title: props.category.title
        })
    },[props.category])

   const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const response = await axiosInstance.put(`/category/${props.category.id}/`,formData)
            setSuccess(true)

            setTimeout(()=>{
                setSuccess(false)
            },3000)

            if(props.refresh){
                props.refresh();
            }

        } catch (error) {
            console.error(error)
        }
   }

   const handleChange = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
    }
  return (
    <>
    <Modal show={props.show} onHide={props.close}>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Category</Modal.Title>
                        </Modal.Header>
                            <Modal.Body className='p-4'>
                                {success&&
                                    <h5 className='text-center text-success'>Category Edited Succefully</h5>
                                }
                                <form action="" method="post" onSubmit={handleSubmit}>
                                    <div className='my-3 inputbox'>
                                        <label htmlFor="" className='mb-2'>Title</label><br />
                                        <input type="text"  className='form-control' name='title' value={formData.title} onChange={handleChange} required/>
                                    </div>
                                   
                                    <button type="submit" className='form-control btn btn-primary'>Save Changes</button>
                                </form>
                            </Modal.Body>
                        
                    </Modal>
    </>
  )
}

export default Edit_category_modal