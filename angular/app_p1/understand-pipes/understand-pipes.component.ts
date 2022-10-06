import { Component, OnInit } from '@angular/core';
import { resolve, reject } from "q";

@Component({
  selector: 'app-understand-pipes',
  templateUrl: './understand-pipes.component.html',
  styleUrls: ['./understand-pipes.component.css']
})
export class UnderstandPipesComponent implements OnInit {
  username = "AndreAs";
  fullname = "andREas fellIpe giRoN";

  arrNums =[9, 6, 3, 5, 6, 2, 1];
  pi = Math.PI;
  salary = 3354.65;

  person = {
    firstName: "AfREs", 
    lastName: "GirNo"
  };

  valuePromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Success!"), 1000);
  });

  curDate = new Date();

  constructor() { }

  ngOnInit() {
  }

}
