import axios from "axios";
import { Todo } from "../types/todo";

const BASE_URL = "http://localhost:8080";
const api = axios.create({ baseURL: BASE_URL });

export const getTodosIds = async () => {
  return (await api.get<Todo[]>("/todos")).data.map((todo) => todo.id);
};


