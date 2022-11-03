import axios from "axios";

const getAllActeurs = () => {
    return axios.get("http://localhost:8005/SpringMVC/cinema/acteurs").then((res) => res.data)
}

const getActor = (name) => {
    return axios.get("http://localhost:8005/SpringMVC/cinema/acteurs/" + name).then((res) => res.data)
}

const acteurService = {
    getAllActeurs,
    getActor
}

export default acteurService;