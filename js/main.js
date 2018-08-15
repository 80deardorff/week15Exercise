var todo = new Vue({
    el:'#todo',
    data: {
        newTask:'',
        todoList:[]
    },
    methods: {
        addTask: function() {
            var task = this.newTask;
            this.todoList.push(task);
            this.newTask = '';
        },
        removeTask: function(task) {
            var index = this.todoList.indexOf(task);
            this.todoList.splice(index, 1);
        },
        removeAllTasks: function() {
            this.todoList = [];
        }
        // editTask: function(task) {
        //     var index = this.todoList.indexOf(task);
        // }
    }
});
