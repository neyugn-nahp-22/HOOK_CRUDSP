import { Helpers } from "../utils";
import ApiScheme from "./scheme";

export const itemApi = {
  getStudent: Helpers.createApi(ApiScheme.STUDENT.GET_STUDENT),
  addStudent: Helpers.createApi(ApiScheme.STUDENT.ADD_STUDENT),
  delStudent: Helpers.createApi(ApiScheme.STUDENT.DEL_STUDENT),
  putStudent: Helpers.createApi(ApiScheme.STUDENT.PUT_STUDENT),
  importExcel: Helpers.createApi(ApiScheme.STUDENT.IMPORT_EXCEL)
};
