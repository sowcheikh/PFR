"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(id, email, password, firstName, lastName, status, genre, archive, avatar, profile) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.status = status;
        this.genre = genre;
        this.archive = archive;
        this.avatar = avatar;
        this.profile = profile;
    }
    return User;
}());
exports.User = User;
