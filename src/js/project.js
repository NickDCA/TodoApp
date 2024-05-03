export default class Project {
    constructor(name, todos) {
        this.name = name;
        this.todos = todos ? todos : [];
    }
}

export function getProjects() {
    const projects = JSON.parse(localStorage.getItem('projects'));
    if (projects === null) {
        return [];
    } else {
        return projects;
    }
}
