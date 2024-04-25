import Project from './js/project';
import Todo from './js/todo';

let todos = [];
let projects = [];

// const myTodo = new Todo(
//     'Test todo',
//     'This is a test todo',
//     '04-23-1997',
//     'high'
// );
// myTodo.displayTodo();

// localStorage.setItem(myTodo.title, JSON.stringify(myTodo));
// console.log(JSON.parse(localStorage.getItem(myTodo.title)));

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

    projects.forEach((project) =>
        localStorage.setItem(project.name, JSON.stringify(project))
    );
}

addTodo('Test', 'This is a test todo', '04-23-1997', 'high', 'testProject');
console.table(todos);
console.table(projects);
console.log(JSON.parse(localStorage.getItem('testProject')));

addTodo('Test2', 'This is a test todo 2', '04-23-19asas', 'low', 'testProject');
console.table(todos);
console.table(projects);
console.log(JSON.parse(localStorage.getItem('testProject')));

addTodo(
    'Test3',
    'This is a test todo 2',
    '04-23-19asas',
    'low',
    'testProject v4'
);
console.table(todos);
console.table(projects);
console.log(JSON.parse(localStorage.getItem('testProject v4')));
