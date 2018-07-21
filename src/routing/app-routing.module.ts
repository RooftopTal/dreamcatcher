import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AnswersComponent, HomeComponent} from "../app";

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
        path: "answers",
        component: AnswersComponent
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