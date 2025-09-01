import React, { useState } from "react";


const List = (props) =>{
    const [isHover, setIshover] = useState(false)
    const handleHover = (state) =>{    //funcion para activar el boton x para eliminar tarea, al pasar el mouse
        setIshover(state) 
    }

     return(
        <>
        <li className={`list-group-item text-start  ${isHover? 'active':''}`}  onMouseEnter={() => {handleHover(true)}} onMouseLeave={() => {handleHover(false)}} key={props.index}>{props.el}
       { isHover &&    <span className="float-end pointer" onClick={() => {props.onSelect(props.index)}} ><i className="fa-solid fa-rectangle-xmark"></i></span>}
        </li>
        </>
    )



}


export default List