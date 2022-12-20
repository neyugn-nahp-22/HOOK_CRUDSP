import { actionTypes } from "../../container";

const { studentType } = actionTypes;
const INITIAL_STATE = {
  listStudent: [],
  isFetching: false,
  isError: false,
  message: "",
};
export default function HrReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case studentType.GET_REQUEST:
    case studentType.ADD_REQUEST:
    case studentType.DEL_REQUEST:
    case studentType.PUT_REQUEST:
    case studentType.IMPORT_EXCEL_REQUEST:
      return {
        ...state,
        isFetching: true,
        isError: false,
        message: "",
      };
    case studentType.GET_SUCCESS:
      return {
        ...state,
        isFetching: false,
        listStudent: payload.listStudents,
      };
    case studentType.ADD_SUCCESS:
    case studentType.DEL_SUCCESS:
    case studentType.PUT_SUCCESS:
      return {
        ...state,
        isFetching: false,
      };
    case studentType.GET_FAILURE:
    case studentType.ADD_FAILURE:
    case studentType.DEL_FAILURE:
    case studentType.PUT_FAILURE:
      return {
        ...state,
        isFetching: false,
        isError: true,
        message: payload.message,
      };
    default:
      return state;
  }
}
