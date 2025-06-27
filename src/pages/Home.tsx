import { useEffect, useState } from "react";
import { fetchTodos } from "@utils/api";
import { type Todo } from "@types";

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodos()
      .then(setTodos)
      .catch((error) => console.error("Error fetching todos:", error));
  }, []);

  const refreshTodos = async () => {
    try {
      const data = await fetchTodos();
      setTodos(data)
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  useEffect(() => {
    refreshTodos();
  },[]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <button
        onClick={refreshTodos}
        className="bg-blue-500 text-white p-2 rounded mb-4"
      >
        Refresh
      </button>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li key={todo.id} className="p-2 border rounded">
            <span className={todo.completed ? "line-through" : ""}>
              {todo.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
