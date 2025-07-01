import { useForm, type SubmitHandler } from 'react-hook-form';
import { type Todo } from '@types';

interface TodoFormInputs {
  title: string;
}

interface TodoFormProps {
  onAdd: (todo: Todo) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<TodoFormInputs>({
    defaultValues: { title: '' }
  });

  const onSubmit: SubmitHandler<TodoFormInputs> = async (data) => {
    // Tạo task giả với ID tạm thời (sẽ thay bằng API sau)
    const newTodo: Todo = {
      id: Math.random() * 1000, // ID tạm thời
      title: data.title,
      completed: false
    };
    onAdd(newTodo);
    reset();
  };

  return (
    <div className="mb-4">
      <input
        {...register('title', { required: 'Title is required' })}
        type="text"
        placeholder="Add a new task"
        className="border p-2 mr-2 rounded"
      />
      {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
      <button
        onClick={handleSubmit(onSubmit)}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Add
      </button>
    </div>
  );
};

export default TodoForm;