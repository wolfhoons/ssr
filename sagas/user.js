import axios from 'axios';
import { all, fork, takeLatest, put, delay } from 'redux-saga/effects';

// call 동기, fork 비동기,

function logInAPI() {
  return axios.post('/api/login', data);
}

function* logIn(action) {
  try {
    console.log('saga login', action);
    // const result = yield call(logInAPI, action.data);
    yield delay(1000);
    yield put({
      type: 'LOG_IN_SUCCESS',
    //data: result.data
      data: action.data
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: 'LOG_IN_FAIL',
      error: e.response.data,
    });
  }
}

// takeLatest 마지막 건만 실행한다. 여러번 클릭 시
function* watchLogin() {
  yield takeLatest('LOG_IN_REQUEST', logIn);
}

export default function* userSaga() {
  yield all([
    fork(watchLogin)
  ]);
}