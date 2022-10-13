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

  showAddUserForm() {
    if(this.users.length) {
      this.newUser = {};
    }
    this.userForm = true;
    this.isNewUser = true;
  }

  showEditUserForm(user: CrudOperationsUserModel) {
    if(!user) {
      this.userForm = false;
      return;
    }
    this.editUserForm = true;
    this.editedUser = user;
  }

  saveUser(user: CrudOperationsUserModel) {
    if(this.isNewUser) {
      this.userService.addUser(user);
    }
    this.userForm = false;
  }

  updateUser() {
    this.userService.updateUser(this.editedUser);
    this.editUserForm = false;
    this.editedUser = {};
  }

  removeUser(user: CrudOperationsUserModel) {
    this.userService.deleteUser(user);
  }

  cancelEditser() {
    this.editedUser = {};
    this.editUserForm = false;
  }

  cancelNewUser() {
    this.newUser = {};
    this.userForm = false;
  }

}
