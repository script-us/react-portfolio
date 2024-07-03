import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  UserInfo,
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, AppDispatch } from '@/redux/store'
import { setColorMode, testApi, updateToken, updateUser } from '.'

const useAuth = () => {
  const dispatch: AppDispatch = useDispatch()
  const auth = getAuth()
  const db = getFirestore()
  const googleProvider = new GoogleAuthProvider()

  googleProvider.setCustomParameters({
    prompt: 'select_account',
  })

  const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)

  const register = async (email: string, password: string) => {
    if (!email || !password) return

    return await createUserWithEmailAndPassword(auth, email, password)
  }

  const createUserDocumentFromAuth = async (userAuth: UserInfo, additionalInformation = {}) => {
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

  const signIn = async (email: string, password: string) => {
    if (!email || !password) return

    return await signInWithEmailAndPassword(auth, email, password)
  }

  const setToken = (data: string) => dispatch(updateToken(data))
  const token = useSelector((state: RootState) => state.auth.token)
  const setUser = (data: UserInfo) => dispatch(updateUser(data))
  const user = useSelector((state: RootState) => state.auth.user)
  const colorMode = useSelector((state: RootState) => state.auth.colorMode)
  const setThemeColorMode = (theme: string) => {
    dispatch(setColorMode(theme))
  }
  const testApiCallWithRedux = () => dispatch(testApi())
  const allTestData = useSelector((state: RootState) => state.auth.testData)

  return {
    setToken,
    signInWithGooglePopup,
    register,
    createUserDocumentFromAuth,
    signIn,
    setUser,
    auth,
    token,
    user,
    colorMode,
    setThemeColorMode,
    testApiCallWithRedux,
    allTestData,
  }
}

export default useAuth
