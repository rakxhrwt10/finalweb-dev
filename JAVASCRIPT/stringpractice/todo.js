const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const countSpan = document.getElementById('count');
const clearBtn = document.getElementById('clearBtn');

let todos = [];

function updateCount() {
    countSpan.textContent = `${todos.length} task${todos.length !== 1 ? 's' : ''}`;
}

function render() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');

        const textSpan = document.createElement('span');
        textSpan.textContent = todo.text;
        if (todo.completed) {
            textSpan.classList.add('completed');
        }

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = () => deleteTodo(index);

        li.appendChild(textSpan);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
    updateCount();
}

function addTodo() {
    const text = todoInput.value.trim();
    if (text) {
        todos.push({ text, completed: false });
        todoInput.value = '';
        render();
    }
}

function deleteTodo(index) {
    todos.splice(index, 1);
    render();
}

addBtn.addEventListener('click', addTodo);
todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTodo();
});

clearBtn.addEventListener('click', () => {
    todos = [];
    render();
});

render();
