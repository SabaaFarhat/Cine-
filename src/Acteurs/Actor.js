import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useContext } from "react";
import MovieContext from "../MovieContext";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { motion } from "framer-motion";
import defaultImage from "../assets/no-image.jpg";
import acteurService from './service';


function Actor({ actor }) {

    const [actorVar, setactorVar] = useState({})
    const [movies, setmovies] = useState([])
    const [series, setseries] = useState([])

    useEffect(() => {
        const fetchData = async (name) => {
            setactorVar(await acteurService.getActor(name))
        }
        fetchData(actor.Name)
    }, [])

    useEffect(() => {
        getMoviesAndSeries()
    }, [actorVar])

    const getMoviesAndSeries = () => {
        if (actorVar.length !== 0) {
            actorVar.forEach(a => {
                if (!movies.includes(a.Film)) {
                    movies.push(a.Film)
                }
                if (!series.includes(a.Série)) {
                    series.push(a.Série)
                }
            })
        }
    }

    useEffect(() => {
        console.log(actor.Acteur, movies, series)
    }, [movies, series])


    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            layout
            className="movie"
        >

            <Link to={`/actors/${actor.Acteur}`}>
                <div className="shadow"></div>
            </Link>
            {actor.Acteur !== null ? (
                <img src={require("../assets/" + actor.Acteur + ".jpg")} alt={actor.Acteur} />
            ) : (
                <img src={defaultImage} />
            )}
            <h2>Acteur : {actor.Acteur} <br /> Age : {actor.Age}  <br /> Salaire : {actor.Salaire}</h2>
        </motion.div>
    )
}

export default Actor