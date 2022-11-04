import React, { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom';
import acteurService from './service'; 


function ViewActor({movies,series}) {
    const {name:name} = useParams()
  
   
   


  return (
        <>
          {movies && series ? (
            <>
                <div>Films : {movies.toString()} <br/> Séries : {series.toString()}</div >
            </>
          ) : <h1>rien</h1>}
        </>
  )
}

export default ViewActor