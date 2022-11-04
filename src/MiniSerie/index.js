import React from "react";
import Filter from "../components/Filter";
import Search from "../components/Search";
import Header from "../components/Header";
import MiniSeries from "./MiniSeries";

const Container = () => {
  return (
    <div className="container">
      <Search />
      <Filter />
      <Header />
      <MiniSeries />
    </div>
  );
};

export default Container;