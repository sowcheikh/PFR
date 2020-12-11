import { User } from './user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: User[] = [
    {id: 1, prenom: "Djiadji", nom: "DIAW"},
    {id: 2, prenom: "Djidjia", nom: "WDIA"},
    {id: 3, prenom: "diawdia", nom: "IDAW"}
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
