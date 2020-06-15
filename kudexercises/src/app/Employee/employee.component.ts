import { Component } from '@angular/core';
@Component({
    selector : 'my-emp',
    templateUrl : 'employee.component.html'
})
export class EmployeeComponent{
    firstName : string = "Hasmika";
    lastName : string = "Tulasi";
    gender : string = "Female";
    age : number = 3;
}