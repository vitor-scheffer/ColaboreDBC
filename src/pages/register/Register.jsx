import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Field, Form, Formik } from 'formik';
import { Logo } from "../../components/logo/Logo";
import { BackToLogin, BackgroundRegister, RegisterContainer, RegisterFormStyle, LogoAndTextRegister, RegisterTitle, Errors} from './Register.Styled';
import { useNavigate } from 'react-router-dom';
import PasswordStrengthMeter from '../../components/passwordStrengthMeter/PasswordStrengthMeter';
import { ImgLogin } from "../../components/imgLogin/ImgLogin";
import Dropzone from 'react-dropzone'
import { Button } from '../../components/button/Button';
import { SignUpSchema } from '../../utils/Schemas'
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

function Register() {
  const { handleSignUp } = useContext(AuthContext);
  const navigate = useNavigate();
  const [image, setImage] = useState();
  const [userInfo, setuserInfo] = useState({
    password: '',
  });
  const [isError, setError] = useState(null);
  const [isStrength, setStrength] = useState(null);
  const [typePassword, setTypePassword] = useState('password');

  const handleChangePassword = (e) => {
    let password  = e.target.value;
    setuserInfo({
      ...userInfo,
      password:e.target.value
    });
    setError(null);
    let capsCount, smallCount, numberCount, symbolCount
    if (password.length < 4) {
      return;
    }
    else {
      capsCount = (password.match(/[A-Z]/g) || []).length
      smallCount = (password.match(/[a-z]/g) || []).length
      numberCount = (password.match(/[0-9]/g) || []).length
      symbolCount = (password.match(/\W/g) || []).length
      if (capsCount < 1) {
        return;
      }
      else if (smallCount < 1) {
        return;
      }
      else if (numberCount < 1) {
        return;
      }
      else if (symbolCount < 1) {
        return;
      }
    }
  }
  
  const dataHandler = async (childData) => {
    setStrength(childData);
  }

  return (
    <RegisterContainer>
      <div>
      <LogoAndTextRegister>
          <Logo />
          <h2>Colabore</h2>
          <RegisterTitle>Cadastrar um novo  Usuário</RegisterTitle>
        </LogoAndTextRegister>
        <Formik
          initialValues={{
            nome:'',
            foto:'',
            email: '',
            senha: '',
            confirmarSenha: ''
          }}
          validationSchema={SignUpSchema}

          onSubmit={(values, {resetForm}) => {
            const newValues = {
              nome: values.nome,
              email: values.email,
              senha: values.senha
              }
            handleSignUp(newValues, image)
            resetForm()
          }}
        >
        {({errors, touched}) => (
          <Form>
            <RegisterFormStyle>
              <div>
                <div>
                  <label htmlFor="nome">Nome completo*</label>
                  <Field id='nome' name='nome' placeholder='Digite seu nome completo'/>
                  {errors.nome && touched.nome ? (<Errors>{errors.nome}</Errors>) : null}
                </div>
                <div>
                  <label htmlFor="email">E-mail*</label>
                  <Field id='email' name='email' placeholder='Digite seu e-mail'/>
                  {errors.email && touched.email ? (<Errors id='erro-email'>{errors.email}</Errors>) : null}
                </div>
              </div>
              <div>
                <div>
                  <div>
                    <label htmlFor="senha">Senha*</label>
                    <Field id='senha' type={typePassword} name='senha' placeholder='Digite sua senha' data-component='password-strength' onKeyUp={handleChangePassword}/>
                      {typePassword === 'password' ? 
                      <AiFillEyeInvisible title='Mostrar Senha' onClick={() => setTypePassword(typePassword === 'password' ? 'text' : 'password')} /> :
                      <AiFillEye title='Ocultar Senha' onClick={() => setTypePassword(typePassword === 'password' ? 'text' : 'password')} />
                      }
                    {errors.senha && touched.senha ? (<Errors id='erro-senha'>{errors.senha}</Errors>) : null}
                  </div>
                  <PasswordStrengthMeter password={userInfo.password} actions={dataHandler}/>
                </div>
                <div>
                  <label htmlFor="confirmarSenha">Confirmar senha*</label>
                  <Field id='confirmarSenha' type={typePassword} name='confirmarSenha' placeholder='Confirme sua senha'/>
                  {typePassword === 'password' ? 
                      <AiFillEyeInvisible title='Mostrar Senha' onClick={() => setTypePassword(typePassword === 'password' ? 'text' : 'password')} /> :
                      <AiFillEye title='Ocultar Senha' onClick={() => setTypePassword(typePassword === 'password' ? 'text' : 'password')} />
                      }
                  {errors.confirmarSenha && touched.confirmarSenha ? (<Errors id='erro-confirmarSenha'>{errors.confirmarSenha}</Errors>) : null}
                </div>
              </div>
              <div>
                <label htmlFor="foto">Foto</label>
                <Dropzone onDrop={acceptedFiles => setImage(acceptedFiles)}>
                  {({getRootProps, getInputProps}) => (
                    <section>
                      <div id='foto' {...getRootProps()}>
                        <input {...getInputProps()} />
                        { image ? <img src={URL.createObjectURL(image[0])} alt="" /> : <p>Arraste arquivos até aqui, ou clique para buscar.</p>}
                      </div>
                    </section>
                  )}
                </Dropzone>
              </div>
              <Button id='cadastrar' width="45vw" disabled={errors.nome || errors.email || errors.senha || errors.confirmarSenha} type='submit'>Cadastrar</Button>
            </RegisterFormStyle>
          </Form>
        )}
        </Formik>
        <BackToLogin id='backToLogin' onClick={() => navigate('/')}>Já possuo cadastro</BackToLogin>
      </div>
      <BackgroundRegister>
          <ImgLogin />
      </BackgroundRegister>
    </RegisterContainer>
  )
}

export default Register