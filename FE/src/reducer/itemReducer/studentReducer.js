import { actionTypes } from "../../container";

const { studentType } = actionTypes;
const INITIAL_STATE = {
    listStudent: [],
    isFetching: false,
    isError: false,
    message: ""
}
export default function HrReducer(
    state = INITIAL_STATE,
    { type, payload }

) {
    switch (type) {
        case studentType.GET_REQUEST:
        case studentType.ADD_REQUEST:
            return {
                ...state,
                isFetching: true,
                isError: false,
                message: ""
            }
        case studentType.GET_SUCCESS:
            return {
                ...state,
                isFetching: false,
                listStudent: payload.listStudents
            }
        case studentType.ADD_SUCCESS:
            return {
                ...state,
                isFetching: false,
            }
        case studentType.GET_FAILURE:
        case studentType.ADD_FAILURE:
            return {
                ...state,
                isFetching: false,
                isError: true,
                message: payload.message
            }
        default:
            return state
    }
}