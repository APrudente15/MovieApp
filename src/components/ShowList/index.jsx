import React from 'react';
import ShowCard from '../ShowCard';
import { useShow } from '../../contexts';

export default function showList() {
    const{showData}=useShow()
  return (
    <div>
        {
        showData.map((show)=> (show.image ? <ShowCard show={show} key={show.id}/> : ""))
        }
    </div>
  );
};
