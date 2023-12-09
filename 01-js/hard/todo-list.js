/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.list = [];
  }
  add(todo){
    this.list.push(todo)
  }
  remove(index){
    if(this.list[index]) this.list.splice(index, 1);
  }
  update(index, updatedTodo){
    if(this.list[index]) this.list[index] = updatedTodo;
  }
  getAll(){
    return this.list;
  }
  get(index){
    return this.list[index] ? this.list[index] : null;
  }
  clear(){
    this.list = [];
  }
}

let todoList = new Todo();
todoList.add('Task 1');
todoList.add('Task 2');
todoList.add('Task 3');
todoList.update(1, 'Updated Task 2');
console.log(todoList.get(1));
console.log(todoList.getAll());
todoList.update(3, 'Invalid Task');
console.log(todoList.getAll());


module.exports = Todo;
