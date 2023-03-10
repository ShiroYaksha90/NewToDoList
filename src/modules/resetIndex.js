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

export default resetIndex;