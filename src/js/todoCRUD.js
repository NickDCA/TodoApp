import Project, { getProjects } from './project';
import Todo from './todo';

const projects = [];

function createTodo(title, description, priority, projectName) {
    const todo = new Todo(title, description, priority, projectName);

    if (projects.some((p) => p.name === projectName)) {
        const existingProject = projects.find((p) => p.name === projectName);
        existingProject.todos.push(todo);
    } else {
        const newProject = new Project(projectName, [todo]);
        projects.push(newProject);
    }

    localStorage.setItem('projects', JSON.stringify(projects));
}

function updateTodo(title, description, priority, projectName) {
    const projectIndex = projects.findIndex(
        (project) => project.name === projectName
    );

    const todoIndex = projects[projectIndex].todos.findIndex(
        (todo) => todo.title === title
    );

    const updatedTodo = new Todo(title, description, priority, projectName);

    projects[projectIndex].todos[todoIndex] = updatedTodo;

    localStorage.setItem('projects', JSON.stringify(projects));
}

function deleteTodo(id, projectName) {
    const projectIndex = projects.findIndex(
        (project) => project.name === projectName
    );
    const todoIndex = projects[projectIndex].todos.findIndex(
        (todo) => todo.id === id
    );
    console.table(projects[projectIndex].todos);

    projects[projectIndex].todos.splice(todoIndex, 1);
    console.table(projects[projectIndex].todos);

    localStorage.setItem('projects', JSON.stringify(projects));
}

export { createTodo, deleteTodo, updateTodo };
