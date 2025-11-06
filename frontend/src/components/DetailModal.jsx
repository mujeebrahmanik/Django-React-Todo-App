import React from 'react'
import { Button, Modal } from "react-bootstrap";
const DetailModal = (props) => {
  return (
    <Modal show={props.show} onHide={props.close}>
                    <Modal.Header closeButton>
                        <Modal.Title className='text-capitalize'>{props.todo.title}</Modal.Title>
                    </Modal.Header>
                        <Modal.Body className='p-4'>
                            <p className='mb-4'>{props.todo.description}</p>
                            <table class="table table-bordered text-center" style={{fontSize:'12px'}}>
                            <thead>
                                <tr>
                                <th scope="col">Category</th>
                                <th scope="col">Priority</th>
                                <th scope="col">Status</th>
                                <th scope="col">Added Date</th>
                                </tr>
                            </thead>
                            <tbody className='text-capitalize'>
                                <tr>
                                
                                <td>{props.todo.category_name}</td>
                                <td className={props.todo.priority === 'low'?'text-success':props.todo.priority === 'medium'? 'text-warning':'text-danger'}>{props.todo.priority}</td>
                                {props.todo.completed && 
                                    <td className='text-success'>Completed</td>
                                }
                                {!props.todo.completed && 
                                    <td className='text-warning'>Pending</td>
                                }
                                <td>{props.todo.created_at}</td>
                                </tr>
                            </tbody>
                            </table>
                        </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
  )
}

export default DetailModal