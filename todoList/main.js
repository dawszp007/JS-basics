const ul = document.querySelector('ul');
const input = document.querySelector('input');
const form = document.querySelector('form');
const span = document.querySelector('p span');
const numberLi = document.getElementsByClassName('task');

const toDoArr = []

const addTask = (e) => {
    e.preventDefault()
    const titleTask = input.value;
    if(titleTask === '') return;
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = titleTask +  "<button>X</button>";
    ul.appendChild(task);
    toDoArr.push(task);
    ul.textContent = '';
    toDoArr.forEach((liElement,index) => {
        liElement.dataset.key = index;
        ul.appendChild(liElement);
    })
    input.value = ''
    span.textContent = numberLi.length;

    task.querySelector('button').addEventListener('click', delTask)
}

const delTask = (e) => {
    e.target.parentNode.remove();
    // console.log(e.target.parentNode.dataset.key);
    const index = e.target.parentNode.dataset.key;
    toDoArr.splice(index,1);
    span.textContent = numberLi.length;
    ul.textContent = '';
    toDoArr.forEach((liElement,index) => {
        liElement.dataset.key = index;
        ul.appendChild(liElement);
    })
}

form.addEventListener('submit', addTask);

