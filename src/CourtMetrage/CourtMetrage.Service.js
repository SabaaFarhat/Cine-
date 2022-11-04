import axios from "axios";


async function getAll() {
  return await axios
    .get("http://localhost:8005/SpringMVC/cinema/court-metrage")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

async function getByName($name) {
  return await axios
    .get("http://localhost:8005/SpringMVC/cinema/court-metrage/"+$name)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

let  CourtMetrageService = {
  getAll,
  getByName
};

export default CourtMetrageService;