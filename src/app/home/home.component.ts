import { Component } from '@angular/core';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    projetos = ['Projeto Lets Code .Net', 'Projeto Lets Code Java', 'Projeto Lets Code Angular'];
    constructor() {
    }
}