import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})


export class ToDoComponent implements OnInit {
  
  list:any[]=[];
  TodoForm: FormGroup
  constructor(fb: FormBuilder){
      this.TodoForm = fb.group({
       task : ["",Validators.required]
      
  });
    
  }
  ngOnInit(): void{
  }
  addToList() {
	  
			this.list.push(this.TodoForm.value);
       console.log(this.TodoForm.value);
		}
		
  
    deleteTask(index:number) {
      this.list.splice(index as number, 1)
      console.log(index);
    }
} 


