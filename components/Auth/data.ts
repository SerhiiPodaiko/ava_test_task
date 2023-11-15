import { regexEmail } from '@utils/validations'

export const registerFields = [
  {
    name: 'fullName',
    type: 'text',
    label: 'Full Name',
    required: true,
    minLength: 2,
    message: 'Minimum 2 characters'
  },
  {
    name: 'email',
    type: 'email',
    label: 'E-mail',
    required: true,
    minLength: 3,
    validate: (value: string) => regexEmail.test(value) || 'Invalid email format'
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password',
    required: true,
    minLength: 6,
    message: 'Minimum 6 characters'
  }
]

export const loginFields = [
  {
    name: 'email',
    type: 'email',
    label: 'E-mail',
    required: true,
    minLength: 3,
    validate: (value: string) => regexEmail.test(value) || 'Invalid email format'
  },
  {
    name: 'password',
    type: 'password',
    label: 'Password',
    required: true,
    minLength: 6,
    message: 'Minimum 6 characters'
  }
]