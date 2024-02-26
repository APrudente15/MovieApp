import React, { useEffect, useState } from "react";
import {GalleryImage} from "../";
import { Link } from "react-router-dom";

export default function ShowGallery() {

    const [shows, setShows] = useState([]);

    useEffect(()=> {
        async function displayShows(){
            const response = await fetch ("https://api.tvmaze.com/shows")
            const data = await response.json()
            setShows(data)
        }
        displayShows()
    },[])

  return (
  <div className="shows"> 
        {shows.map((show) => 
        (<Link key={show.id} to = {`${show.id}`}><GalleryImage show = {show} /></Link>))}
    </div>
  );
}
