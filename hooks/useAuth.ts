import { SubmitHandler } from 'react-hook-form'

import { useAuthStore } from '@store/auth/useAuthStore'
import { IRegisterUser as IFormRegisterInput, ILoginUser as IFormLoginInput } from '@store/auth/models'

export const useAuth = () => {
  const authStore = useAuthStore()

  const onLoginSubmit: SubmitHandler<IFormLoginInput> = data => authStore.setLogin(data)

  const onRegisterSubmit: SubmitHandler<IFormRegisterInput> = data => authStore.setRegister(data)

  return {
    onLoginSubmit,
    onRegisterSubmit
  }
}
