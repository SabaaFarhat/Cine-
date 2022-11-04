import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useContext } from "react";
import MovieContext from "../MovieContext";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { motion } from "framer-motion";
import defaultImage from "../assets/no-image.jpg";
import acteurService from './service';
import ViewActor from './ViewActor';
import toast, { Toaster } from 'react-hot-toast';
 
function Actor({ actor }) {

    const [show, setshow] = useState(false)
    const [actorVar, setactorVar] = useState({})
    const [movies, setmovies] = useState([])
    const [series, setseries] = useState([])

    useEffect(() => {
        const fetchData = async (name) => {
            setactorVar(await acteurService.getActor(name))
        }
        fetchData(actor.Acteur)
    }, [])

    useEffect(() => {
        getMoviesAndSeries()
    }, [actorVar])

    const getMoviesAndSeries = () => {
        setTimeout(() => {
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
        }, 1000);
    }

    useEffect(() => {
        console.log(actor.Acteur, movies, series)
    }, [movies, series])

    return (
        <>
            <Toaster position="top-right"
                reverseOrder={false} />
            <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                layout
                className="movie"
                onClick={() => { 
                    toast.success(<ViewActor movies = { movies } series = { series } />)
                }}
            >

                {/* <Link to={`/actor/${actor.Acteur}`}>
                    <div className="shadow"></div>
                </Link> */}
                {actor.Acteur !== null ? (
                    <img src={require("../assets/" + actor.Acteur + ".jpg")} alt={actor.Acteur} />
                ) : (
                    <img src={defaultImage} />
                )}
                <h2>Acteur : {actor.Acteur} <br /> Age : {actor.Age}  <br /> Salaire : {actor.Salaire}</h2>
                {show ? (
                    <ViewActor movies={movies} series={series} />
                ) : <></>}
            </motion.div>
           
        </>
    )
}

export default Actor