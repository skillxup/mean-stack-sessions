import { Component, OnInit } from '@angular/core';
import { CrudOperationsUserModel } from './crud-operations-user.model';
import { CrudOperationsUserService } from './crud-operations-user.service';

@Component({
  selector: 'app-crud-operations-user',
  templateUrl: './crud-operations-user.component.html',
  styleUrls: ['./crud-operations-user.component.css']
})
export class CrudOperationsUserComponent implements OnInit {
  users: CrudOperationsUserModel[];

  userForm: boolean;
  isNewUser: boolean;
  newUser: any = {};

  editUserForm: boolean;
  editedUser: any = {}

  constructor(
    private userService: CrudOperationsUserService
  ) { }

  ngOnInit() {
    this.users = this.getUsers();
  }

  getUsers(): CrudOperationsUserModel[] {
    return this.userService.getUsersFromData();
  }
}
