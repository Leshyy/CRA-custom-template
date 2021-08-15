import { makeAutoObservable } from 'mobx';

class Store {
  todos: string[] = [];
  constructor() {
    makeAutoObservable(this);
  }

  addTodo(todoName = 'new todo') {
    this.todos.push(todoName);
  }

  removeTodo(todoToRemove: string) {
    this.todos = this.todos.filter((todo) => todo !== todoToRemove);
  }
}

export const store = new Store();
