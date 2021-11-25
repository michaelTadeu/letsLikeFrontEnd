import { Component } from '@angular/core';
import { User } from './models/user';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user!: User;

    constructor(private accountService: AccountService) {
        this.accountService.user.subscribe((x:any) => this.user = x);
    }

    logout() {
        this.accountService.logout();
    }
}
