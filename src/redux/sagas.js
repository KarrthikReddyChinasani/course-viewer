import { call, put, takeEvery, all } from "redux-saga/effects";

import { getAuthors } from "../api/authorApi";
import { getCourses } from "../api/courseApi";

function* fetchAuthors(action) {
  try {
    const authors = yield call(getAuthors);
    yield put({ type: "LOAD_AUTHORS", payload: authors });
  } catch (exception) {
    console.log(exception);
  }
}

function* fetchCourses(action) {
  try {
    const courses = yield call(getCourses);
    yield put({ type: "ALL_COURSES", payload: courses });
  } catch (exception) {
    console.log(exception);
  }
}

function *watchAll() {
  yield all([
    takeEvery("COURSES_FETCH_REQUESTED", fetchCourses),
    takeEvery("AUTHOR_FETCH_REQUESTED", fetchAuthors)
  ]);
}


export default watchAll;
