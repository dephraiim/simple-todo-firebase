window.addEventListener("load", () => {
  const form = document.querySelector("#task-form");
  const input = document.querySelector("#task-input");
  const listElement = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const task = input.value;

    if (!task) {
      alert("Please enter a new Task");
      return;
    }

    const taskElement = document.createElement("div");
    taskElement.classList.add("task");

    // Content
    const taskContentElement = document.createElement("div");
    taskContentElement.innerText = task; // inner text
    taskContentElement.classList.add("content");

    // Button
    const taskButtonElement = document.createElement("button");
    taskButtonElement.innerText = "Delete";
    taskButtonElement.classList.add("delete");

    taskElement.appendChild(taskContentElement);
    taskElement.appendChild(taskButtonElement);

    listElement.appendChild(taskElement);

    input.value = "";

    taskButtonElement.addEventListener("click", () => {
      listElement.removeChild(taskElement);
    });
  });
});
