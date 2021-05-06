import {useState, useRef} from 'react';
import "./App.css";
import TodoItem from "./TodoItem";
import initialState from './todos.json';
import useForm from './useForm';

function App() {
  const [todos, setTodos] = useState(initialState);
  const [values, handleValueChange] = useForm({id: '', name: '', isEdit: false, isDone: false, addedDate: '24th Jun 2020'})
  function handleAddClick () {
    handleValueChange({target: {name: "name", value: ""}});
    setTodos([...todos, ...[{...values, id: todos.length+1, addedDate: '24th Jun 2020'}]]);

  }

  return (
    <div className="container m-5 p-2 rounded mx-auto bg-light shadow">
      <div className="row m-1 p-4">
        <div className="col">
          <div className="p-1 h1 text-primary text-center mx-auto display-inline-block">
            <i className="fa fa-check bg-primary text-white rounded p-2"></i>
            <u>My Todo-s</u>
          </div>
        </div>
      </div>

      <div className="row m-1 p-3">
        <div className="col col-11 mx-auto">
          <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
            <div className="col">
              <input
                name="name"
                onChange={handleValueChange}
                value={values.name}
                className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded"
                type="text"
                placeholder="Add new .."
              />
            </div>
            <div className="col-auto m-0 px-2 d-flex align-items-center">
              <label className="text-secondary my-2 p-0 px-1 view-opt-label due-date-label d-none">
                Due date not set
              </label>
              <i
                className="fa fa-calendar my-2 px-1 text-primary btn due-date-button"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Set a Due date"
              ></i>
              <i
                className="fa fa-calendar-times-o my-2 px-1 text-danger btn clear-due-date-button d-none"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Clear Due date"
              ></i>
            </div>
            <div className="col-auto px-0 mx-0 mr-2">
              <button type="button" onClick={handleAddClick} className="btn btn-primary">
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 mx-4 border-black-25 border-bottom"></div>

      <div className="row m-1 p-3 px-5 justify-content-end">
        <div className="col-auto d-flex align-items-center">
          <label className="text-secondary my-2 pr-2 view-opt-label">Filter</label>
          <select className="custom-select custom-select-sm btn my-2" value="all">
            <option value="all">
              All
            </option>
            <option value="completed">Completed</option>
            <option value="active">Active</option>
            <option value="has-due-date">Has due date</option>
          </select>
        </div>
        <div className="col-auto d-flex align-items-center px-1 pr-3">
          <label className="text-secondary my-2 pr-2 view-opt-label">Sort</label>
          <select className="custom-select custom-select-sm btn my-2" value="added-date-asc">
            <option value="added-date-asc" >
              Added date
            </option>
            <option value="due-date-desc">Due date</option>
          </select>
          <i
            className="fa fa fa-sort-amount-asc text-info btn mx-0 px-0 pl-1"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Ascending"
          ></i>
          <i
            className="fa fa fa-sort-amount-desc text-info btn mx-0 px-0 pl-1 d-none"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Descending"
          ></i>
        </div>
      </div>

      <div className="row mx-1 px-5 pb-3 w-80">
        <div className="col mx-auto">
          {
            todos.map(todo => (
              <TodoItem key={todo.id} data={todo} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
