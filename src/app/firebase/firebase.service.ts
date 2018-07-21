import { Injectable } from "@angular/core";
import * as firebase from "firebase";

@Injectable()
export class FirebaseService {
    private firebaseApp: firebase.app.App;

    constructor() {
        this.initialiseApp();
    }

    private initialiseApp(): void {
        this.firebaseApp = firebase.initializeApp({
            apiKey: "AIzaSyATwkxov5QyvVGZTDi9GYP3MrTGyUBY7Bo", // TODO make this a secret?
            authDomain: "puzzlehunt2018.firebaseapp.com",
            databaseURL: "https://puzzlehunt2018.firebaseio.com",
            storageBucket: "puzzlehunt2018.appspot.com",
            messagingSenderId: "default-sender-id"
        });
    }

    public readData<T>(refPath: string): Promise<T> {
        return this.firebaseApp.database().ref(refPath).once("value").then((result) => {
            return result.val();
        });
    }

    public getAnswer(puzzleName: String): Promise<String> {
        return this.readData<String>("/answers/" + puzzleName);
    }
}