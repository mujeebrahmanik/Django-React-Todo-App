import React, { useEffect, useState } from 'react'
import axios from "axios";
import Form_modal from './Form_modal';
import Todo_card from './Todo_card';
import axiosInstance from '../axiosinstance';

const Mytodos = () => {
    const[todos,setTodos]=useState([])
    const[error,setError]=useState()
    const[show,setShow]=useState(false)
    const[deleteFlash,setDeleteFlash] = useState(false)
    

    const handleOpen=()=>setShow(true)
    const handleClose=()=>setShow(false)

    const fetchData=async()=>{
            try {
                const response=await axiosInstance.get('/task/')
                setTodos(response.data)
            } catch (error) {
                setError(response.error)
            }
        }

    useEffect(()=>{
        
        fetchData()
    },[])

    const DeleteAlert = ()=>{
        setDeleteFlash(true)

        setTimeout(()=>{
            setDeleteFlash(false)
        },2000)
    }

  return (
    <>
        <div className="container py-5 px-4">
            
            <div className='d-flex justify-content-between mb-5'>
                <h2 className="text-center fw-bold">My Todos</h2>
                <button className="btn btn-success" onClick={handleOpen}>Add Todo</button>
                <Form_modal show={show} close={handleClose} refresh={fetchData}/>
            </div>



            {deleteFlash &&
                <h5 className='text-center text-success mb-5'>Todo Deleted Succefully</h5>

            }

            
            <div className="row">
                {todos.length>0 ? (
                    todos.map((i, index) => (
                        <div className="col-md-4 mb-2" key={index}>
                            <Todo_card index={index} todo={i} refresh={fetchData} delete={DeleteAlert}/>
                        </div>
                    ))
                ):(
                    <h2 className="text-center text-danger">No Todos</h2>
                )}
                
            </div>

        </div>
    </>
  )
}

export default Mytodos