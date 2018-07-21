import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AnswersComponent, AppRootComponent, FirebaseService, HomeComponent} from "./app";
import {AppRoutingModule} from "./routing/app-routing.module";
import {FormsModule} from "@angular/forms";
import {NavBarComponent} from "./app/navbar/nav-bar.component";
import {CollapseModule} from "ngx-bootstrap";

@NgModule({
    bootstrap: [
        AppRootComponent
    ],
    declarations: [
        AnswersComponent,
        AppRootComponent,
        HomeComponent,
        NavBarComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        CollapseModule,
        FormsModule
    ],
    providers: [
        FirebaseService
    ]
})
export class AppModule {}