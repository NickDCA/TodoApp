import { format } from 'date-fns';
import displayAllTodos from './displayAllTodos';
import { getProjects } from './project';
import { createTodo } from './todoCRUD';

export default function configTodoForm() {
    const formModal = document.querySelector('dialog');
    const projectSelect = document.querySelector('#project');

    const projects = getProjects();

    projects.forEach((p) => {
        const option = document.createElement('option');
        option.value = p.name;
        option.textContent = p.name;
        option.addEventListener('click', () => {
            const newProjectInput = document.querySelector(
                '.input__new-project'
            );
            newProjectInput.classList.remove('input__new-project--active');
        });
        projectSelect.appendChild(option);
    });

    const createProjectOption = document.createElement('option');
    createProjectOption.value = 'new';
    createProjectOption.textContent = 'Create new project';
    createProjectOption.addEventListener('click', () => {
        const newProjectInput = document.querySelector('.input__new-project');
        newProjectInput.classList.add('input__new-project--active');
    });

    projectSelect.appendChild(createProjectOption);

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
    let todoProject = formData.get('project');
    if (todoProject === 'new') {
        todoProject = formData.get('newProject');
    }

    const newTodo = {
        title: todoTitle,
        description: todoDescription,
        dueDate: todoDueDateFormatted,
        priority: todoPriority,
        projectName: todoProject,
    };

    console.log(newTodo);
    createTodo(newTodo);
    displayAllTodos();
}
