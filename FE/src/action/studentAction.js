import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../container";

export const StudentAction = {
    getRequest: createAction(actionTypes.studentType.GET_REQUEST),
    getSuccess: createAction(actionTypes.studentType.GET_SUCCESS),
    getFailure: createAction(actionTypes.studentType.GET_FAILURE),

    addRequest: createAction(actionTypes.studentType.ADD_REQUEST),
    addSuccess: createAction(actionTypes.studentType.ADD_SUCCESS),
    addFailure: createAction(actionTypes.studentType.ADD_FAILURE)
}