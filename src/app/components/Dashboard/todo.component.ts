import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  tasks = [
    {  id: 0,
       name: "Read a book",
       done: false
    },
    {  id: 1,
       name: "Learn Angular",
       done: true
    },
    {  id: 2,
       name: "Take out the trash",
       done: false
    }

  ];
  object={
       id: 2,
       name: "Take out the trash",
       done: false
  }
 
  addANewElementOnList = (listItem: string) =>{

        this.tasks.push(this.object={id:this.tasks.length,name:listItem,done:false});
  }

  deleteElement = (id: number) =>{
 
     var selectedObject = this.tasks.find(x => x.id === id);

     if (selectedObject) {

     this.tasks.splice(this.tasks.indexOf(selectedObject),1);

       }
  }

  toggleTaskStatus = (id: Number) =>{
    const affectedTask = this.tasks.find((task) => {
       return task.id === id;  
    })
    
    if(affectedTask){
      affectedTask.done = !affectedTask.done;
    }

  }

  constructor() { }

  ngOnInit(): void {
  }

}
