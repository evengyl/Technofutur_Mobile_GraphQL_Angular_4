import { Component } from '@angular/core';
import { Users, UsersService } from './users.service';

@Component({
  selector: 'app-root',
  template: `<ul>
              <li *ngFor="let user of users">
                {{user.name}}
              </li>
            </ul>`
})
export class AppComponent {

  users: Users[] = []; //type normal, pour stocker les users du retour playground apollo

  constructor(private usersService: UsersService) {}

  async ngOnInit(): Promise<void> {
    this.usersService.getUsers().subscribe((res) => {
      this.users = res.data.allUsers
    })
  }

}
