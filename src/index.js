import { format } from 'date-fns';
import displayAllTodos from './js/displayAllTodos';
import Project, { getProjects } from './js/project';
import Todo from './js/todo';
import { createTodo, deleteTodo, updateTodo } from './js/todoCRUD';
import configTodoForm from './js/todoForm';
import './styles/style.scss';

const projects = getProjects();
if (projects.length === 0) {
    const defaultTodo = {
        title: 'Default Todo',
        description: 'This is a default example todo!',
        dueDate: format(new Date(), 'dd-MM-yyyy'),
        priority: 'low',
        projectName: 'Default',
    };
    createTodo(defaultTodo);
}

// createTodo('Test', 'This is a test todo', 'high', 'testProject');

// createTodo('Test2', 'This is a test todo 2', 'low', 'testProject');

// createTodo('Test3', 'This is a test todo 2', 'low', 'testProject v4');

// updateTodo('Test', 'This an updated test todo', 'medium', 'testProject');

// createTodo(
//     'Test78',
//     'This is a test todo to display all projects',
//     'high',
//     'testdisplay'
// );

displayAllTodos();
configTodoForm();
// console.table(JSON.parse(localStorage.getItem('projects')));
// projects.forEach((project) => {
//     project.todos.forEach((todo) => {
//         todo.display();
//     });
// });
