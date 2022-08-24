import { Formik, Field, Form } from "formik";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { BackgroundPage, Errors, FormStyle, LoginContainer, LogoAndText, Signup } from "./Login.Styled";
import { Logo } from "../../components/logo/Logo";
import { ImgLogin } from "../../components/imgLogin/ImgLogin";
import { Button } from "../../components/button/Button";
import { SignInSchema } from '../../utils/Schemas'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

const Login = () => {
  const [typePassword, setTypePassword] = useState('password');
  const {handleLogin} = useContext(AuthContext)
  const navigate = useNavigate()

  function GoToRegister(){
    navigate('/criar-usuario')
  }

  return (
    <LoginContainer>
      <BackgroundPage>
        <ImgLogin />
      </BackgroundPage>
      <div>
      <LogoAndText>
          <Logo />
          <h2>Colabore</h2>
        </LogoAndText>
        <Formik
          initialValues={{
            email:'',
            senha:''
          }}
          validationSchema={SignInSchema}
          onSubmit={values => {
            handleLogin(values);
          }}
        >
        {({errors, touched}) => (
          <Form>
            <FormStyle>
              <div>
                <label htmlFor="email">E-mail*</label>
                <Field id='email' name='email' placeholder='Digite seu e-mail' />
                {errors.email && touched.email ? (<Errors id='erro-email'>{errors.email}</Errors>) : null}
              </div>
              <div>
                <label htmlFor="senha">Senha*</label>
                <Field id='senha' type={typePassword} name='senha' placeholder='Password'/>
                {typePassword === 'password' ? 
                  <AiFillEyeInvisible title='Mostrar Senha' onClick={() => setTypePassword(typePassword === 'password' ? 'text' : 'password')} /> :
                  <AiFillEye title='Ocultar Senha' onClick={() => setTypePassword(typePassword === 'password' ? 'text' : 'password')} />
                }
                {errors.senha && touched.senha ? (<Errors id='erro-senha'>{errors.senha}</Errors>) : null}
              </div>
              <Button id="entrar" width="35rem" type="submit">Entrar</Button>
            </FormStyle>
          </Form>
        )}
        </Formik>
          <Signup id="signup" onClick={GoToRegister}>Não possuo cadastro</Signup>
      </div>
    </LoginContainer>
  )
}


export default Login