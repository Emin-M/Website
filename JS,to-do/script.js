// UI vars
const form = document.querySelector('#addTaskForm');
const input = document.querySelector('#txtTaskName');
const btnDeleteAll = document.querySelector('#btnDeleteAll');
const taskList = document.querySelector('#task-list');
let items;


//call event listener
eventListeners();

//call load
load();

//Event listener
function eventListeners() {
    //submit event
    form.addEventListener('submit', addNewItem);
    //delete an item
    taskList.addEventListener('click', deleteItem);
    //delete all item
    btnDeleteAll.addEventListener('click', deleteAllItem);
}

function load() {
    items = getItemFromLS();

    items.forEach(function (item) {
        createItem(item);
    });
}

//get items from Local Storage
function getItemFromLS() {
    if (localStorage.getItem('items') === null) {
        items = [];
    } else {
        items = JSON.parse(localStorage.getItem('items'));
    }
    return items;
}

//set item to Local Storage
function setItemToLS(text) {
    items = getItemFromLS();
    items.push(text);
    localStorage.setItem('items', JSON.stringify(items));
}

//delete item from Local Storage
function deleteItemFromLS(text) {
    items = getItemFromLS();
    items.forEach(function (item, index) {
        if (item === text) {
            items.splice(index, 1);
        }
    });
    localStorage.setItem('items', JSON.stringify(items));
}

//create item
function createItem(text) {
    //create li
    const li = document.createElement('li');
    li.className = 'list-group-item list-group-item-secondary';
    li.appendChild(document.createTextNode(text));

    //create a
    const a = document.createElement('a');
    a.className = 'delete-item float-right';
    a.setAttribute('href', '#');
    a.innerHTML = '<i class="fas fa-times"></i>';

    //add a to li
    li.appendChild(a);

    //add li to ul
    taskList.appendChild(li);
}

//add new item
function addNewItem(e) {
    if (input.value === '') {
        alert('add new item');
    } else {
        createItem(input.value);

        //save to Local Storage
        setItemToLS(input.value);
    }
    //clear
    input.value = '';

    e.preventDefault();
}

//delete an item
function deleteItem(e) {

    if (e.target.className === 'fas fa-times') {
        if (confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();

            //delete item from Local Storage
            deleteItemFromLS(e.target.parentElement.parentElement.textContent);
        }
    }

    e.preventDefault();
}

//delete all item
function deleteAllItem(e) {
    if (confirm('Are you sure?')) {
        //taskList.innerHTML = '';
        while (taskList.firstChild) {
            taskList.firstChild.remove();
        }

        //delete all item from Local Storage
        localStorage.clear();
    }
    e.preventDefault();
}