import React from "react";
import Travel from "./Travel";
// src/travel.js
const travel = [
    {
        destination:"New york",
        country:"USA",
        distance:"5834km",
        image:"https://www.pexels.com/photo/action-america-architecture-avenue-378570/"

    },
    {
        destination:"Milan",
        country:"Italy",
        distance:"851km",
        image:"https://www.routard.com/photos/milan/88338-mythique_stade_san_siro_.htm"
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