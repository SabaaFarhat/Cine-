import React, { useState } from "react";
import { MdArrowBack } from "react-icons/md";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import defaultImage from "../assets/no-image.jpg";
import CourtMetrageService from "./CourtMetrage.Service";

const DetailsFilm = () => {
  let params = useParams();
  let navigate = useNavigate();

  const [courtMetrages, setCourtMetrages] = useState([]);

  const fetchData = async (name) => {
        setCourtMetrages(await CourtMetrageService.getByName(name))
      }

console.log(courtMetrages)
  useEffect(() => {
    fetchData(params.filmName);
  }, []);

  return (
    <div>
      <div className="back">
        <MdArrowBack onClick={() => navigate(-1)} />
      </div>
      {courtMetrages && (
        courtMetrages.map((courtMetrage) => {
            console.log("res", courtMetrage)
            return (
            <div className="container details">
          <h1 className="section-title">{courtMetrage.Name}</h1>
          {courtMetrage.poster_path !== null ? (
            <img
              className="img-bg"
              src={require("../assets/court-métrage.png")} 
            />
          ) : (
            <img className="img-bg" src={defaultImage} />
          )}
          <div>
            <h4>Date sortie</h4>
            <p>{courtMetrage.DateSortie}</p>
          </div>
          <div>
            <h4>Genre</h4>
            <p id="genre">
              {courtMetrage.Genre}
            </p>
          </div>
          <div>
            <h4>Réalisateur</h4>
            <p>{courtMetrage.Réalisateur}</p>
          </div>
          <div>
            <h4>Producteur</h4>
            <p>{courtMetrage.Producteur}</p>
          </div>
          <div>
            <h4>SociétéDeProduction</h4>
            <p>{courtMetrage.SociétéDeProduction}</p>
          </div>
          <div>
            <h4>Acteur</h4>
            <p>{courtMetrage.Acteur}</p>
          </div>

        </div>
            )
        
})
      )}
    </div>
  );
};

export default DetailsFilm;
