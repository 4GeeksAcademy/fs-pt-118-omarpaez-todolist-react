import React, { useState, useEffect } from "react";
import List from "./List";

const Inputtodolist = () => {
        const [task, setTask] = useState('')
        const [savedTasks, setSavedtasks] = useState([])
        const [isEmpty, setIsempty] = useState(false)

        const handleEnter = e => {

                setTask(e.target.value)
        }


        const handleSubmitTask = e => {
                e.preventDefault()
                if (task !== ""){
                      setSavedtasks([...savedTasks, task])
                      setTask('')
                       setIsempty(false)

                     return
                }
              
                 setIsempty(true) // en caso de querer incluir nota sin texto se activa el alert
               

        }

        const handleSelect = (indexSelect) => {  //permite eliminar de la lista la tarea que coincide con el index seleccionado.
                setSavedtasks(
                        savedTasks.filter((e, i) =>

                                i !== indexSelect
                        )
                )


        }


        return (
                <>
                        <div className="container">
                                <form onSubmit={handleSubmitTask} className="form-text border border-primary-subtle shadow-lg rounded p-1">
                                  { isEmpty && <div className="alert alert-danger" role="alert">
                                                No puedes agregar notas sin texto!
                                        </div>}
                                        <input className="form-control border-0 border-bottom shadow-none rounded-0" type="text" value={task} onChange={handleEnter} placeholder="Escribe tu tarea..." />

                                        <ul className="list-group list-group-flush fw-semibold fs-6">
                                                {savedTasks.length !== 0 ? savedTasks.map((el, i) => <List index={i} el={el} onSelect={handleSelect} />) :
                                                        "No hay tareas, añadir tareas"}
                                        </ul>
                                        <div className="text-start">
                                                <span className="ps-2 fst-italic text-info-emphasis">{savedTasks.length} item left</span>
                                        </div>

                                </form>
                        </div>

                </>
        )



}

export default Inputtodolist