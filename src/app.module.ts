import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AnswerComponent, AppRootComponent, FirebaseService, HomeComponent} from "./app";
import {AppRoutingModule} from "./routing/app-routing.module";
import {FormsModule} from "@angular/forms";

@NgModule({
    bootstrap: [
        AppRootComponent
    ],
    declarations: [
        AppRootComponent,
        HomeComponent,
        AnswerComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        FormsModule
    ],
    providers: [
        FirebaseService
    ]
})
export class AppModule {}