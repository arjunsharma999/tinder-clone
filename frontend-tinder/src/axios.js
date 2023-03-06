import axios from 'axios';

const instance = axios.create({
    baseURL: "https://tinder-clone-k6il.onrender.com",
});

export default instance;