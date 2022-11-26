/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './RegistrationForm.css';

type FormData = {
  name: string;
  email: string;
};

const RegistrationForm: FC = () => {
  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  return (
    <div className="registration-form-container">
      <h1>登録フォーム</h1>
      <form onSubmit={handleSubmit(onSubmit)} action="/">
        <label htmlFor="name">
          名前
          <input type="text" id="name" {...register('name')} />
        </label>
        <label htmlFor="email">
          メールアドレス
          <input type="email" id="email" {...register('email')} />
        </label>
        <button type="submit">送信</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
