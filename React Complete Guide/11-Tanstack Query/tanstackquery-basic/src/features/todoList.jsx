import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { addTodo, deleteTodo, getTodos, updateTodo } from "../api/api";
import { PenSquare, Trash2 } from "lucide-react";

const TodoList = () => {
  //Defining our state with newTodo
  const [newTodo, setNewTodo] = useState("");

  const queryClient = useQueryClient();

  const { data: todos, isError, isLoading } = useQuery("todos", getTodos);

  const addTodoMutation = useMutation(addTodo,{
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    }
  });
  const updateTodoMutation = useMutation(updateTodo,{
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    }
  });
  const deleteTodoMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    }
  });

  return <div></div>;
};

export default TodoList;
