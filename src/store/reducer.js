const initialState = {
  tasks: [],
  editFlag: false,
  index: 0,
};

const reducer = (state = initialState, action) => {
  if (action.type === "addTask") {
    //console.log("input passed", action.package.input);
    let input = action.package.input;
    let copy_tasks = [];
    copy_tasks = [...state.tasks];
    let length = copy_tasks.length;
    copy_tasks[length] = input;
    let tasks = copy_tasks;
    let editFlag = false;
    let index = 0;
    //this.setState({ tasks: copy_tasks });
    return {
      tasks,
      editFlag,
      index,
    };
  }

  if (action.type === "deleteTask") {
    let copy_tasks = [...state.tasks];
    copy_tasks.splice(action.index, 1);
    let tasks = copy_tasks;
    let editFlag = false;
    let index = 0;
    return {
      tasks,
      editFlag,
      index,
    };
  }
  return state;
};

export default reducer;
