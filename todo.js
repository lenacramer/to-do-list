// const clickMe = document.querySelector('#clickMe');
// const button1 = document.querySelector('#button1');
const testForm = document.querySelector('.testForm');
const input = document.querySelector('.inputText');
const button4 = document.querySelector('#button4');
const trash = document.querySelectorAll('.trashcan');
const form = document.querySelector('.testForm');
const container = document.querySelector('.new-buttons');
const clear = document.querySelector('#clear');
const filter = document.querySelector('.sort');


//mouse over elements
function runClick(e){
    e.target.style.background = "blue";
    e.target.style.color = "yellow";
}
function runHover(e){
    e.target.style.background = "green";
    e.target.style.color = "red";
}
function changeText(e){
    e.target.innerHTML = "Woohoo!"
}
function changeText2(e){
    e.target.innerHTML = "Boohoo"
}

//local storage 

function storeTask(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }
    tasks.push(input.value.toUpperCase());
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

//adding elements
function addTask(e){
    e.preventDefault();
    if (input.value === ''){
        alert('add a task!');
    } else {
        const newContainer = document.createElement('div');
        const newItem = document.createElement('div');
        container.appendChild(newContainer);
        newContainer.appendChild(newItem);
        newContainer.className = "new-task delete"
        newItem.className = "button new-buttons";
        const newTrash = document.createElement('div')
        newTrash.className = "trashcan button"
        newContainer.appendChild(newTrash);
        newItem.innerHTML = `<p>${input.value.toUpperCase()}</p>`;
        newTrash.innerHTML = '<i class="fa fa-trash delete"></i>'
    }
    input.value = ''
    // if (document.querySelector('#header').style.background = 'blue'){
    //     console.log('blue1');
    //     (document.querySelector('#header').style.background = 'red')
    //     console.log('blue2');
    // } else if (document.querySelector('#header').style.background = 'red'){
    //     console.log('red1')
    //     (document.querySelector('#header').style.background = 'yellow')
    //     console.log('red2')
    // } else if (document.querySelector('#header').style.background = 'yellow'){
    //     console.log('yellow')
    //     document.querySelector('#header').style.background = 'blue'
    // }
}


//deleting events
function deleteItem(e){
    if (e.target.parentElement.classList.contains('delete')){
        if (confirm('are you sure?')){
        e.target.parentElement.remove();
        removeFromLS(e.target.parentElement);
    }}
}

function removeFromLS(taskItem){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === `${task}`){
            console.log('yes');
            tasks.splice(index, 1);
        }
});
localStorage.setItem('tasks', JSON.stringify(tasks));

console.log(localStorage);
}

function clearMe(e){
    if (confirm('are you sure?')){
        container.replaceChildren();
        localStorage.clear();
        
        const newContainer = document.createElement('div');
        const newItem = document.createElement('div');
        container.appendChild(newContainer);
        newContainer.appendChild(newItem);
        newContainer.className = "new-task delete"
        newItem.className = "button new-buttons";
        const newTrash = document.createElement('div')
        newTrash.className = "trashcan button"
        newContainer.appendChild(newTrash);
        newItem.innerHTML = `<p>SAMPLE TASK</p>`;
        newTrash.innerHTML = '<i class="fa fa-trash delete"></i>'
    }}

//filter

function filterTasks(e){
    const text = e.target.value.toLowerCase();    
    document.querySelectorAll('.new-task').forEach
    (function(button){
    const item = button.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
        button.style.display = 'flex';
    } else{
        button.style.display = 'none';
    }
})
}

//get Tasks;

function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = []
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.forEach(function(task){
        const newContainer = document.createElement('div');
        const newItem = document.createElement('div');
        container.appendChild(newContainer);
        newContainer.className = "new-task delete"
        newContainer.appendChild(newItem);
        newItem.className = "button delete new-buttons";
        const newTrash = document.createElement('div')
        newTrash.className = "trashcan button"
        newContainer.appendChild(newTrash);
        newItem.innerHTML = `<p>${task}</p>`;
        newTrash.innerHTML = '<i class="fa fa-trash delete"></i>'

    })
}


// event listeners for above functions 

// clickMe.addEventListener('click', runClick);
// clickMe.addEventListener('mouseover', runHover);

// button1.addEventListener('mouseover', runClick);
// button1.addEventListener('mouseclick', runHover);

// button1.addEventListener('mousedown', changeText);
// button1.addEventListener('mouseup', changeText2);

document.addEventListener('click', deleteItem);
document.addEventListener('DOMContentLoaded', getTasks);

/*trash.forEach(can => {can.addEventListener('mouseover', (e) => {e.target.style.color = "blue"});})
trash.forEach(can => {can.addEventListener('mouseout', (e) => {e.target.style.color = "black"});}) */

form.addEventListener('submit', storeTask);
form.addEventListener('submit', addTask);



clear.addEventListener('click', clearMe);

filter.addEventListener('keyup',filterTasks);

