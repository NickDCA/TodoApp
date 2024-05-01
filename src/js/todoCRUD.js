import Project from './project';
import Todo from './todo';

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

    projects[projectIndex].todos.splice(todoIndex, 1);

    localStorage.setItem('projects', JSON.stringify(projects));
}
