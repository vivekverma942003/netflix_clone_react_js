import React from "react";
import {useState, useEffect} from "react";
import axios from "./axios";
import "./row.css";
const base_url = "https://image.tmdb.org/t/p/original"
function Row({title, fetchUrl,isLargeRow} ){
    const[movies,setMovies]=useState([]);


    // this useEffect code runs whenever the page will reload itself //
    useEffect(()=>{
    async function fetchData(){
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
    }

    fetchData();
    },[fetchUrl]);
    console.table(movies);
    return(
        <div className="row">
            <h1>{title}</h1>
            <div className="row_posters">
            {
                movies.map(movie=>(
                    <img
                    key={movie.id}
                    className={`row_poster ${isLargeRow &&"row_posterLarge"}`}
                    src={`${base_url}${
                        isLargeRow?movie.poster_path:movie.backdrop_path
                    }`}
                    alt={movie.name}/>
                )) 
            }
            </div>
        </div>
    )
}
export default Row;
 







