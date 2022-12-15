import { all } from "@redux-saga/core/effects";
import studentSaga from "./studentSaga";

function* rootSaga() {
  yield all([
    ...studentSaga
  ]);
}
export default rootSaga;