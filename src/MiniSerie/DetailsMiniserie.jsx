import React, { useState } from "react";
import { MdArrowBack } from "react-icons/md";
import { FiExternalLink } from "react-icons/fi";
import { BsStarHalf } from "react-icons/bs";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import defaultImage from "../assets/no-image.jpg";
import miniserieService from "./service";

const DetailsMiniserie = () => {
  let navigate = useNavigate();
  const { name } = useParams();

  const [miniserie, setMiniserie] = useState();

  useEffect(() => {
    const fetchData = async () => {
        setMiniserie(await miniserieService.getMiniserie(name))
    }
    fetchData();
}, []);
    console.log(miniserie);

  return (
    <div>
      <div className="back">
        <MdArrowBack onClick={() => navigate(-1)} />
      </div>
      {miniserie && (
        <div className="container details">
          <h1 className="section-title">{miniserie[0].Name}</h1>
          {miniserie[0].Mini_Serie !== null ? (
                <img className="img-bg" src={require("../assets/" + miniserie[0].Mini_Serie + ".jpg")} alt={miniserie[0].Mini_Serie} />
            ) : (
                <img src={defaultImage} />
            )}
          
          <div>
            <h4>Serie genre</h4>
            <ul>
                <li>{miniserie[0].Genre}</li>
            </ul>
          </div>
          <div>
            <h4>Production companies</h4>
            <ul>
                <li>{miniserie[0].SociétéDeProduction}</li>
            </ul>
          </div>
          <div>
            <h4>Producer</h4>
            <p>{miniserie[0].Producteur}</p>
          </div>
          <div>
            <h4>Director</h4>
            <p>{miniserie[0].Réalisateur}</p>
          </div>
          <div>
            <h4>Actor</h4>
            <p>{miniserie[0].Acteur}</p>
          </div>
          <div>
            <h4>Release</h4>
            <p>{miniserie[0].DateSortie}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsMiniserie;
