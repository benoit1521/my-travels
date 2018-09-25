import React from "react";
import Travel from "./Travel";
// src/travel.js
const travel = [
    {
        destination:"New york",
        country:"USA",
        distance:"5834km",
        image:"https://static.lexpress.fr/medias_11510/w_1815,h_1362,c_crop,x_232,y_0/w_640,h_358,c_fill,g_center/v1496828351/lower-manhattan-brooklyn-bridge_5893299.jpg"

    },
    {
        destination:"Milan",
        country:"Italy",
        distance:"851km",
        image:"https://static.giantbomb.com/uploads/original/0/2413/425522-4.jpg"
    }
];

const Travels = () => (
    <div>
        {travel.map(travel => (
            <Travel destination={travel.destination} image={travel.image} country={travel.country} distance={travel.distance} />
        ))}
    </div>
);

export default Travels;