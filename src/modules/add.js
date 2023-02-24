import {editLocalStorage,removeFromLocalStorage,resetIndex} from './storage.js'
const listContainer = document.querySelector('[data-list]');
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')

let lists = JSON.parse(localStorage.getItem ('tasks')) || []
newListForm.addEventListener('submit', e => {
    e.preventDefault()
    const taskObj = {desc: newListInput.value , completed: false, index: (lists.length +1).toString()}
    if(taskObj.desc === null || taskObj.desc === '') return
    lists.push(taskObj)
    newListInput.value = null
    saveAndRender()
})


let saveAndRender = () => {
    save()
    render()
}

let save = () => {
    localStorage.setItem('tasks', JSON.stringify(lists))
}

let render = () => {
    clearElement (listContainer)
    renderTasks()
}



const renderTasks = () => {
    lists.forEach (list => {
        const listElement = document.createElement('li')
        listElement.id = list.index
        listElement.classList.add('task')
        listElement.innerHTML = `<div class="item">
        <input type="checkbox">
        <p>${list.desc}</p>
        </div>
        <i class="fa-solid fa-ellipsis-vertical"></i>
        <i class="fa-solid fa-trash-clock fa-trash hide"></i>`;
        listContainer.appendChild(listElement)
        const optionButton = listElement.lastElementChild.previousElementSibling
    const deleteButton = listElement.lastElementChild

    optionButton.addEventListener('click', (e) => {
        optionButton.classList.add('hide')
        deleteButton.classList.remove('hide')
        const edit = e.target.previousElementSibling.lastElementChild;
        console.log(e.target.parentElement)
        const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.className = 'edit-input';
    const editIndex = e.target.parentElement.id
    editInput.focus();
    const nameDiv = e.target.previousElementSibling
    edit.style.display = 'none';
    nameDiv.appendChild(editInput)
    editInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
        edit.textContent = editInput.value;
        nameDiv.appendChild(edit);
        nameDiv.removeChild(editInput);
        optionButton.classList.remove('hide');
        deleteButton.classList.add('hide');
        edit.style.display = '';
        }
        // console.log(editInput.value,editIndex)
        editLocalStorage(editInput.value,editIndex)
    })
    })
    deleteButton.addEventListener('click', (e) => {
        const task = e.target.parentElement;
        const index = task.id;
        removeFromLocalStorage(index);
        resetIndex();
        listContainer.removeChild(task);
        
        window.location.reload();
      });
    })
}



let clearElement = (element) => {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}
export { render}