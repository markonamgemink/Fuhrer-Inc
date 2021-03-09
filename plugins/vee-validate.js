import { extend } from 'vee-validate'
import {
  required,
  email,
  confirmed,
  alpha_num as alphaNum,
} from 'vee-validate/dist/rules'
extend('required', {
  ...required,
  message: '{_field_} tidak boleh kosong!',
})

extend('email', {
  ...email,
  message: '{_field_} harus berupa email!',
})

extend('min', {
  validate(value, { length }) {
    return value.length >= length
  },
  params: ['length'],
  message: '{_field_} harus terdiri dari 8 karakter!',
})

extend('confirmed', {
  ...confirmed,
  message: 'Password konfirmasi tidak sama!',
})

extend('alpha_num', {
  ...alphaNum,
  message: '{_field_} harus berupa huruf atau angka!',
})
