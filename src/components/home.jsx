/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import axios from 'axios'

const Home = () => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/get')
        .then(result => setTodos(result.data))
        .catch(err => console.log(err))
    }, []);

    const handleEdit = (id) =>{
        axios.put('http://localhost:3001/update/'+id)
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }

    const handleDelete = (id) =>{
        axios.delete('http://localhost:3001/delete/'+id)
        .then(location.reload())
        .catch(err => console.log(err))
    }

    return (
        <div className="home">
            <div className="todo-list col-sm-6">
                {
                    todos.length === 0 
                    ?
                    <div> <h2> No hay resultados </h2></div>
                    :
                    todos.map(todo=>(
                        <div className="alert alert-primary">
                        <div className="form-check form-switch">
                            
                            {todo.done ?
                            <input className="form-check-input" type="checkbox"  onClick={() => handleEdit(todo._id)} checked></input>
                            :
                            <input className="form-check-input" type="checkbox"  onClick={() => handleEdit(todo._id)}></input>
                            }
                        </div>
                            <center>
                                <b><p>Titulo: {todo.todoNombre}</p></b>
                                <p>Descripcion: {todo.todoDescripcion}</p>
                            </center>
                            <br />
                            <button className="btn btn-danger" onClick={() => handleDelete(todo._id)}>Eliminar</button>
                        </div>
                    ))
                }
            </div>
        </div>
        
    );
};

export default Home;
