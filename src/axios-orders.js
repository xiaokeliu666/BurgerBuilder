import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-3ba29-default-rtdb.firebaseio.com/'
});

export default instance