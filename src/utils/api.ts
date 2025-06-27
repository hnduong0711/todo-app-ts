import axios from 'axios';
import { type Todo } from '@types';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

export const fetchTodos = async (): Promise<Todo[]> => {
  const response = await axios.get<Todo[]>(API_URL);
  return response.data.slice(0, 10); // Lấy 10 task đầu tiên
};