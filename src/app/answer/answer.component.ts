import {Component} from "@angular/core";
import {FirebaseService} from "../firebase/firebase.service";

@Component({
    selector: "answer",
    template: require("./answer.component.html")
})

export class AnswerComponent {
    public model = {
        searchAnswer: ""
    };
    public currentAnswer: string = "";

    constructor(private firebaseService: FirebaseService) { };

    public findAnswer() {
        if (this.model.searchAnswer) {
            this.firebaseService.getAnswer(this.model.searchAnswer).then((ans: string) => {
                if (ans) {
                    this.currentAnswer = ans;
                } else {
                    this.currentAnswer = "No answer with that name";
                }
            });
        }
    }
}