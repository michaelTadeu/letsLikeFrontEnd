import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { RoomsComponent } from './rooms/rooms.component';
import { PageComponent } from './page/page.component';
import { AuthGuard } from './_helpers';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);


const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
   { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },
    {path: 'rooms', component: RoomsComponent, canActivate: [AuthGuard] },
    {path: 'room1', component: PageComponent, canActivate: [AuthGuard], data: {page: 'room1' } },
    {path: 'room2', component: PageComponent, canActivate: [AuthGuard], data: {page: 'room2' }},
    {path: 'room3', component: PageComponent, canActivate: [AuthGuard], data: {page: 'room3' }},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }