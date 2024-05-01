export default function displayAllTodos() {
    const projects = JSON.parse(localStorage.getItem('projects'));
    const projectsUl = document.querySelector('.projects');
    projectsUl.innerHTML = '';

    projects.forEach(({ name, todos }) => {
        const project = document.createElement('li');
        project.dataset.name = name;

        const projectName = document.createElement('h2');
        projectName.classList.add('project__title');
        projectName.textContent = name;
        const projectTodos = document.createElement('ul');
        projectTodos.classList.add('project__todos');

        todos.forEach((t) => {
            const todo = document.createElement('li');
            todo.classList.add('todo');
            todo.dataset.id = t.id;
            todo.innerHTML = `
                <h3 class="todo__title">${t.title}</h3>
                <p class="todo__due-date">${t.dueDate}</p>
                <p class="todo__description">${t.description}</p>
                <p class="todo__priority">${t.priority}</p>
            `;
            projectTodos.appendChild(todo);
        });

        project.appendChild(projectName);
        project.appendChild(projectTodos);
        projectsUl.appendChild(project);
    });
}
