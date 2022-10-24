import React, { useState } from 'react'
import styled from 'styled-components'
import { useForm, Controller, useFormState } from 'react-hook-form'
import UiIsPassword from '../UI/UiIsPasswod'
import UIButton from '../UI/UIButton'
import { ForgotPasswordModal } from './ForgotPasswordModal'
import UiInput from '../UI/UiInput'

function SignIn() {
   const [value, setOpen] = useState(false)
   const { control, handleSubmit, reset } = useForm({
      mode: 'onblur',
      defaultValues: {
         login: '',
         password: '',
      },
   })
   const { errors } = useFormState({
      control,
   })
   const onSubmit = (data) => {
      console.log(data)
      reset()
   }
   return (
      <>
         <Wrapper onSubmit={handleSubmit(onSubmit)}>
            <PeaksoftParagraph>
               Добро пожаловать в<RedLms>PEAKSOFT LMS !</RedLms>
            </PeaksoftParagraph>
            <WrapperLogin>
               <LabelLogin htmlFor="login">
                  Логин:
                  <Controller
                     control={control}
                     name="login"
                     rules={{
                        required: 'Поле обязательно к заполнению',
                        minLength: { value: 6, message: 'Минимум 6 символов' },
                     }}
                     render={({ field }) => (
                        <UiInput
                           onChange={(e) => field.onChange(e)}
                           onBlur={(e) => field.onBlur(e)}
                           value={field.value}
                           placeholder="Введите логин"
                           type="text"
                           error={!!errors.login?.message}
                        />
                     )}
                  />
                  {errors?.login && (
                     <ErrorMessage>
                        {errors?.login?.message || 'Error'}
                     </ErrorMessage>
                  )}
               </LabelLogin>
               <LabelPassword htmlFor="password">
                  Пароль:
                  <Controller
                     control={control}
                     name="password"
                     rules={{
                        required: 'Поле обязательно к заполнению',
                        minLength: { value: 6, message: 'Минимум 6 символов' },
                     }}
                     render={({ field }) => (
                        <UiIsPassword
                           onChange={(e) => field.onChange(e)}
                           onBlur={(e) => field.onBlur(e)}
                           value={field.value}
                           error={!!errors.password?.message}
                           placeholder="Введите пароль "
                        />
                     )}
                  />
                  {errors?.password && (
                     <ErrorMessage>
                        {errors?.password?.message || 'Error'}
                     </ErrorMessage>
                  )}
               </LabelPassword>
               <ForgotPass>
                  <Paragraph onClick={() => setOpen(true)}>
                     Забыли пароль?
                  </Paragraph>
               </ForgotPass>
            </WrapperLogin>
            <SignInBtn type="submit" variant="contained" background="#3772FF">
               Войти
            </SignInBtn>
         </Wrapper>
         {value && <ForgotPasswordModal open={value} />}
      </>
   )
}

export default SignIn
const Wrapper = styled.form`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 440px;
   height: 100%;
`
const PeaksoftParagraph = styled.h1`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 24px;
   line-height: 33px;
   width: 262px;
   height: 66px;
   margin-bottom: 54px;
`
const RedLms = styled.span`
   color: red;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 600;
   font-size: 24px;
   line-height: 33px;
   margin-left: 6px;
`
const WrapperLogin = styled.div`
   display: flex;
   flex-direction: column;
   width: 440px;
   margin-bottom: 28px;
`
const LabelLogin = styled.label`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 22px;
   color: #6a6a6a;
   display: flex;
   flex-direction: column;
   margin-bottom: 18px;
   div {
      margin-top: 5px;
   }
`
const LabelPassword = styled.label`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 22px;
   color: #6a6a6a;
   display: flex;
   flex-direction: column;
   div {
      margin-top: 5px;
   }
`
const ForgotPass = styled.div`
   width: 100%;
   height: 100%;
   margin-top: 9px;
   display: flex;
   justify-content: end;
`
const Paragraph = styled.p`
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   font-size: 16px;
   line-height: 16px;
   color: #3772ff;
   cursor: pointer;
`
const SignInBtn = styled(UIButton)`
   width: 214px;
   height: 51px;
`
const ErrorMessage = styled.p`
   color: red;
   font-family: 'Open Sans';
   font-style: normal;
   font-weight: 400;
   margin-top: 5px;
   font-size: 16px;
   line-height: 16px;
`
