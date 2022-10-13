import { Injectable } from '@angular/core';
import { CrudOperationsUserModel } from './crud-operations-user.model';

@Injectable({
  providedIn: 'root'
})
export class CrudOperationsUserService {
  private users: CrudOperationsUserModel[] = [
    {id: 1, fullName: 'john', emailAddress: 'john@gmail.com'}, 
    {id: 2, fullName: 'steve', emailAddress: 'steve@gmail.com'}, 
    {id: 3, fullName: 'jackson', emailAddress: 'jackson@gmail.com'}, 
    {id: 4, fullName: 'james', emailAddress: 'james@gmail.com'}
  ];

  constructor() { }

  getUsersFromData(): CrudOperationsUserModel[] {
    return this.users;
  }

  addUser(user: CrudOperationsUserModel) {
    user.id = this.users.length + 1;
    this.users.push(user);
  }

  updateUser(user: CrudOperationsUserModel) {
    const index = this.users.findIndex(u => user.id === u.id);
    this.users[index] = user;
  }

  deleteUser(user: CrudOperationsUserModel) {
    this.users.splice(this.users.indexOf(user), 1);
  }
}
