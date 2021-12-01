import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService, AlertService } from '@app/_services';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private accountService: AccountService,
        private alertService: AlertService
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            senha: ['', Validators.required]
        });
    }

    // getter para facilitar o acesso aos campos do formulário
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // reset do alertas ao enviar
        this.alertService.clear();

        // se o formulário for inválido
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        
        let usuario = this.form.value;
        this.accountService.login(usuario);
          
    }
}