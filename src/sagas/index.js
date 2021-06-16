import { fork, all } from 'redux-saga/effects';

import loginSagas from './login-sagas';

function* rootSagas() {
  yield all([
    // fork(loginSagas)
  ]);
}

export default rootSagas;