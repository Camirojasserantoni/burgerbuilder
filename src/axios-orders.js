import axios from 'axios';



const instance = axios.create({
    baseURL:'https://burguer-215fe.firebaseio.com/'
});

export default instance;