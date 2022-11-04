import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useContext } from "react";
import MovieContext from "../MovieContext";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { motion } from "framer-motion";
import defaultImage from "../assets/no-image.jpg";
import axios from 'axios';
import miniserieService from './service';


function Miniserie({ miniserie }) {

    const [miniserieVar, setminiserieVar] = useState({})
    //const [movies, setmovies] = useState([])
    //const [series, setseries] = useState([])

    useEffect(() => {
        const fetchData = async (name) => {
            setminiserieVar(await miniserieService.getMiniserie(name))
        }
        fetchData(miniserie.Name)
    }, []);

    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            layout
            className="movie"
        >

            <Link to={`/mini-serie/${miniserie.Mini_Serie}`}>
                <div className="shadow"></div>
            </Link>
            {miniserie.Mini_Serie !== null ? (
                <img src={require("../assets/" + miniserie.Mini_Serie + ".jpg")} alt={miniserie.Mini_Serie} />
            ) : (
                <img src={defaultImage} />
            )}
            <h2>{miniserie.Mini_Serie} <br /> Date de Sortie : {miniserie.DateSortie}  <br /> Société De Production : {miniserie.SociétéDeProduction}</h2>
        </motion.div>
    )
}

export default Miniserie;