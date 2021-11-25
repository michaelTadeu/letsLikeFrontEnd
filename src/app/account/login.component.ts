import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AccountService } from '../services/account.service';
import { AlertService } from '../services/alert.service';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    form!: FormGroup;
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
            password: ['', Validators.required]
        });
    }

    // getter de conveniência para fácil acesso aos campos do formulário
    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;

        // Reset dos alertas no OnSubmit
        this.alertService.clear();

        // Verificação se o formulário for inválido
        if (this.form.invalid) {
            return;
        }

        this.loading = true;
        this.accountService.login('this.f.username.value', 'this.f.password.value')
            .pipe(first())
            .subscribe({
                next: () => {
                    // url de retorno dos parâmetros de consulta ou padrão para a página inicial
                    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                    this.router.navigateByUrl(returnUrl);
                },
                error: (error: any) => {
                    this.alertService.error(error);
                    this.loading = false;
                }
            });
    }
}