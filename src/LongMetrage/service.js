import axios from "axios";

const getLongMetrage = () => {
  return axios
    .get("http://localhost:8005/SpringMVC/cinema/long-metrage")
    .then((res) => res.data);
};

const longmetrageService = {
  getLongMetrage,
};

export default longmetrageService;
