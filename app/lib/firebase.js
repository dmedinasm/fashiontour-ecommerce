import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: 'my-ecommerce-57cba.firebaseapp.com',
  projectId: 'my-ecommerce-57cba',
  storageBucket: 'my-ecommerce-57cba.firebasestorage.app',
  messagingSenderId: '835771667925',
  appId: '1:835771667925:web:9a1082a874694a8602195c',
  measurementId: 'G-L7GBGEHQD1'
}

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const firestore = getFirestore(app)
const provider = new GoogleAuthProvider()

export { auth, firestore, provider }
