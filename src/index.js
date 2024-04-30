import Project from './js/project';
import Todo from './js/todo';

let todos = [];
let projects = [];

function addTodo(title, description, dueDate, priority, projectName) {
    const todo = new Todo(title, description, dueDate, priority, projectName);
    todos.push(todo);
    if (projects.some((p) => p.name === projectName)) {
        const existingProject = projects.find((p) => p.name === projectName);
        existingProject.todos.push(todo);
    } else {
        const newProject = new Project(projectName, [todo]);
        projects.push(newProject);
    }

    localStorage.setItem('projects', JSON.stringify(projects));
}

function updateTodo(todoTitle, projectName) {}

addTodo('Test', 'This is a test todo', '04-23-1997', 'high', 'testProject');

addTodo('Test2', 'This is a test todo 2', '04-23-19asas', 'low', 'testProject');

addTodo(
    'Test3',
    'This is a test todo 2',
    '04-23-19asas',
    'low',
    'testProject v4'
);

console.table(JSON.parse(localStorage.getItem('projects')));
