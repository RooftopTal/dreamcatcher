import {Component} from "@angular/core";
import {FirebaseService} from "../firebase/firebase.service";

@Component({
    selector: "answers",
    template: require("./answers.component.html")
})

export class AnswersComponent {
    public model = {
        searchAnswer: ""
    };
    public currentAnswer: string = "";

    constructor(private firebaseService: FirebaseService) { };

    public findAnswer() {
        if (this.model.searchAnswer) {
            this.firebaseService.getAnswer(this.model.searchAnswer.toLowerCase()).then((ans: string) => {
                if (ans) {
                    this.currentAnswer = ans;
                } else {
                    this.currentAnswer = "No answer with that name";
                }
            });
        }
    }
}