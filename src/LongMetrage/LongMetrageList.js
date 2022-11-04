import React, { useState, useEffect, useContext } from "react";
import MovieContext from "../MovieContext";
import { motion } from "framer-motion";

import LongMetrage from "./LongMetrage";
import longmetrageService from "./service";
import Search from "../components/Search";
import Filter from "../components/Filter";

function LongMetrageList() {
  const { filtered, fetchPopular, header, setActiveGenre } =
    useContext(MovieContext);

  const [longmetrages, setlongmetrages] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setlongmetrages(await longmetrageService.getLongMetrage());
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log(longmetrages);
  }, [longmetrages]);

  return (
    <>
    <div className="container">
      <Search />
      <Filter />
      <motion.div layout className="popular-movies">
        {longmetrages.map((longmetrage, id) => {
          return <LongMetrage longmetrage={longmetrage} key={id} />;
        })}
      </motion.div>
      </div>
    </>
  );
}

export default LongMetrageList;
