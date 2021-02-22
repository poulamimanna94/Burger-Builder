import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-2e2ef-default-rtdb.firebaseio.com/'
});

export default instance;