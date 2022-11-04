import React, { useState } from 'react';
import { MdArrowBack } from 'react-icons/md';

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import defaultImage from '../assets/no-image.jpg';
import producerService from './service';

const DetailsProducer = () => {
  let navigate = useNavigate();
  const { name } = useParams();

  const [producer, setProducer] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setProducer(await producerService.getProducteur(name));
    };
    fetchData();
  }, []);
  console.log(producer);

  return (
    <div>
      <div className="back">
        <MdArrowBack onClick={() => navigate(-1)} />
      </div>
      {producer && (
        <div className="container details">
          <h1 className="section-title">Name: {producer[0].Name}</h1>
          {producer[0].Producteur !== null ? (
            <img
              className="img-bg"
              src={require('../assets/' + producer[0].Producteur + '.jpg')}
              alt={producer[0].Producteur}
            />
          ) : (
            <img src={defaultImage} />
          )}
          <div>
            <h4>Salaire</h4>
            <p>{producer[0].Salaire}</p>
          </div>
          <div>
            <h4>Age</h4>
            <p>{producer[0].Age}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsProducer;
