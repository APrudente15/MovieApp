import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShowCard } from "../../components";

export default function index() {
  const [show, setShow] = useState({image:{}, rating:{}});
  const {id} =useParams();

  useEffect(() => {
    async function displayShow() {
      const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const data = await response.json();
      setShow(data);
    }
    displayShow();
  }, []);

  return (
  <ShowCard show = {show}/>
  );
}
