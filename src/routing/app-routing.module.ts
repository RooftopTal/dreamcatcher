import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AnswerComponent, HomeComponent} from "../app";

const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "answer",
        component: AnswerComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: true })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }