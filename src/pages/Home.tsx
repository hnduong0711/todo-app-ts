import { useEffect, useState } from 'react';
import { fetchTodos } from '@utils/api';
import { type Todo } from '@types';
import TodoForm from '@components/TodoForm';
import TodoItem from '@components/TodoItem';
import { AnimatePresence } from 'framer-motion';

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const refreshTodos = async () => {
    try {
      const data = await fetchTodos();
      setTodos(data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  const handleAdd = (todo: Todo) => {
    setTodos([todo, ...todos]);
  };

  useEffect(() => {
    refreshTodos();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <TodoForm onAdd={handleAdd} />
      <button
        onClick={refreshTodos}
        className="bg-blue-500 text-white p-2 rounded mb-4 hover:bg-blue-600"
      >
        Refresh
      </button>
      <ul className="space-y-2">
        <AnimatePresence>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default Home;