import { firebase } from 'lib'
import { all, put, call } from 'redux-saga/effects'
import { REGISTER } from '../actionTypes'
import {
  error,
  pending,
  success,
  failure
} from 'store/modules/async/actions'
// import { mapUser } from 'store/modules/lib'

export default function * ({ payload }) {
  try {
    yield put(pending(REGISTER))

    const { email, password
      // firstName, lastName, newsletter
    } = payload

    const auth = firebase.auth()
    const signupRes = yield call(
      [auth, auth.createUserWithEmailAndPassword],
      email,
      password
    )

    console.log(signupRes)

    // const user = mapUser(signupRes)
    // yield call(rfb.database.patch, `users/${user.id}`, { firstName, lastName })

    // const fbUser = auth.currentUser
    // yield call([fbUser, fbUser.sendEmailVerification])

    // yield put(signUpSuccess(user))
    yield put(success(REGISTER))
  } catch (err) {
    console.log(err)
    yield all([
      put(failure(REGISTER, { err })),
      put(error(REGISTER, err.code))
    ])
  }
}
