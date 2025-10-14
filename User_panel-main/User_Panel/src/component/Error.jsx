import React from 'react'
import './Error.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
function Error() {
    return (
        <div className='container-fluid d-flex flex-column justify-content-center align-content-center bg-home '>
            <div className='align-items-center py-5'>
                
                <img src="/public/error-404.png" alt="" />
                <h1>Page Not Found</h1>
                <p className='fs-4 m-4'>Page you are looking for doesn't exist or an other error ocurred
                    or temporarily unavailable.</p>
                <button className='btn btn-outline-primary w-25  bi bi-house-door '>  Go to home</button>
           
            </div>
        </div>
    )
}

export default Error