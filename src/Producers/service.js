import axios from 'axios';

const getAllProducers = () => {
  return axios
    .get('http://localhost:8005/SpringMVC/cinema/producteurs')
    .then((res) => res.data);
};

const getProducteur = (name) => {
  return axios.get("http://localhost:8005/SpringMVC/cinema/producteurs/" + name).then((res) => res.data)
}

const producerService = {
  getAllProducers,
  getProducteur
};

export default producerService;
