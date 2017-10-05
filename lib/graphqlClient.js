import axios from 'axios'
import { FIREBASE_PROJECT_ID } from 'config/firebase'

export default axios.create({
  baseURL: `https://us-central1-${FIREBASE_PROJECT_ID}.cloudfunctions.net/api/`
})
