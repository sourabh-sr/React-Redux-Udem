import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID tUjVOuYQLk6AABA0eSA0Zh94NYAZ_IS-vDenafo0-_g'
    }
});
