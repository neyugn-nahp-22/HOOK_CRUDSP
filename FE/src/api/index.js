import { Helpers } from "../utils";
import ApiScheme from "./scheme"

export const itemApi = {
    getStudent: Helpers.createApi(ApiScheme.STUDENT.GET_STUDENT),
    addStudent: Helpers.createApi(ApiScheme.STUDENT.ADD_STUDENT)
}