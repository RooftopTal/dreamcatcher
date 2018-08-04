import {TeamAnswers} from "../../src/models/team-answers.model";
import * as admin from "firebase-admin";
import {Answers} from "../../src/models/answers.model";
import DataSnapshot = admin.database.DataSnapshot;


export class DatabaseService {
    public static getAnswers(teamName: string): Promise<Answers> {
        return this.getTeamAnswers(teamName).then( (teamAnswers: TeamAnswers) => {
            return this.findAnswers(teamAnswers).then((answers: Answers) => {
                return answers;
            });
        });
    }

    private static getTeamAnswers(teamName: string): Promise<TeamAnswers>{
        let refPath = "/teams/" + teamName;
        return admin.database().ref(refPath).once("value").then((dataSnapshot: DataSnapshot) => {
            return dataSnapshot.val();
        });
    }

    private static findAnswers(teamAnswers: TeamAnswers): Promise<Answers> {
        let animalsAnswer: Promise<string> = this.findSpecificAnswer("animals", teamAnswers.animals);
        let imaginationAnswer: Promise<string> = this.findSpecificAnswer("imagination", teamAnswers.imagination);

        return Promise.all([animalsAnswer, imaginationAnswer]).then((values: string[]) => {
            return {
                animals: values[0],
                imagination: values[1]
            }
        })
    }

    private static findSpecificAnswer(question: string, teamAnswered: boolean): Promise<string> {
        return teamAnswered ? this.findAnswerToQuestion(question): Promise.resolve("");
    }

    private static findAnswerToQuestion(question: string): Promise<string> {
        let refPath = "/answers/" + question;
        return admin.database().ref(refPath).once("value").then((dataSnapshot: any) => {
            return dataSnapshot.val();
        })
    }

}