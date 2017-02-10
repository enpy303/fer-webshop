"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var user_1 = require("../model/user");
var user_service_1 = require("../service/user.service");
var UserInfoComponent = (function () {
    function UserInfoComponent(userService) {
        this.userService = userService;
        this.user = new user_1.User();
    }
    UserInfoComponent.prototype.onSubmit = function () {
        console.log("Submit");
        console.dir(this.user);
        this.addUser(this.user);
    };
    UserInfoComponent.prototype.addUser = function (user) {
        var _this = this;
        this.userService.addUser(user)
            .subscribe(function (data) {
            _this.user = data,
                _this.successMessage = data.firstName + " " + data.lastName + " added successfully!";
        }, function (error) { return _this.errorMessage = error; });
    };
    return UserInfoComponent;
}());
UserInfoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-user-info',
        templateUrl: 'user-info.component.html'
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserInfoComponent);
exports.UserInfoComponent = UserInfoComponent;
