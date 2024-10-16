import React, { useState, useEffect, useRef } from 'react';
import { IoCloseCircle } from "react-icons/io5";

const Modal = ({ isOpen, onClose }) => {
    // const modalRef = useRef(null);   Not using it due to complications
    const handleClose = () => {
        onClose();
    };

    if (!isOpen) return null; 

    return (
        <div className='Create-Modal'>
            <div className="Modal-Content" >
                <div className="Modal-Header">
                    <h2>Create Ticket</h2>
                    
                    <IoCloseCircle  onClick={handleClose}/>
                    
                </div>
                <div className="Modal-Body">
                    <div className="Ticket-Status">
                        <h2>Status</h2>
                        <select>
                            <option value="TO-DO">TO-DO</option>
                            <option value="In-Progress">In-Progress</option>
                            <option value="Blocked">Blocked</option>
                            <option value="Done">Done</option>
                        </select>
                    </div>
                    <div className='Ticket-Title'>
                        <h2>Title</h2>
                        <input type="text" />
                    </div>
                    <div className="Ticket-Summary">
                        <h2>Summary</h2>
                        <input type="text" />
                    </div>
                    <div className="Ticket-Description">
                        <h2>Description</h2>
                        <input type="text" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
