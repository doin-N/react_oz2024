import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "2d7466209ea48c0e03c55ca182ac2076",
        language: "ko-KR"
    }
})

export default instance;