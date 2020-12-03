import Task from './../Task/Task'


export default class TodoList {


    constructor() {

        /**
         * @type {Array<Task>}
         */
        this.tasks = [];
    }

    create(title) {

        const task = new Task({
            id: this.tasks.length,
            title: title,
            completed: false
        })

        this.addTask(task);

        return task;
    }

    /**
     * @param {Task} task
     */
    addTask(task) {

        this.tasks.push(task);
    }

    removeTasks() {

        this.tasks = [];
    }


    addMultipleTasks(tasks) {

        this.tasks.push(...tasks);
    }


    get completedTasks() {

        return this.tasks.filter(t => t.isCompleted);
    }

    get incompleteTasks() {

        return this.tasks.filter(t => !t.isCompleted);
    }

    get allTasks() {

        return this.tasks;
    }
}