import * as firebase from 'firebase'
import CONFIG from 'config/firebase'

console.log(firebase.apps)

if (!firebase.apps.length) {
  console.log(CONFIG)
  const test = firebase.initializeApp(CONFIG)
  console.log(test)
}

export default firebase
