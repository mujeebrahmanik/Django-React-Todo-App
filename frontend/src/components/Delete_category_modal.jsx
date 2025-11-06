import React, { useEffect, useState } from 'react'
import { Button, Modal } from "react-bootstrap";
import axiosInstance from '../axiosinstance';

const Delete_category_modal = (props) => {

    const handleSubmit = async(e)=>{
        e.preventDefault;
        try {
            const response = await axiosInstance.delete(`/category/${props.category.id}/`)

            if (props.refresh){
                props.refresh();
            }

            props.close();

            if (props.delete_alert){
                props.delete_alert();
            }

           
        } catch (error) {
            console.error(error)
        }
    }
  return (
    <>

            <Modal show={props.show} onHide={props.close}>
                        
                    <Modal.Header closeButton>
                    <Modal.Title>Delete Category</Modal.Title>
                    </Modal.Header>
                    
                    
                    <Modal.Body className='py-3'>Are you sure ,You want to Delete ?</Modal.Body>
                    
                    <Modal.Footer>
                    <Button variant="secondary" onClick={props.close}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleSubmit}>
                        Delete
                    </Button>
                    </Modal.Footer>
                </Modal>
    </>
  )
}

export default Delete_category_modal