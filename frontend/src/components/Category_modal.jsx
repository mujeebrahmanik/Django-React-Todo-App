import React, { useEffect, useState } from 'react'
import { Button, Modal } from "react-bootstrap";
import axiosInstance from '../axiosinstance';

const Category_modal = (props) => {
    const [category,setCategory]=useState("")

    const [success,setSuccess]=useState(false)

    
    const handleSubmit=async(e)=>{
        e.preventDefault()

        try {
            const response= await axiosInstance.post('/category/',{title:category})
            setSuccess(true)

            setTimeout(()=>{
                setSuccess(false)
            },2000)

            if(props.refresh){
                props.refresh();
            }
        } catch (error) {
            console.error(error)
        }

       
    }

  return (
    <>
<Modal show={props.show} onHide={props.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Category</Modal.Title>
                    </Modal.Header>
                        <Modal.Body className='p-4'>
                            {success&&
                                <h5 className='text-center text-success'>Category Added Succefully</h5>
                            }
                            <form action="" method="post" onSubmit={handleSubmit}>
                                <div className='my-3 inputbox'>
                                    <label htmlFor="" className='mb-2'>Title</label><br />
                                    <input type="text"  className='form-control' name='title' value={category.title} onChange={(e)=>setCategory(e.target.value)} required/>
                                </div>
                               
                                <button type="submit" className='form-control btn btn-primary'>Add Category</button>
                            </form>
                        </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
    </>
  )
}

export default Category_modal