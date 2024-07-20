import { loginSchema } from '@/features/login/schemas/login.schema';
import type { LoginFormContainer } from '@/features/login/ui/login-form.css';
import { loginFieldsetStyle } from '@/features/login/ui/login-form.css';
import { loginFormContainer } from '@/features/login/ui/login-form.css';
import { NesButton } from '@/shared/ui/button/nes-button';
import { NesInput } from '@/shared/ui/input/nes-input';
import { NesFieldErrorText } from '@/shared/ui/text/nes-field-error-text';
import { NesText } from '@/shared/ui/text/nes-text';
import { useForm } from '@tanstack/react-form';
import { zodValidator } from '@tanstack/zod-form-adapter';
import type { FormEventHandler, FunctionComponent } from 'react';

export type LoginFormProps = LoginFormContainer;

export const LoginForm: FunctionComponent<LoginFormProps> = () => {
  const form = useForm({
    defaultValues: {
      id: '',
      password: '',
    },
    onSubmit: (values) => {
      console.log('### submit', values);
    },
    asyncAlways: true,
    asyncDebounceMs: 300,
    validatorAdapter: zodValidator(),
  });

  const handleSubmit: FormEventHandler = async e => {
    e.preventDefault();
    e.stopPropagation();

    return form.handleSubmit();
  };

  return (
    <form className={loginFormContainer()} onSubmit={handleSubmit}>
      <fieldset className={loginFieldsetStyle()}>
        <legend>
          <NesText>로그인</NesText>
        </legend>
        <form.Field
          children={field => (
            <NesInput name={field.name} value={field.state.value} onBlur={field.handleBlur} onChange={field.handleChange} placeholder="아이디">
              <NesFieldErrorText field={field} />
            </NesInput>
          )}
          name="id"
          validators={{ onChangeAsync: loginSchema.id, onChangeAsyncDebounceMs: 300 }}
        />
        <form.Field
          children={field => (
            <NesInput type="password" name={field.name} value={field.state.value} onBlur={field.handleBlur} onChange={field.handleChange} placeholder="비밀번호">
              <NesFieldErrorText field={field} />
            </NesInput>
          )}
          name="password"
          validators={{ onChangeAsync: loginSchema.password, onChangeAsyncDebounceMs: 300 }}
        />
      </fieldset>
      <form.Subscribe
        children={({ isSubmitting, errorMap }) => (
          <NesButton type="submit" variant="primary">{isSubmitting ? '...' : '로그인'}</NesButton>
        )}
      />
    </form>
  );
};
