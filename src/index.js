import displayAllTodos from './js/displayAllTodos';
import Project from './js/project';
import Todo from './js/todo';
import configTodoForm from './js/todoForm';

// if (localStorage.getItem('projects') !== null) {

// }

const defaultProject = new Project('Default', [
    new Todo('Default', 'Default Todo', 'low', 'Default'),
]);

// let projects = localStorage.getItem('projects')
//     ? JSON.parse(localStorage.getItem('projects'))
//     : [defaultProject];

const projects = [];

function addTodo(title, description, priority, projectName) {
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

addTodo('Test', 'This is a test todo', 'high', 'testProject');

addTodo('Test2', 'This is a test todo 2', 'low', 'testProject');

addTodo('Test3', 'This is a test todo 2', 'low', 'testProject v4');

updateTodo('Test', 'This an updated test todo', 'medium', 'testProject');

addTodo(
    'Test78',
    'This is a test todo to display all projects',
    'high',
    'testdisplay'
);

displayAllTodos();
configTodoForm();
// console.table(JSON.parse(localStorage.getItem('projects')));
// projects.forEach((project) => {
//     project.todos.forEach((todo) => {
//         todo.display();
//     });
// });
