import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  name: string = '';

  setValue() {
    this.name = 'Nancy';
  }

  form = {
    name: "",
    age: 5,
    phone:"",
    email:""

  }
  list = [];
  constructor( private router : Router) { }

  ngOnInit(): void {
    let listItem = [];
    

    if(JSON.parse(localStorage.getItem('list'))) {
      listItem = JSON.parse(localStorage.getItem('list')); 
    }
    if(listItem.length > 0) {
      this.list =  listItem;
    }
    
  }


  onSubmit() {
    console.log(this.list);
    this.list.push(this.form);
    localStorage.setItem('list', JSON.stringify(this.list));
    this.router.navigateByUrl('/student-list');
    
  }
}
