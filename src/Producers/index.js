import React from 'react';
import Filter from '../components/Filter';
import Search from '../components/Search';
import Header from '../components/Header';
import AllProducers from './AllProducers';

const Container = () => {
  return (
    <div className="container">
      <Search />
      <Filter />
      <Header />
      <AllProducers />
    </div>
  );
};

export default Container;
