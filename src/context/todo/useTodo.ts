import { useContext } from "react";
import { TodoContext, TodoContextAction } from "./TodoContext";

export function useTodo() {
  const Context = useContext(TodoContext);
  if (!Context) {
    throw new Error("useTodo는 TodoProvider 내부에서만 사용할 수 있습니다.");
  }
  return Context;
}

export function useTodoAction() {
  const Context = useContext(TodoContextAction);
  if (!Context) {
    throw new Error(
      "useTodoAction는 TodoProvider 내부에서만 사용할 수 있습니다.",
    );
  }
  return Context;
}
