import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-builder-d502d.firebaseio.com/'
});

export default instance;