import { createAction } from "@reduxjs/toolkit";
import { actionTypes } from "../container";

export const StudentAction = {
  getRequest: createAction(actionTypes.studentType.GET_REQUEST),
  getSuccess: createAction(actionTypes.studentType.GET_SUCCESS),
  getFailure: createAction(actionTypes.studentType.GET_FAILURE),

  addRequest: createAction(actionTypes.studentType.ADD_REQUEST),
  addSuccess: createAction(actionTypes.studentType.ADD_SUCCESS),
  addFailure: createAction(actionTypes.studentType.ADD_FAILURE),

  delRequest: createAction(actionTypes.studentType.DEL_REQUEST),
  delSuccess: createAction(actionTypes.studentType.DEL_SUCCESS),
  delFailure: createAction(actionTypes.studentType.DEL_FAILURE),

  putRequest: createAction(actionTypes.studentType.PUT_REQUEST),
  putSuccess: createAction(actionTypes.studentType.PUT_SUCCESS),
  putFailure: createAction(actionTypes.studentType.PUT_FAILURE),

  importExcelRequest: createAction(actionTypes.studentType.IMPORT_EXCEL_REQUEST),
  importExcelSuccess: createAction(actionTypes.studentType.IMPORT_EXCEL_SUCCESS),
  importExcelFailure: createAction(actionTypes.studentType.IMPORT_EXCEL_FAILURE),
};
