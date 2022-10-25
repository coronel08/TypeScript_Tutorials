import { Todo, FetchTodosAction, DeleteTodoAction } from "../actions/actions"
import { ActionTypes } from "../actions/types"

export const todosReducer = (state: Todo[] = [], action: FetchTodosAction | DeleteTodoAction) => {
    switch (action.type) {
        case ActionTypes.fetchTodos:
            return action.payload
        case ActionTypes.deleteTodo:
            return state.filter((todo: Todo) => todo.id !== action.payload )
        default:
            return state
    }
}