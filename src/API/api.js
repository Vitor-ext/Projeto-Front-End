// Estabelece conexão com o BACK-END
import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://127/0/0/1:3000',       //Direcionar para Back-Hospedado no Heroku
});

export default Api;

