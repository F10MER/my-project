const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");
const emptyState = document.querySelector("#empty-state");
const taskCount = document.querySelector("#task-count");

function updateSummary() {
  const total = list.children.length;
  const completed = list.querySelectorAll(".completed").length;
  const noun = total === 1 ? "task" : "tasks";

  taskCount.textContent = completed > 0
    ? `${completed} of ${total} ${noun} complete`
    : `${total} ${noun}`;
  emptyState.hidden = total > 0;
}

function createTodo(text) {
  const item = document.createElement("li");
  const checkbox = document.createElement("input");
  const label = document.createElement("label");
  const deleteButton = document.createElement("button");
  const id = `todo-${Date.now()}-${Math.random().toString(16).slice(2)}`;

  item.className = "todo-item";

  checkbox.type = "checkbox";
  checkbox.id = id;
  checkbox.addEventListener("change", () => {
    item.classList.toggle("completed", checkbox.checked);
    updateSummary();
  });

  label.htmlFor = id;
  label.textContent = text;

  deleteButton.type = "button";
  deleteButton.className = "delete-button";
  deleteButton.textContent = "Delete";
  deleteButton.setAttribute("aria-label", `Delete ${text}`);
  deleteButton.addEventListener("click", () => {
    item.remove();
    updateSummary();
  });

  item.append(checkbox, label, deleteButton);
  list.append(item);
  updateSummary();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = input.value.trim();
  if (!text) {
    return;
  }

  createTodo(text);
  form.reset();
  input.focus();
});

updateSummary();
