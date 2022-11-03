import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import MovieContext from "../MovieContext";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { motion } from "framer-motion";
import defaultImage from "../assets/no-image.jpg";

function LongMetrage({ longmetrage }) {
  useEffect(() => {
    console.log(longmetrage);
  }, []);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
      className="movie"
    >
      {/* <Link to={`/movie/${longmetrage.id}`}>
        <div className="shadow"></div>
      </Link> */}
      {/* {longmetrage.Acteur !== null ? (
        <img
          src={require("../assets/" + longmetrage.Acteur + ".jpg")}
          alt={longmetrage.Acteur}
        />
      ) : (
        <img src={defaultImage} />
      )} */}
      <h2>
        {longmetrage.Pulp_Fiction} {longmetrage.Samuel_L_Jackson}
      </h2>
    </motion.div>
  );
}

export default LongMetrage;
