'use client'
import Link from 'next/link'
import { FieldErrors, useForm } from 'react-hook-form'

import { PAGE_SLUGS } from '@constants/pages'
import { useAuth } from '@hooks/useAuth'
import { IRegisterUser as IFormRegisterInput} from '@store/auth/models'
import { registerFields } from './data'
import { FieldProps } from './models'

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isLoading }
  } = useForm<IFormRegisterInput>({ mode: 'onChange' })
  const { onRegisterSubmit } = useAuth()

  return (
    <div className='max-w-[500px] w-full p-5 rounded-[8px] shadow-[0_0_15px_rgba(0,0,0,0.5)]'>
      <form onSubmit={handleSubmit(onRegisterSubmit)} className='flex flex-col gap-5'>
        {registerFields.map((field: FieldProps, index) => (
          <div key={index} className='relative flex flex-col gap-1'>
            <label htmlFor={field.name} className='text-[12px]'>
              {field.label}
            </label>
            <input
              {...register(field.name as keyof IFormRegisterInput, {
                required: field.required,
                minLength: {
                  value: field.minLength,
                  message: field.message ? field.message : ''
                },
                validate: field.validate ? field.validate : undefined
              })}
              type={field.type}
              id={field.name}
              placeholder={field.label}
              className='p-2 shadow-[0_0_5px_rgba(0,0,0,0.2)] rounded'
            />
            {errors?.[field.name as keyof FieldErrors<IFormRegisterInput>] && (
                <p className='absolute bottom-[-20px] left-0 text-[12px] text-red-600'>
                  {errors?.[field.name as keyof FieldErrors<IFormRegisterInput>]?.message || 'Error!'}
                </p>
            )}
          </div>
        ))}
        <div className='flex justify-start'>
          <button
            disabled={!isValid}
            className='py-2 px-5 rounded bg-green-400 text-white font-medium disabled:bg-gray-600'
          >
            {isLoading ? 'Loading' : 'Register'}
          </button>
        </div>
      </form>
      <div className='mt-3 flex items-center gap-1'>
        <span className='text-[14px] text-gray-400'>Already have an account?</span>
        <Link href={PAGE_SLUGS.login} className='underline'>
          Login
        </Link>
      </div>
    </div>
  )
}

export default Register
