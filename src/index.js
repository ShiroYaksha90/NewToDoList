import _ from 'lodash';
import './style.css';

const toDos = [{
  description : 'Fix car',
  completed: false,
  index: 1,
},{
description : 'Finish milestone 1',
completed: false,
index: 2,
},
{ description : 'Take out the trash',
completed: false,
index: 3,
}]

const list = document.querySelector('.todo');
window.addEventListener('DOMContentLoaded', () => {
  const listString = toDos.map((task) => `<li class="task">
<div class="item">
  <input type="checkbox">
  <p>${task.description}</p>
</div>
<i class="fa-solid fa-ellipsis-vertical"></i> </li>`).join('');
list.innerHTML = listString;
})