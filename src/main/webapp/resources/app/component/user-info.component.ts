import { Component } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
    moduleId: module.id,
    selector: 'app-user-info',
    templateUrl: 'user-info.component.html'
})
export class UserInfoComponent { 
    
    user = new User();
    errorMessage: string;
    successMessage: string;
    
    constructor (
            private userService: UserService) {
        }
    
    onSubmit() {
        console.log("Submit");
        console.dir(this.user);
        this.addUser(this.user);
        
    }
    
    addUser(user: User){
        this.userService.addUser(user)
            .subscribe(
                data => {
                    this.user = data,
                    this.successMessage = `${data.firstName} ${data.lastName} added successfully!`
                },
                error =>  this.errorMessage = error); 
    }
    
}