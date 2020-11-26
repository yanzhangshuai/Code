import {autorun, computed, observable} from "mobx";
class Todo{
    id = Math.random();
    @observable
    title='';
    @observable
    finished = false;
}

class TodoList{
    @observable
    todos=[]
    @computed
    get unfinishedTodoCount(){
        console.log('this.todos.filter(todo =>!todo.finished).length',this.todos.filter(todo =>!todo.finished).length)
            return this.todos.filter(todo =>!todo.finished).length;
    }
}
autorun(() => console.log('我是3123213'));
const store = new TodoList();

store.todos.push(new Todo());
store.todos.push(new Todo());
store.todos.push(new Todo());
store.todos.push(new Todo());
export default store;