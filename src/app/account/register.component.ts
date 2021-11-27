import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService, AlertService } from '@app/_services';

@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {
    form: FormGroup;
    submitted = false;
    loading = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
       this.form = this.formBuilder.group ({
           nome: ['', Validators.required]
       })
    }

    get f() { 
        return this.form.controls;
    }

    onSubmit() {
        // Verificar se todos campos obrigatórios foram preenchidos
        
        //Service para mandar as informações para o back-end
        //Retorna para nossa tela de Login
    }
}