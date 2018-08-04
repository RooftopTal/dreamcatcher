import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import {DatabaseService} from "./services/database.service";

admin.initializeApp();

exports.getAnswers = functions.https.onCall((data, context) => {
    return DatabaseService.getAnswers(data.teamName);
});