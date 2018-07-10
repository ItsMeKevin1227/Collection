import Vue from 'vue';
import VeeValidate, { Validator } from 'vee-validate';
import zh from 'vee-validate/dist/locale/zh_TW'; // 引入中文文件

// 配置中文
Validator.addLocale(zh);

const config = {
  locale: 'zh_TW',
};

Vue.use(VeeValidate, config);

// 自定義validate
const dictionary = {
  zh_CN: {
    messages: {
      email: () => '請輸入正確的電子郵件格式',
      required: field => `請輸入${field}`,
    },
    attributes: {
      email: '電子郵件',
      password: '密碼',
      name: '帳號',
      phone: '手機',
    },
  },
};

Validator.updateDictionary(dictionary);

Validator.extend('phone', {
  messages: {
    zh_CN: field => `${field}必须是11位手机号码`,
  },
  validate: value => value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value),
});
