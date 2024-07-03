// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyABYIjpwoZD1yL7p_UHmo_saoRb42x-xYQ',
  authDomain: 'react-portfolio-e63c5.firebaseapp.com',
  projectId: 'react-portfolio-e63c5',
  storageBucket: 'react-portfolio-e63c5.appspot.com',
  messagingSenderId: '321454016662',
  appId: '1:321454016662:web:529e217975d4eea1431ab7',
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider) //api for sign in with googlePopup
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider) //api for sign in with googleRedirect

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth: any, additionalInformation = {}) => {
  if (!userAuth) return
  const userDocRef = doc(db, 'users', userAuth.uid)
  console.log('userDocRef: ', userDocRef)

  const userSnapShot = await getDoc(userDocRef)
  console.log('userSnapShot: ', userSnapShot)
  console.log('userSnapShot: ', userSnapShot.exists()) //checks user data exist in fire store or not

  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      }) // set user data
    } catch (error) {
      console.log('error: ', (error as Error)?.message)
    }
  }
  return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) return

  return await signInWithEmailAndPassword(auth, email, password)
}
