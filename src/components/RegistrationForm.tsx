/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import { FC, useCallback, useMemo } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';
import './RegistrationForm.css';

type FormData = {
  name: string;
  email: string;
  file: File | null;
};

const RegistrationForm: FC = () => {
  const { register, handleSubmit, setValue, watch } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      file: null,
    },
  });

  const onDrop = useCallback((files: File[]) => {
    if (files.length > 0) {
      setValue('file', files[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/png': ['.png', '.jpg', '.jpeg'],
    },
  });

  const dropAreaBackground = isDragActive ? 'gray' : '';

  const watchFile = watch('file');

  const filePreview = useMemo(() => {
    if (!watchFile) {
      return <></>;
    }

    const url = URL.createObjectURL(watchFile);

    return <img src={url} alt="" className="file-preview" />;
  }, [watchFile]);

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
        <p className="drop-area-title">プロフィール画像</p>
        <div {...getRootProps()} className={`drop-area ${dropAreaBackground}`}>
          <input {...getInputProps} />
          <p>
            ファイルを選択または
            <br />
            ドラッグアンドドロップ
          </p>
        </div>
        {filePreview}
        <button type="submit">送信</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
