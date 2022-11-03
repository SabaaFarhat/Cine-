import React, { useState, useEffect, useContext } from 'react'
import acteurService from './service';
import MovieContext from "../MovieContext";
import Actor from './Actor';
import { motion } from "framer-motion";

function AllActors() {
  const { filtered, fetchPopular, header, setActiveGenre } =
    useContext(MovieContext);

  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setActors(await acteurService.getAllActeurs())
    }
    fetchData()
  }, [])

  useEffect(() => {
    console.log(actors)
  }, [actors])




  return (
    <>
      <motion.div layout className="popular-movies">
        {actors.map((actor) => {
          return <Actor  actor={actor} />;
        })}
      </motion.div>
      {filtered.length === 0 && <p className="info">No Actors to display</p>}
    </>
  )
}

export default AllActors