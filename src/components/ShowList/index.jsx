import React from 'react';
import ShowCard from '../ShowCard';

export default function showList({showData}) {
  return (
    <div>
        {
        showData.map((show)=> (show.image ? <ShowCard show={show} key={show.id}/> : ""))
        }
    </div>
  );
};
