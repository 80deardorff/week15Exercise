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
        },
        editTask: function(task) {
            var index = this.todoList.indexOf(task);
            var edit = document.getElementsByTagName('span')[index];
            edit.blur();
            this.todoList.splice(index, 1, edit.innerText);
        },
        preventBr: function() {
            if (this.keypress = 13) {
                event.preventDefault();
                return false;
            }
        }
    }
});

// PREVENTS LINEBREAK FROM OCCURRING WHEN HITTING ENTER KEY

// $("span").keypress(function(){
//     if (this.keypress == 13) {
//         event.preventDefault();
//         return false;
//     }
// });
