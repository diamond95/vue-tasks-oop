<template>

    <div class="main">

        <div>
            <input type="text" class="addInput" v-model="task.title" placeholder="Type something...">
            <button @click="addTask" class="addBtn">Add todo</button>
        </div>

        <div v-if="taskList.incompleteTasks.length > 0">
            <h1>Incompleted:</h1>
            <div class="task" v-for="task in taskList.incompleteTasks" :key="task.id">
                <div :class="{'completed' : task.isCompleted, 'not-completed' : !task.isCompleted}">
                    {{task.taskTitle}}
                    <input type="checkbox" v-model="task.completed" >
                </div>
            </div>
        </div>

        <div v-if="taskList.completedTasks.length > 0">
            <h1>Completed:</h1>

            <div class="task" v-for="task in taskList.completedTasks" :key="task.id">
                <div :class="{'completed' : task.isCompleted, 'not-completed' : !task.isCompleted}">
                    {{task.taskTitle}}
                    <input type="checkbox" v-model="task.completed" >
                </div>
            </div>
        </div>

        <div v-if="taskList.allTasks.length > 0">
            <h1>All tasks:</h1>

            <div class="task" v-for="task in taskList.allTasks" :key="task.id">
                <div :class="{'completed' : task.isCompleted, 'not-completed' : !task.isCompleted}">
                    {{task.taskTitle}}
                </div>
            </div>
        </div>
        <div v-if="taskList.allTasks.length > 0">
            <button @click="clearTasks" class="clearTasksBtn">Remove all tasks</button>
        </div>
    </div>

</template>

<script>
	import TodoList from '@/models/Todo/TodoList';

	export default {
		name    : "TaskList",
		mounted()	{

		},
		data() {
			return {

				task : {
                    title : ""
				},

				taskList : new TodoList()

			};
		},
		methods : {
			addTask: function()	{
				if (this.task.title.trim() === "") return;

				this.taskList.create(this.task.title);

				this.task.title = "";
            },

            clearTasks: function() {

                this.taskList.removeTasks();
            }
		}
	};
</script>

<style scoped lang="css">

    .task {
        flex-direction: column;
    }

    .completed {
        color: green;
        
    }

    .not-completed {
        color: red;
    }

    .addBtn {
        background-color: green;
    }
    *{
        /* padding: 0px; */
        box-sizing: border-box;
        /*margin: 0px 0px 0px 0px; */
    }

    button {
        color: white;
        border: 2px solid black;
        height: 2em;
        margin: 2px;
    }
    input .addInput  {
        height: 2em;
    }

    .clearTasksBtn {
        background-color: red;
    }

</style>
