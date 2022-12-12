import React, { useEffect,useState } from "react";
import "./nav.css";
function Navbar(){
    const[show,handleshow]=useState(false)
    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY>100){
                handleshow(true);
            }
            else{
                handleshow(false)
            }
        });
        return ()=>{
            window.removeEventListener("scroll",null);
        }
    },[])
    return(
        <div className={`nav ${show && "nav__black"}`}>
            <h1 className="netflix__logo">NETFLIX</h1>
            <h1 className="vivek__logo">VIVEK</h1>
        </div>
    )
}
export default Navbar;