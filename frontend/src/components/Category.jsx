import React, { useState ,useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import axiosInstance from '../axiosinstance';
import Category_modal from './Category_modal';
import Edit_category_modal from './Edit_category_modal';
import Delete_category_modal from './Delete_category_modal';


const Category = () => {
    const [category,setCategory]=useState([])
    const [editShow,setEditShow] = useState(false)
    const [selectedCategory,setSelectedCategory]=useState('')
    const [deleteShow,setDeleteShow]= useState(false)
    const [deleteFlash,setDeleteFlash] = useState(false)

    const[show,setShow]=useState(false)
    const handleOpen=()=>setShow(true)
    const handleClose=()=>setShow(false)

     const fetchCategory = async()=>{
            try {
                const response = await axiosInstance.get('/category/')
                setCategory(response.data)
            } catch (error) {
                console.log(error)
            }
        }


    useEffect(()=>{
        fetchCategory()
    },[])

    


    const editView = (category)=>{
        setEditShow(true)
        setSelectedCategory(category)
        
    }

    const deleteView=(category)=>{
        setDeleteShow(true)
        setSelectedCategory(category)
    }

    const DeleteAlert=()=>{
        setDeleteFlash(true)

        setTimeout(()=>{
            setDeleteFlash(false)
        },2000)
    }

    
    const CloseEditView =()=>setEditShow(false)
    const CloseDeleteView = ()=>setDeleteShow(false)

  return (
    <>
        <div className="container py-5 px-4">
            <div className="d-flex justify-content-between mb-5">
                <h2 className='fw-bold'>My Categories</h2>
                <button className="btn btn-success" onClick={handleOpen}>Add Category</button>
                <Category_modal show={show} close={handleClose} refresh={fetchCategory}/>

                
            </div>

                {deleteFlash &&
                        <h5 className='text-center text-success mb-5'>Category Deleted Succefully</h5>
                }

            <div className='row'>
                {category.length>0 ?(
                    category.map((i,index)=>(

                        <div className="col-md-3 mb-2" key={index}>

                            <div className="card mb-4">
                                    <div className="card-body">
                                    
                                        <div className='d-flex justify-content-between mb-2'>
                                            <h5 className='text-capitalize'>
                                                    {i.title}
                                                </h5>
                                        </div>

                                    </div>
                                    <div className="card-footer d-flex justify-content-end align-items-center" style={{ fontSize: "12px" }}>
                                        
                                            <div>
                                                <div className="ms-2 btn btn-sm btn-outline-success" onClick={()=> editView(i)} ><FontAwesomeIcon icon={faEdit} /></div>
                                                <Edit_category_modal show={editShow} close={CloseEditView} refresh={fetchCategory} category={selectedCategory} />
                                                <div className="ms-2 btn btn-sm btn-outline-danger" onClick={()=>deleteView(i)}><FontAwesomeIcon icon={faTrash} /></div>
                                                <Delete_category_modal show={deleteShow} close={CloseDeleteView} refresh={fetchCategory} category={selectedCategory} delete_alert={DeleteAlert}/>
                                            </div>
                                    </div>

                                </div>
                        </div>
                    ))
                ):(
                    <h2 className="text-center text-danger">No Categories</h2>
                )}
                
                
            </div>

        </div>
    </>
  )
}

export default Category