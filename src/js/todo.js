import { format } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';

export default class Todo {
    constructor(title, description, priority, dueDate, project) {
        this.id = uuidv4();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.project = project;
        this.isCompleted = false;
    }

    display() {
        console.table(this);
    }

    complete() {
        this.complete = true;
    }
}
