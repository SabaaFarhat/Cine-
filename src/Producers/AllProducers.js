import React, { useState, useEffect, useContext } from 'react'
import producerService from './service';
import MovieContext from "../MovieContext";
import Producer from './Producer';
import { motion } from "framer-motion";
import Search from '../components/Search';
import Filter from '../components/Filter';
import Header from '../components/Header';

function AllProducers() {
  const { filtered, fetchPopular, header, setActiveGenre } =
    useContext(MovieContext);

  const [producers, setProducers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setProducers(await producerService.getAllProducers())
    }
    fetchData()
  }, [])

  useEffect(() => {
    console.log(producers)
  }, [producers])




  return (
    <>
    <Search />
      <Filter />
      <Header />
      <motion.div layout className="popular-movies">
        {producers.map((producer) => {
          return <Producer  producer={producer} />;
        })}
      </motion.div>
      {filtered.length === 0 && <p className="info">No Producers to display</p>}
    </>
  )
}

export default AllProducers