import { useState } from "react";
import axios from 'axios'

const Controlado = () => {

    // eslint-disable-next-line no-unused-vars
    const [lista, setLista] = useState([]);
    const [todoNombre, setTodoNombre] = useState("");
    const [todoDescripcion, setTodoDescripcion] = useState("");

    //Nuevo ToDo
    const handleAgregarNuevaTarea = () => {
        axios.post('http://localhost:3001/add', {todoNombre: todoNombre, todoDescripcion: todoDescripcion})
        .then(result => console.log(result), location.reload())
        .catch(err => console.log(err))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        handleAgregarNuevaTarea();
    };


    return (
        <div className="col-sm-6 border border-primary">
            <h2 className="text-info">ToDo List</h2>
            <form
                onSubmit={handleSubmit}
            >
                <input
                    className="form-control mb-3"
                    type="text"
                    placeholder="Ingrese un TODO"
                    name="todoNombre"
                    value={todoNombre}
                    onChange={e => setTodoNombre(e.target.value)}
                />
                <textarea
                    className="form-control mb-2"
                    type="text"
                    placeholder="Descripcion..."
                    name="todoDescripcion"
                    value={todoDescripcion}
                    onChange={e => setTodoDescripcion(e.target.value)}

                />
                <button
                    className="btn btn-info"
                    type="submit"
                >
                    Agregar
                </button>
            </form>
            <hr />
        </div>
    );
};

export default Controlado;


