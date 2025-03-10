import { customError } from "../Errors/CustomError.js";
import { StatusCodes } from "http-status-codes";
import { answer, password } from "../answer.js";

export const login = (inputPassword) => {
    if (inputPassword !== password) {
        throw customError(
            "סיסמא שגויה",
            "בלון מאוכזב ממך. תתאמץ יותר!",
            StatusCodes.FORBIDDEN
        );
    };

    return {
        answer
    };
};
