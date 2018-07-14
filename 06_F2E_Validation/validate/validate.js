import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate';

// 自定義validate
const dictionary = {
  en: {
    messages: {
      email: () => 'INVALID EMAIL',
      required: field => `${field} CAN NOT BE EMPTY`,
      min: () => 'MINIMUM 8 CHARACTERS',
    },
    attributes: {
      email: 'Account',
      password: 'Password',
      confirmPsw: 'Confirm Password',
      phone: 'Phone',
      name: 'Name',
    },
  },
};

Validator.localize(dictionary);

Validator.extend('phone', {
  messages: {
    en: field => `${field}必須是11位手機號碼`,
  },
  validate: value => value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value),
});

Vue.use(VeeValidate);
