import { FC } from 'react';
import './RegistrationForm.css';

const RegistrationForm: FC = () => (
  <div className="registration-form-container">
    <h1>登録フォーム</h1>
    <form>
      <label htmlFor="name">
        名前
        <input type="text" id="name" />
      </label>
      <label htmlFor="email">
        メールアドレス
        <input type="email" id="email" />
      </label>
      <button type="submit">送信</button>
    </form>
  </div>
);

export default RegistrationForm;
