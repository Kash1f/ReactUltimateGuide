import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",
})

export const getTodos = async () => {
    const response = await api.get("/todos");
    return response.data;
}

export const addTodo = async (todo) => {
    return await api.post("/todos", todo);
}

export const updateTodo = async (todo) => {
    return await api.put("/todos", todo);
}

export const deleteTodo = async (id) => {
    return await api.delete(`/todos/${id}`);
}