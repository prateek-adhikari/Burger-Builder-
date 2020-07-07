import axios from 'axios';

const instance = axios.create({
    baseURL: "https://burger-45a7b.firebaseio.com/"
});

export default instance;