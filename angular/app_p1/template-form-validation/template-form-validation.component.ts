import { Component, OnInit } from '@angular/core';

export class User {
  public name: string;
  public email: string;
  public password: string;
  public hobbies: string;
}

@Component({
  selector: 'app-template-form-validation',
  templateUrl: './template-form-validation.component.html',
  styleUrls: ['./template-form-validation.component.css']
})
export class TemplateFormValidationComponent implements OnInit {
  user = new User();
  hobbies: string[] = [
    "acrobatics", 
    "acting", 
    "animation", 
    "astronomy", 
    "baking"
  ];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(data: any) {
    console.log(data);
  }
}
