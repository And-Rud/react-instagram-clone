import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { auth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBmIuuclZkJBo9i2M2iJOQtRGgX2IlyBZE',
  authDomain: 'instagram-clone-cb434.firebaseapp.com',
  projectId: 'instagram-clone-cb434',
  storageBucket: 'instagram-clone-cb434.appspot.com',
  messagingSenderId: '447980374149',
  appId: '1:447980374149:web:5c2ec80b77359a66b101ec',
  measurementId: 'G-8TT0Q6404B',
}

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const auth = get
