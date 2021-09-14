import React from 'react'
import {useState} from 'react'
import './contact.scss'
export default function Сontact() {
    const[message,setMessage]=useState(false)
    const handleSubmit=(e)=>{
        e.preventDefault();
        setMessage(true)

        }
    return (
        
        <div className = 'contact' id ='contact'>
            <div className="left">
                <div className="container">
                     <img src="assets/React-icon.svg" className="React-icon" />
                     <img src="assets/html.svg"className="htmlicon" alt="" />
                     <img src="assets/css.svg" alt="" className="css-icon"/>
                     <img src="assets/Javascript.svg" alt="" className="javascript-icon" />
                     <img src="assets/typescript.svg" alt="" className="typesript-icon" />
                     <img src="assets/Sass.svg" alt="" className="Sassicon" />
            </div>
            </div>
            <div className="right">
                <h2>Contact Me</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Mesage</button>
                    {message && <span>Thanks  I`ll reply</span>}
                </form>
            </div>
            
        </div>
    )
}
