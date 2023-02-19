const title = document.getElementById("title");
const decription = document.getElementById("decription");
const form = document.querySelector("form");
const container = document.querySelector(".container");

const tasks = localStorage.getItem("tasks")
  ? JSON.parse(localStorage.getItem("tasks"))
  : [];
showalltasks();

function showalltasks() {
  tasks.forEach((value, index) => {
    const div = document.createElement("div");
    div.setAttribute("class", "task");

    const innerdiv = document.createElement("div");
    div.append(innerdiv);

    const p = document.createElement("p");
    p.innerText = value.title;
    innerdiv.append(p);

    const span = document.createElement("p");
    span.innerText = value.title;
    innerdiv.append(span);

    const btn = document.createElement("button");
    btn.setAttribute("class", "deleteBtn");
    btn.innerText = "-";

    btn.addEventListener("click", () => {
      removeTask();
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));

      showalltasks();
    });

    div.append(btn);
    container.append(div);
  });
}
function removeTask() {
  tasks.forEach(() => {
    const div = document.querySelector(".task");
    div.remove();
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  removeTask();
  tasks.push({
    title: title.value,
    description: decription.value,
  });
  console.log(tasks);
  //usin local storage to save the works
  localStorage.setItem("tasks", JSON.stringify(tasks));
  showalltasks();
});
