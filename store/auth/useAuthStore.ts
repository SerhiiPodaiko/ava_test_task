import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { IRegisterUser, ILoginUser } from '@store/auth/models'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

interface IAuthStore {
  isLoggedIn: boolean
  users: IRegisterUser[] | []
  setLogin: (user: ILoginUser) => void
  setRegister: (user: IRegisterUser) => void
  logOut: () => void
}

export const useAuthStore = create<IAuthStore>()(
  devtools(
    persist(
      (set, getState) => ({
        isLoggedIn: false,
        users: [],
        setLogin: user => {
          const existingUser = getState().users.find(
            existingUser => existingUser.email === user.email && existingUser.password === user.password
          )
          if (!existingUser) {
            toast.error('Incorrect email or password')
            return
          }

          set(prevState => ({
            users: prevState.users,
            isLoggedIn: true
          }))
          toast.success('You have successfully logged in')
        },
        setRegister: user => {
          const userExists = getState().users.some(
            existingUser => existingUser.email === user.email && existingUser.fullName === user.fullName
          )
          if (userExists) {
            toast.error('A user with the same email address already exists')
            return
          }

          set(prevState => ({
            users: [...prevState.users, user],
            isLoggedIn: true
          }))
          toast.success('Registration is successful')
        },
        logOut: () => set({ isLoggedIn: false })
      }),
      {
        name: 'authStore'
      }
    )
  )
)
