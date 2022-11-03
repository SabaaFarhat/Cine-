import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useContext } from "react";
import MovieContext from "../MovieContext";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { motion } from "framer-motion";
import defaultImage from "../assets/no-image.jpg";


function Actor({ actor }) {

    useEffect(() => {
        console.log(actor)
    }, [])

    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            layout
            className="movie"
        >

            <Link to={`/movie/${actor.id}`}>
                <div className="shadow"></div>
            </Link>
            {actor.Acteur !== null ? (
                <img src={require("../assets/" + actor.Acteur + ".jpg")} alt={actor.Acteur} />
            ) : (
                <img src={defaultImage} />
            )}
            <h2>{actor.Age} {actor.Salaire}</h2>
        </motion.div>
    )
}

export default Actor