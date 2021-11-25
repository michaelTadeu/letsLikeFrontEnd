import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MyMaterialModule } from "../material";
import { AccountRoutingModule } from "./account-routing.module";
import { LayoutComponent } from "./layout.component";
import { LoginComponent } from "./login.component";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccountRoutingModule,
        MyMaterialModule
    ],
    declarations: [
        LayoutComponent,
        LoginComponent
    ]
})
export class AccountModule { } 