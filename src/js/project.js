export default class Project {
    constructor(name, todos) {
        this.name = name;
        this.todos = todos ? todos : [];
    }
}

export function getProjects() {
    return JSON.parse(localStorage.getItem('projects'));
}
