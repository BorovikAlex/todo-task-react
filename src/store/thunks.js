import { initTodos } from "./todo-actions";

export const getTodos = () => {
  return (dispatch) => {
    fetch("https://localhost:44367/ToDo/gettodos")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        dispatch(initTodos(data));
      });
  };
};

export const setTodoDone = (item) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  };
  return (dispatch) => {
    fetch("https://localhost:44367/ToDo/edittodo", requestOptions)
      .then((res) => {
        return res.json();
      })
      .then(() => {
        dispatch(getTodos());
      });
  };
};

export const setTodoText = (item) => {
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  };
  return (dispatch) => {
    fetch("https://localhost:44367/ToDo/edittodo", requestOptions)
      .then((res) => {
        return res.json();
      })
      .then(() => {
        dispatch(getTodos());
      });
  };
};
export const deleteTodo = (toDoID) => {
  console.log(toDoID);

  return (dispatch) => {
    fetch(`https://localhost:44367/ToDo/deletetodo?id=${toDoID}`)
      .then((res) => {
        return res.json();
      })
      .then(() => {
        dispatch(getTodos());
      });
  };
};
export const addTodo = (item) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item),
  };
  return (dispatch) => {
    fetch("https://localhost:44367/ToDo/addtodo", requestOptions)
      .then((res) => {
        return res.json();
      })
      .then(() => {
        dispatch(getTodos());
      });
  };
};
