let todos = [];

const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const taskCount = document.getElementById('taskCount');
const clearBtn = document.getElementById('clearBtn');

function updateCount() {
    taskCount.textContent = `${todos.length} task${todos.length !== 1 ? 's' : ''}`;
}

function renderTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${todo}</span>
            <button class="delete-btn" onclick="deleteTodo(${index})">Delete</button>
        `;
        todoList.appendChild(li);
    });
    updateCount();
}

function addTodo() {
    const text = todoInput.value.trim();
    if (text) {
        todos.push(text);
        todoInput.value = '';
        renderTodos();
    }
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

function clearAll() {
    todos = [];
    renderTodos();
}

addBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTodo();
});
clearBtn.addEventListener('click', clearAll);
