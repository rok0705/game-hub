import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'dfca3fe495f94eb5ae117668c202c1db'
    }
})