import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import MovieContext from '../MovieContext';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { motion } from 'framer-motion';
import defaultImage from '../assets/no-image.jpg';
import producerService from './service';

function Producer({ producer }) {
  const [producerVar, setProducerVar] = useState({});

  useEffect(() => {
    const fetchData = async (name) => {
      setProducerVar(await producerService.getProducteur(name));
    };
    fetchData(producerVar.Name);
    console.log("tst"+producerVar.Name);
  }, []);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
      className="movie"
    >
      <Link to={`/producer/${producer.Name}`}>
        <div className="shadow"></div>
      </Link>
      {producer.Producteur !== null ? (
        <img
          src={require('../assets/' + producer.Producteur + '.jpg')}
          alt={producer.Producteur}
        />
      ) : (
        <img src={defaultImage} />
      )}
      <h2>
        Nom : {producer.Name} <br /> Age : {producer.Age} <br /> Salaire:{' '}
        {producer.Salaire}
      </h2>
    </motion.div>
  );
}

export default Producer;
