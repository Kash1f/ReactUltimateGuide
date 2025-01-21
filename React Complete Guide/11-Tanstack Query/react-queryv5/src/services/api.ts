import axios from "axios";
import { Todo } from "../types/todo";

const BASE_URL = "http://jsonplaceholder.typicode.com";
const api = axios.create({ baseURL: BASE_URL });

export const getTodos = async () => {
  return (await api.get<Todo[]>("/todos")).data.map((todo) => todo.id);
};


