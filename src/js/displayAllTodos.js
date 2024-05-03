import { getProjects } from './project';
import Todo from './todo';

export default function displayAllTodos() {
    const projects = getProjects();
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
            const completeTodoBtn = document.createElement('button');
            completeTodoBtn.addEventListener('click', () => {
                completeTodo(completeTodoBtn.parentElement);
            });
            completeTodoBtn.textContent = 'complete';
            todo.appendChild(completeTodoBtn);
            projectTodos.appendChild(todo);
        });

        project.appendChild(projectName);
        project.appendChild(projectTodos);
        projectsUl.appendChild(project);
    });
}

function completeTodo(todoElement) {
    const todo = todoElement;
    const todoId = todo.dataset.id;
    const parentProjectName = todo.parentElement.parentElement.dataset.name;

    const projects = getProjects();
    const projectIndex = projects.findIndex(
        (project) => project.name === parentProjectName
    );
    const todoIndex = projects[projectIndex].todos.findIndex(
        (todo) => todo.id === todoId
    );

    projects[projectIndex].todos[todoIndex].isCompleted
        ? (projects[projectIndex].todos[todoIndex].isCompleted = false)
        : (projects[projectIndex].todos[todoIndex].isCompleted = true);

    localStorage.setItem('projects', JSON.stringify(projects));
}
