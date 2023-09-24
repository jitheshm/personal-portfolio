import { signOut } from 'next-auth/react'
import React from 'react'

function Navbar() {
    return (
        <>
            <nav className="navbar" style={{backgroundColor:"#000000"}}>
               
                <div className="container">
                  
                    <a className="navbar-brand" href="#" style={{color:"#ffffff"}}>ADMIN </a>
                   
                    <div  style={{display:"flex",justifyContent:"end"}}>
                       
                        <div className="d-flex align-items-center">
                            <button type="button" className="btn btn-link px-3 me-2" style={{color:"#ffffff" }}
                            onClick={()=>signOut()}
                            >
                                Logout
                            </button>


                        </div>
                    </div>
                   
                </div>
              
            </nav>
           

        </>
    )
}

export default Navbar