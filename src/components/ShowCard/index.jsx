import React, { useEffect, useState } from "react";

export default function ShowCard({show}) {
  return (
    <div className="show-card">
        <div>
            <img src={show.image.medium} />

        </div>

            <div>

            <div>
                {
                show.rating.average ? <span>({show.rating.average}/10)</span> : ""
                }
            </div>

            <h2>
                {show.name}
            </h2>

            <em>
                {show.language}, {show.premiered}
            </em>

            <div dangerouslySetInnerHTML={{__html:show.summary}}>
                {/* {show.summary} */}
            </div>

        </div>

    </div>
  );
};


//<div dangerouslySetInnerHTML={{__html:show.summary}}> --> this sets the div tag we have here in the innerHTML, our syntax removes then applies tags --> vulnerable to hacking?

//<div>{show.summary.replace(/<[^>]+>/g, "")}</div> --> this is a better solution. RegEx code that removes script tags and replaces it with nothing? 