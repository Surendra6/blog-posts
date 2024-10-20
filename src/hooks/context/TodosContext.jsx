import { createContext, useContext } from "react";
import useFetchTodos from "../services/useFetchTodos";

const TodosContext = createContext({ todos: [] });

// Create a custom hook for easier access to the context
const useTodosContext = () => {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error(
      "useTodosContext must be used within a TodosContextProvider"
    );
  }
  return context;
};

const TodosContextProvider = ({ children }) => {
  const { data: todos } = useFetchTodos();

  return (
    <TodosContext.Provider value={{ todos: todos || [] }}>
      {children}
    </TodosContext.Provider>
  );
};

export { useTodosContext, TodosContextProvider };
