import React, { useState, useEffect, useContext } from 'react'
import miniserieService from './service';
import MovieContext from "../MovieContext";
import Miniserie from './Miniserie';
import { motion } from "framer-motion";
import Search from '../components/Search';
import Filter from '../components/Filter';
import Header from '../components/Header';
import Panel from '../components/Panel';

function MiniSeries() {
  const { filtered, fetchPopular, header, setActiveGenre } =
    useContext(MovieContext);

  const [miniseries, setMiniseries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setMiniseries(await miniserieService.getAllMiniseries())
    }
    fetchData()
  }, [])

  useEffect(() => {
    console.log(miniseries)
  }, [miniseries])




  return (
    <>
      <Search />
      <Filter />
      <motion.div layout className="popular-movies">
        {miniseries.map((miniserie) => {
          return <Miniserie  miniserie={miniserie} />;
        })}
      </motion.div>
      {miniseries.length === 0 && <p className="info">No miniseries to display</p>}
    </>
  )
}

export default MiniSeries