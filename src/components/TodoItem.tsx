import { motion } from 'framer-motion';
import { type Todo } from '@types';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <motion.li
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="p-2 border rounded flex justify-between items-center"
    >
      <span className={todo.completed ? 'line-through' : ''}>{todo.title}</span>
      <button
        className="text-red-500 hover:text-red-700"
        onClick={() => console.log(`Delete todo ${todo.id}`)} // Sẽ cập nhật sau
      >
        Delete
      </button>
    </motion.li>
  );
};

export default TodoItem;