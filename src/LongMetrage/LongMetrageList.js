import React, { useState, useEffect, useContext } from "react";
import MovieContext from "../MovieContext";
import { motion } from "framer-motion";

import LongMetrage from "./LongMetrage";
import longmetrageService from "./service";

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
      <motion.div layout className="popular-movies">
        {longmetrages.map((longmetrage, id) => {
          return <LongMetrage longmetrage={longmetrage} key={id} />;
        })}
      </motion.div>
      {filtered.length === 0 && <p className="info">No Films to display</p>}
    </>
  );
}

export default LongMetrageList;
