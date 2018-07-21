import {Component} from "@angular/core"
import {Link} from "../../models/link.model";

@Component({
    selector: "nav-bar",
    template: require("./nav-bar.component.html")
})
export class NavBarComponent{
    private isCollapsed = true;

    public links: Link[] = [
        {url: "#/home", name: "Home"},
        {url: "#/answers", name: "View answers"}
    ];
}