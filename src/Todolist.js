// import { useState } from "react";
// import Todo from "./Todo";
// export default function Todolist() {
//   const [todos, setTodos] = useState([
//     { title: "clear junk", status: false },
//     { title: "purchase fruits", status: true },
//     { title: "pens stand", status: true },
//     { title: "eat biryani", status: false }
//   ]);
//   const [newTodo, setNewTodo] = useState("");
//   const handleChange = (e) => {
//     setNewTodo({ ...newTodo, title: e.target.value, status: false });
//     // console.log(e.target.value)
//   };
//   const handleAdd = () => {
//     setTodos([...todos, newTodo]);
//   };
//   const handleDelete = (i) => {
//     alert(i);
//     let temp = [...todos];
//     temp.splice(i, 1);
//     setTodos([...temp]);
//   };
//   const handleDone = (i) => {
//     // alert(i)
//     let temp = [...todos];
//     temp[i].status = true;
//     setTodos([...temp]);
//   };
//   const handleUndo = (i) => {
//     // alert(i)
//     let temp = [...todos];
//     temp[i].status = false;
//     setTodos([...temp]);
//   };
//   return (
//     <div>
//       <input type="text" placeholder="enter todo" onChange={handleChange} />
//       <button onClick={handleAdd}>add</button>
//       <div>
//         {todos.map((t, i) => {
//           return (
//             <div key={i} className={t.status === true ? "a" : "b"}>
//               {/* <Todo
//                 handleUndo={handleUndo}
//                 handleDone={handleDone}
//                 i={i}
//                 t={t}
//                 handleDelete={handleDelete}
//               /> */}
//                <span className={t.status === true ? "a" : "b"}>
//         {t.title}{" "}
//       </span>
//       {t.status === true ? (
//         <button className="btn" onClick={() =>handleUndo(i)}>
//           {" "}
//           Undo
//         </button>
//       ) : (
//         <button className="btn" onClick={() => handleDone(i)}>
//           {" "}
//           Done
//         </button>
//       )}
//       <button onClick={() => handleDelete(i)}>delete</button>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }
import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { title: "clear junk", status: false },
    { title: "purchase fruits", status: true },
    { title: "pens stand", status: true },
    { title: "eat biryani", status: false }
  ]);

  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("all");

  const handleChange = (e) => {
    setNewTodo({ ...newTodo, title: e.target.value, status: false });
  };

  const handleAdd = () => {
    setTodos([...todos, newTodo]);
  };

  const handleDelete = (i) => {
    let temp = [...todos];
    temp.splice(i, 1);
    setTodos(temp);
  };

  const handleDone = (i) => {
    let temp = [...todos];
    temp[i].status = true;
    setTodos(temp);
  };

  const handleUndo = (i) => {
    let temp = [...todos];
    temp[i].status = false;
    setTodos(temp);
  };

  const handleFilter = (filter) => {
    setFilter(filter);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") {
      return todo.status === true;
    } else if (filter === "incomplete") {
      return todo.status === false;
    }
    return true; // "all" filter, return all todos
  });

  return (
    <div>
      <input type="text" placeholder="enter todo" onChange={handleChange} />
      <button onClick={handleAdd}>add</button> <br /> <br />
      <div>
        <div>
          <button onClick={() => handleFilter("all")}>All</button> &nbsp;&nbsp;
          <button onClick={() => handleFilter("completed")}>Completed</button>
          &nbsp;&nbsp;
          <button onClick={() => handleFilter("incomplete")}>Incomplete</button>
          &nbsp;&nbsp;
        </div>
        {filteredTodos.map((todo, i) => (
          <div key={i} className={todo.status === true ? "a" : "b"}>
            <span className={todo.status === true ? "a" : "b"}>
              {todo.title}
            </span>
            {todo.status === true ? (
              <button className="btn" onClick={() => handleUndo(i)}>
                Undo
              </button>
            ) : (
              <button className="btn" onClick={() => handleDone(i)}>
                Done
              </button>
            )}
            <button onClick={() => handleDelete(i)}>delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
