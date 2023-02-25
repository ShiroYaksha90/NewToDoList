const editLocalStorage = (editInput, index) => {
  const taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
  taskList.map((task) => {
    if (task.index === index) {
      task.desc = editInput;
    }
    return task;
  });
  localStorage.setItem('tasks', JSON.stringify(taskList));
};

const removeFromLocalStorage = (index) => {
  let taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
  taskList = taskList.filter((task) => {
    if (task.index !== index) {
      return true;
    }
    return false;
  });
  localStorage.setItem('tasks', JSON.stringify(taskList));
  window.location.reload();
};

const resetIndex = () => {
  const taskList = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
  const arr = [];

  taskList.forEach((obj) => {
    const newObj = { ...obj, index: (arr.length + 1).toString() };
    arr.push(newObj);
  });
  localStorage.setItem('tasks', JSON.stringify(arr));
  window.location.reload();
};

export { editLocalStorage, removeFromLocalStorage, resetIndex };
