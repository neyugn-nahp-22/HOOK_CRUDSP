import { put, takeLatest } from "@redux-saga/core/effects";
import { StudentAction } from "../action/studentAction";
import { actionTypes } from "../container";
import { itemApi } from "../api";

function* handleGetStudent() {
  try {
    const res = yield itemApi.getStudent(null, null, null);
    yield put(
      StudentAction.getSuccess({
        listStudents: res.getData,
      })
    );
  } catch (error) {
    yield put(
      StudentAction.getFailure({
        message: error.message,
      })
    );
  }
}

function* handleAddStudent({ payload }) {
  console.log(payload);
  try {
    yield itemApi.addStudent(null, null, payload);
    yield put(StudentAction.addSuccess());
    yield put(StudentAction.getRequest());
  } catch (error) {
    yield put(StudentAction.addFailure(error));
  }
}

function* handleDelStudent({ payload }) {
  try {
    yield itemApi.delStudent({ id: payload.id }, null, payload);
    // console.log(payload, "id");
    yield put(StudentAction.delSuccess());
    yield put(StudentAction.getRequest());
  } catch (error) {
    yield put(StudentAction.delFailure(error));
  }
}

function* handlePutStudent({ payload }) {
  try {
    yield itemApi.putStudent({ id: payload.id }, null, payload);
    // console.log(payload.id, "id");
    yield put(StudentAction.putSuccess());
    yield put(StudentAction.getRequest());
  } catch (error) {
    yield put(StudentAction.putFailure(error));
  }
}

function* handleAddExcel({ payload }) {
  try {
    const formData = new FormData();
    formData.append("file", payload.file.file[0]);
    console.log(payload.file, "payload");
    yield itemApi.importExcel(null, null, formData);
    yield put(StudentAction.importExcelSuccess());
    yield put(StudentAction.getRequest());
  } catch (error) {
    yield put(StudentAction.importExcelFailure(error));
  }
}

const studentSaga = [
  takeLatest(actionTypes.studentType.GET_REQUEST, handleGetStudent),
  takeLatest(actionTypes.studentType.ADD_REQUEST, handleAddStudent),
  takeLatest(actionTypes.studentType.DEL_REQUEST, handleDelStudent),
  takeLatest(actionTypes.studentType.PUT_REQUEST, handlePutStudent),
  takeLatest(actionTypes.studentType.IMPORT_EXCEL_REQUEST, handleAddExcel),
];
export default studentSaga;
