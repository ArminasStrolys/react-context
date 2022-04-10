const TodoReducer = (state, action) => {
  switch (action.type) {
    case "Add task":
      return {
          ...state,
          tasks:[...state.tasks, action.payload]
      };
    case "Remove task":
      return {};
    default:
      return state;
  }
};
export default TodoReducer;
