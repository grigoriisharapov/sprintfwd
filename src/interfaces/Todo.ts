export default interface TodoI {
  id: string;
  text: string;
  completed: boolean;
}

export type TodoAddI = (text: string) => void;

export type TodoRemoveI = (id: string) => void;

export type TodoUpdateI = (id: string, changes: Omit<TodoI, "id">) => void;
