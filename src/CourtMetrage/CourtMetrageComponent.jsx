import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useContext } from "react";
import MovieContext from "../MovieContext";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { motion } from "framer-motion";
import defaultImage from "../assets/no-image.jpg";


function CourMetrageComponent({courtMetrage}) {

    console.log(courtMetrage)
    return (
        <motion.div
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            layout
            className="movie"
        >

            <Link to={`/courtMetrage/${courtMetrage.Name}`}>
                <div className="shadow"></div>
            </Link>
            {courtMetrage.Name !== null ? (
                <img src={require("../assets/court-métrage.png")} alt={courtMetrage.Name} />
            ) : (
                <img src={defaultImage} />
            )}
            <h2>Nom : {courtMetrage.Name} / Date : {courtMetrage.DateSortie}</h2>
        </motion.div>
    )
}

export default CourMetrageComponent