import axios from "axios";

export const CourtMetrageService = {
  getAll
};

async function getAll() {
  return await axios
    .get("http://localhost:8005/SpringMVC/cinema/court-metrage")
    .then((res) => {
      console.log("Court Metrage !");
    })
    .catch((err) => {
      console.log(err);
    });
}
