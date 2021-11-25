import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projetos = ['Projeto Lets Code .Net', 'Projeto Lets Code Java', 'Projeto Lets Code Angular'];

  // Criar nosso Model de Usuário
  user: User;

  constructor(private accountService: AccountService) {
      this.user = this.accountService.userValue;
  }

  ngOnInit(): void {
    //Buscar os Projetos
  }

}
