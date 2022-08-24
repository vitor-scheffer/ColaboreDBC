import axios from "axios";

export const apiColabore = axios.create({
  baseURL: 'https://colabore-dbc-api.herokuapp.com'
})