import { format } from 'date-fns';
import displayAllTodos from './displayAllTodos';
import { getProjects } from './project';
import { createTodo } from './todoCRUD';

export default function configTodoForm() {
    const formModal = document.querySelector('dialog');
    const modalProjectSelect = document.querySelector('#project');
    modalProjectSelect.innerHTML = `
        <option value="default" selected>Default</option>
    `;
    const projects = getProjects();

    projects !== null
        ? projects.forEach((p) => {
              const option = document.createElement('option');
              option.value = p.name;
              option.textContent = p.name;
              modalProjectSelect.appendChild(option);
          })
        : '';

    const addTodoBtn = document.querySelector('#addTodo');
    addTodoBtn.addEventListener('click', () => formModal.showModal());
    const cancelTodoAddBtn = document.querySelector('#cancelAddTodo');
    cancelTodoAddBtn.addEventListener('click', () => formModal.close());

    const submitTodoBtn = document.querySelector('#submitTodo');
    submitTodoBtn.addEventListener('click', () => handleSubmitInputs());
}

function handleSubmitInputs() {
    const form = document.querySelector('form');
    const formData = new FormData(form);
    console.table(formData);
    const todoTitle = formData.get('title');
    const todoDescription = formData.get('description');

    const todoDueDate = formData.get('dueDate');
    const dateComponents = todoDueDate.split('-');
    const day = parseInt(dateComponents[2]);
    const month = parseInt(dateComponents[1]) - 1;
    const year = parseInt(dateComponents[0]);
    const todoDueDateFormatted = format(
        new Date(year, month, day),
        'dd-MM-yyyy'
    );

    const todoPriority = formData.get('priority');

    // CHECK FOR EXISTING PROJECTS, IF DOESN'T EXIST, CREATE A NEW PROJECT
    const todoProject = formData.get('project');

    const newTodo = {
        title: todoTitle,
        description: todoDescription,
        dueDate: todoDueDateFormatted,
        priority: todoPriority,
        project: todoProject,
    };

    createTodo(newTodo);
    displayAllTodos();
}
