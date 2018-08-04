import {Component} from "@angular/core";
import {FirebaseService} from "../firebase/firebase.service";
import {TeamAnswers} from "../../models/team-answers.model";
import {Answers} from "../../models/answers.model";

@Component({
    selector: "answers",
    template: require("./answers.component.html")
})

export class AnswersComponent {
    public model = {
        teamName: "",
        searchAnswer: {
            imagination: "",
            animals: ""
        }
    };
    public message: string;

    constructor(private firebaseService: FirebaseService) { };

    public getTeamAnswers() {
        if (this.model.teamName) {
            this.firebaseService.getAnswers(this.model.teamName).then((ans: Answers) => {
                if (ans) {
                    this.model.searchAnswer = ans;
                    this.model.searchAnswer.animals = ans.animals;
                }
            });
        }
    }
}