import { UserInfo } from 'firebase/auth'
import { StatusEnum } from '@/redux/types'

export interface IAuthState {
  testStatus: StatusEnum
  token: string | null
  user: UserInfo | null
  colorMode: string
  testData: ITestInterface[]
}

export interface ITestInterface {
  userId: number
  title: string
}
