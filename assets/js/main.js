const todoForm = document.querySelector('#todoForm');
const todoInput = document.querySelector('.new-todo');
const todoList = document.querySelector('.todo-list');

function addTodo(event) {
    event.preventDefault();

    if (todoInput.value === '') {
        alert('boş bırakılamaz');
        return;
    }

    todoList.innerHTML += `<li>
        <div class="view">
        <input class="toggle" type="checkbox">
        <label class="todoLabel">${todoInput.value}</label>
        <button class="destroy"></button>
        </div>
        <input class="edit" value="${todoInput.value}">
    </li>`;

    todoInput.value = '';

    bindClicks();
    saveTodoLocal();
}

todoForm.addEventListener('submit', addTodo);

for (const filter of document.querySelectorAll('.filters input')) {
    filter.addEventListener('click', function(){
        // todoList.dataset.filter = this.value;

        todoList.classList.value = 'todo-list ' + this.value;
    });
}

function markTodo() {
    this.parentElement.parentElement.classList.toggle('completed');
}

function removeTodo() {
    this.parentElement.parentElement.remove();
}

function showTodoEdit() {
    this.parentElement.classList.add('editing');

    const currValue = this.nextElementSibling.value;
    this.nextElementSibling.value = '';
    this.nextElementSibling.value = currValue;
    this.nextElementSibling.focus();
}

function showTodoEdit2(element) {
    element.parentElement.parentElement.classList.add('editing');

    
}

function editTodo(e) {
    if(e.key === 'Enter') {
        this.previousElementSibling.querySelector('label').innerText = this.value;
        this.parentElement.classList.remove('editing');
    }
}

todoList.addEventListener('dblclick', delegateDblClick);
function delegateDblClick(e) {
    const targetEl = e.target;

    if(targetEl.classList.contains('todoLabel')) {
        showTodoEdit2(targetEl);
    }
}

// bind --> baglamak
function bindClicks() {
    for (const btn of document.querySelectorAll('.destroy')) {
        btn.addEventListener('click', removeTodo);
    }

    for (const btn of document.querySelectorAll('.toggle')) {
        btn.addEventListener('click', markTodo);
    }

    //document.querySelectorAll('.view').forEach(x => x.addEventListener('dblclick', showTodoEdit));

    document.querySelectorAll('.edit').forEach(x => x.addEventListener('keydown', editTodo));

}

function saveTodoLocal(todo) {
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo);
    localStorage.getItem('todos', localStorage.getItem(todos));

}

function getTodos() {
    let todos;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.forEach((todo) => {
        for (const filter of document.querySelectorAll('.filters input')) {
            filter.addEventListener('click', function(){
                todoList.classList.value = 'todo-list ' + this.value;
            });
        }
       
        function markTodo() {
            this.parentElement.parentElement.classList.toggle('completed');
        }
        
        function removeTodo() {
            this.parentElement.parentElement.remove();
        }
        
        function showTodoEdit() {
            this.parentElement.classList.add('editing');
        
            const currValue = this.nextElementSibling.value;
            this.nextElementSibling.value = '';
            this.nextElementSibling.value = currValue;
            this.nextElementSibling.focus();
        }
        
        function showTodoEdit2(element) {
            element.parentElement.parentElement.classList.add('editing');
        
            
        }
        
        function editTodo(e) {
            if(e.key === 'Enter') {
                this.previousElementSibling.querySelector('label').innerText = this.value;
                this.parentElement.classList.remove('editing');
            }
        }
        
        todoList.addEventListener('dblclick', delegateDblClick);
        function delegateDblClick(e) {
            const targetEl = e.target;
        
            if(targetEl.classList.contains('todoLabel')) {
                showTodoEdit2(targetEl);
            }
        }
        
    });
   
}

getTodos();


function remoLocal(todos){
    let removeItem;
    if(localStorage.getItem('todos') === null) {
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todos);
    localStorage.getItem('todos', localStorage.removeItem(todos));
}



