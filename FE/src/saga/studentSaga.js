import { put, takeLatest } from "@redux-saga/core/effects";
import { StudentAction } from "../action/studentAction"
import { actionTypes } from "../container";
import { itemApi } from "../api"

function* handleGetStudent() {
    try {
        const res = yield itemApi.getStudent(null, null, null)
        yield put(StudentAction.getSuccess({
            listStudents: res.getData
        }))
    } catch (error) {
        yield put(StudentAction.getFailure({
            message: error.message
        }))
    }
}

function* handleAddStudent({ payload }) {
    console.log(payload)
    try {
        yield itemApi.addStudent(null, null, payload)
        yield put(StudentAction.addSuccess())
        yield put(StudentAction.getRequest())
    } catch (error) {
        yield put(StudentAction.addFailure(error))
    }
}
const studentSaga = [
    takeLatest(actionTypes.studentType.GET_REQUEST, handleGetStudent),
    takeLatest(actionTypes.studentType.ADD_REQUEST, handleAddStudent),
]
export default studentSaga