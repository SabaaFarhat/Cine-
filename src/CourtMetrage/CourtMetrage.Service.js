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
let  CourtMetrageService = {
  getAll
};

export default CourtMetrageService;