import { useState, useEffect } from "react";

const Controlado = () => {

    const [lista, setLista] = useState([]);
    const [todoNombre, setTodoNombre] = useState("");
    const [todoDescripcion, setTodoDescripcion] = useState("");
    const [todoEstado, setTodoEstado] = useState("");

    //Nuevo ToDo
    const handleAgregarNuevaTarea = () => {
        let nuevaTarea= {
            nombre: todoNombre,
            descripcion: todoDescripcion,
            estado: todoEstado,
        };


        let actualizarToDo = [...lista];
        actualizarToDo.push(nuevaTarea);
        setLista(actualizarToDo);
        localStorage.setItem('ToDo', JSON.stringify(actualizarToDo));
        setTodoNombre('');
        setTodoDescripcion('');
        setTodoEstado('');
    }

    //Guardar ToDo List
    useEffect(() => {
        let savedTodos = JSON.parse(localStorage.getItem('ToDo'));
        if (savedTodos) {
            setLista(savedTodos);
        }
    }, []);

    //Eliminar el item
    const EliminarToDo = index => {
        let eliminar = [...lista];
        eliminar.splice(index);
        localStorage.setItem('ToDo', JSON.stringify(eliminar));
        setLista(eliminar);
    };
    
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
                    className="form-control mb-2"
                    type="text"
                    placeholder="Ingrese un TODO"
                    name="todoNombre"
                    value={todoNombre}
                    onChange={e => setTodoNombre(e.target.value)}
                />
                <textarea
                    className="form-control mb-2"
                    type="text"
                    placeholder="Ingrese un TODO"
                    name="todoDescripcion"
                    value={todoDescripcion}
                    onChange={e => setTodoDescripcion(e.target.value)}

                />
                <select
                    className="form-select mb-2"
                    name="todoEstado"
                    value={todoEstado}
                    onChange={e => setTodoEstado(e.target.value)}
                    defaultValue={todoEstado}
                >   
                    <option value="0">Seleccione...</option>
                    <option value="pendiente">Pendiente</option>
                    <option value="completado">Completado</option>
                </select>
                <button
                    className="btn btn-info"
                    type="submit"
                >
                    Agregar
                </button>
            </form>
            <hr />
            <div className="todo-list col-sm-6">
                <ul className="list-group" >
                {lista.map((item, index) => (
                    <div className="todo-list-item" key={index}>
                        <li className="list-group-item list-group-item-dark">{item.nombre}</li>
                        <li className="list-group-item list-group-item-dark">{item.descripcion}</li>
                        <li className="list-group-item list-group-item-dark">{item.estado}</li>
                        <div>
                            <br />
                            <button
                                className="btn btn-danger"
                                type="button"
                                onClick={() => EliminarToDo(index)}
                            >
                                Eliminar
                            </button>
                            <br />
                        </div>
                        <br />
                    </div>
                    ))}
                    <hr />
                </ul>
            </div>
        </div>
    );
};

export default Controlado;


