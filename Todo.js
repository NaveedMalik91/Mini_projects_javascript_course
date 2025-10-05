
const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = todo.done ? "done" : "";
    li.textContent = todo.text;

    const btnGroup = document.createElement("span");
    btnGroup.className = "btn-group";

    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Done";
    doneBtn.className = "doneBtn";
    doneBtn.onclick = () => toggleDone(index);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "deleteBtn";
    deleteBtn.onclick = () => deleteTodo(index);

    btnGroup.appendChild(doneBtn);
    btnGroup.appendChild(deleteBtn);
    li.appendChild(btnGroup);

    todoList.appendChild(li);
  });
}

function addTodo() {
  const text = todoInput.value.trim();
  if (text === "") return;
  todos.push({ text, done: false });
  todoInput.value = "";
  saveAndRender();
}

function toggleDone(index) {
  todos[index].done = !todos[index].done;
  saveAndRender();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  saveAndRender();
}

function saveAndRender() {
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}

addBtn.addEventListener("click", addTodo);
window.addEventListener("load", renderTodos);

