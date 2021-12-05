import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { ToastrService } from "ngx-toastr";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
        private jwtHelper: JwtHelperService,
        private router: Router,
        private toastr: ToastrService
    ) {}

    canActivate() {
        const token = localStorage.getItem("jwt");
        if(token && !this.jwtHelper.isTokenExpired(token)) {
            return true;
        }
        this.toastr.error("You need to log in!");
        this.router.navigate(["/profile/login"]);
        return false;
    }
}