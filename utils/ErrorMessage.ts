import * as React from "react";
import { Alert } from "react-native";

export const errorMessage = (error: any) => {
    let error_message = '';

    if (error.request) {
        error_message = "Sorry something went wrong, Please make sure you are connected to the internet";
    } else {
        error_message = "Something went wrong";
    }

    if (error_message !== "") Alert.alert("MedMover", error_message);
}