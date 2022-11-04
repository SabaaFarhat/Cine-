import axios from "axios";

const getAllMiniseries = () => {
    return axios.get("http://localhost:8005/SpringMVC/cinema/mini-serie").then((res) => res.data)
}

const getMiniserie = (name) => {
    return axios.get("http://localhost:8005/SpringMVC/cinema/mini-serie/" + name).then((res) => res.data)
}

const miniserieService = {
    getAllMiniseries,
    getMiniserie
}

export default miniserieService;