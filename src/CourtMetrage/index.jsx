import React, { useState, useEffect, useContext } from 'react'
import CourtMetrageService from './CourtMetrage.Service';
import MovieContext from "../MovieContext";
import CourtMetrageComponent from './CourtMetrageComponent';
import { motion } from "framer-motion";

function AllCourtMetrages() {
  const { filtered, fetchPopular, header, setActiveGenre } =
    useContext(MovieContext);

  const [courtMetrages, setCourtMetrages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setCourtMetrages(await CourtMetrageService.getAll())
    }
    fetchData()
  }, [])

  useEffect(() => {
    console.log(courtMetrages)
  }, [courtMetrages])


  console.log(courtMetrages)


  return (
    <>
      <motion.div layout className="popular-movies">
        {courtMetrages.map((courtMetrage) => {
          return <CourtMetrageComponent  courtMetrage={courtMetrage} />;
        })}
      </motion.div>
    </>
  )
}

export default AllCourtMetrages