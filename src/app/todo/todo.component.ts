import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    {
      task: 'fold laundry',
      completed: false,
    },
    {
      task: 'exercise',
      completed: false,
    },
    {
      task: 'bake cookies',
      completed: true,
    },
  ];

  search: string;

  constructor() {}

  //////////////-ADD NEW TO-DO ITEMS//////////////////////////
  addTask(form: NgForm) {
    let newTask: Todo = {
      task: form.value.task,
      completed: false,
    };
    this.todos.push(newTask);
  }

  // //////////////-REMOVE TO-DO ITEMS//////////////////////////
  removeTask(index: number) {
    console.log(this.todos.splice(index, 1));
  }

  // //////////////-CHANGING COMPLETED PROPERTIES///////////////
  // completeTask(form: NgForm {

  // }

  // //////////////-SEARCH TO-DO ITEMS//////////////////////////
  setSearch(form: NgForm) {
    this.search = form.value.search.trim().toLowerCase();
  }

  // //////////////-FILTER TO-DO ITEMS//////////////////////////
  filterTask() {
    if (!this.search) {
      return this.todos;
      // } else {
      //   return this.todos.filter((item) => {
      //       let listing = this.todos.toLowerCase().trim();
      //       return this.listing.includes(this.setSearch);
      //     });
    }
  }

  ngOnInit(): void {}
}
