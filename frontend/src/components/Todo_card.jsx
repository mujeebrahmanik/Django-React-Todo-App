import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash,faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import DetailModal from './DetailModal';
import Form_modal from './Form_modal';
import Edit_form_modal from './Edit_form_modal';
import axiosInstance from '../axiosinstance';
import Delete_todo_modal from './Delete_todo_modal';

const Todo_card = (props) => {
    const[detailShow,setDetailShow]=useState(false)
    const [selectedTodo,setSelectedTodo]=useState('')
    const [editShow,setEditShow] = useState(false)
    const [deleteShow,setDeleteShow] = useState(false)


    const detailView = (todo)=>{
        setDetailShow(true)
        setSelectedTodo(todo)

    }

    const editView = (todo)=>{
        setEditShow(true)
        setSelectedTodo(todo)
    }


    const deleteView = (todo)=>{
        setDeleteShow(true)
        setSelectedTodo(todo)
    }
    
    

    const CloseDetailView =()=>setDetailShow(false)
    const CloseEditView =()=>setEditShow(false)
    const ClosedeleteView =()=>setDeleteShow(false)


  return (
    <>
                <div className="card mb-4" key={props.index}>
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <div style={{fontSize:"13px",color:"gray"}} className='mb-3 text-capitalize'>{props.todo.category_name}</div>
                                        <div>
                                        
                                        </div>
                                    </div>
                                    
                                    
                                    <div className='d-flex justify-content-between mb-2'>
                                        <h5 className='text-capitalize'>
                                                {props.todo.title}
                                        </h5>
                                        
                                    </div>

                                    
                                </div>
                                <div className="card-footer d-flex justify-content-between align-items-center" style={{ fontSize: "12px" }}>
                                    <div className='text-capitalize' style={{fontSize:"14px",fontWeight:"bold"}}>
                                            {props.todo.completed ? (
                                                <span className='text-success ms-1'>Completed</span>
                                            ):
                                            <span className='text-danger ms-1'>Pending</span>
                                            }
                                        </div>
                                        <div>
                                            <div className="btn btn-sm btn-outline-primary" onClick={()=>detailView(props.todo)}><FontAwesomeIcon icon={faEye} /></div>
                                            <DetailModal show={detailShow} close={CloseDetailView} todo={selectedTodo}/>
                                            <div className="ms-2 btn btn-sm btn-outline-success" onClick={()=>editView(props.todo)}><FontAwesomeIcon icon={faEdit} /></div>
                                            <Edit_form_modal show={editShow} close={CloseEditView} todo={selectedTodo} refresh={props.refresh} />
                                            <div className="ms-2 btn btn-sm btn-outline-danger" onClick={()=>deleteView(props.todo)}><FontAwesomeIcon icon={faTrash} /></div>
                                            <Delete_todo_modal show={deleteShow} close={ClosedeleteView} todo={selectedTodo} refresh={props.refresh} delete_success={props.delete}/>
                                        </div>
                                </div>

                            </div>
    </>
  )
}

export default Todo_card