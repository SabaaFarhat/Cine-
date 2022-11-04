import React from "react";

import { MdOutlineMovieFilter } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { BsStars } from "react-icons/bs";
import { BiCameraMovie } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

import { AiOutlineStar } from "react-icons/ai";

import { useContext } from "react";
import MovieContext from "../MovieContext";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Panel = () => {
  const {
    header,
    fetchPopular,
    getFavourites,
    fetchNowPlaying,
    fetchTopRated,
    fetchUncoming,
  } = useContext(MovieContext);
  let navigate = useNavigate();

  return (
    <div className="panel">
      <div>
        <MdOutlineMovieFilter
          onClick={() => fetchPopular()}
          className={header === "Trending" ? "active" : null}
        />

        <BiMoviePlay
          onClick={() => fetchNowPlaying()}
          className={header === "Now playing" ? "active" : null}
        />

        <BsStars
          onClick={() => fetchTopRated()}
          className={header === "Top rated" ? "active" : null}
        />

        <BiCameraMovie
          onClick={() => navigate('/courtMetrages')}
          className={header === "Uncoming" ? "active" : null}
        />
      </div>
      <div>
        {/* <AiOutlineStar
          onClick={() => getFavourites()}
          className={header === "Your favourites" ? "active" : null}
        /> */}

        <FaUserCircle onClick={() => navigate('/actors')}>
        </FaUserCircle>
      </div>
    </div>
  );
};

export default Panel;
