import * as yup from "yup";

export const SignInSchema = yup.object().shape({
  email: yup.string()
    .matches(/@dbccompany.com.br/, 'O email deve conter: @dbccompany.com.br')
    .required('Campo obrigatório!'),
  senha: yup.string()
    .min(8, 'Mínimo de 8 caractéres')
    .max(16, 'Máximo de 16 caractéres')
    .required('Campo obrigatório!')
})

export const SignUpSchema = yup.object().shape({
  nome: yup.string()
    .min(2, 'Mínimo de 2 caractéres')
    .max(50, 'Máximo de 50 caractéres')
    .required('Campo obrigatório!'),
  email: yup.string()
    .email('Insira um email válido')
    .matches(/^[a-z0-9._-]+/, 'O email não pode conter letra maiúscula.')
    .matches(/@dbccompany.com.br/, 'O email deve conter: @dbccompany.com.br')
    .required('Campo obrigatório!'),
  senha: yup.string()
    .min(8, 'Mínimo de 8 caractéres')
    .max(16, 'Máximo de 16 caractéres')
    .matches(/[a-z]/, 'A senha deve conter ao menos uma letra minúscula')
    .matches(/[A-Z]/, 'A senha deve conter ao menos uma letra maiúscula')
    .matches(/\d/, 'A senha deve conter ao menos um número')
    .matches(/[^a-zA-Z0-9]+/g, 'A senha deve conter ao menos um caractre especial')
    .required('Campo obrigatório!'),
  confirmarSenha: yup.string()
    .min(8, 'Mínimo de 8 caractéres')
    .max(16, 'Máximo de 16 caractéres')
    .oneOf([yup.ref('senha'), null], 'As senhas precisam ser iguais.')
    .required('Campo obrigatório!')
})

export const CampaignSchema = yup.object().shape({
  titulo: yup.string().required('Campo obrigatório!'),
  descricao: yup.string().required('Campo obrigatório!'),
  meta: yup.string().required('Campo obrigatório!'),
  dataLimite: yup.string().required('Campo obrigatório'),
  encerrarAutomaticamente: yup.string().required('Escolha uma opção válida!')
}) 

export const donationSchema = yup.object().shape({
  valor: yup.string().required('Campo obrigatório!')
})