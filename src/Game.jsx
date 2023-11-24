/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useEffect } from "react";
import { CatCard } from "./CatCard";

const currentCats = [
    {
        id: "2kh",
        url: "https://cdn2.thecatapi.com/images/2kh.jpg",
        width: 500,
        height: 333,
    },
    {
        id: "5tl",
        url: "https://cdn2.thecatapi.com/images/5tl.jpg",
        width: 427,
        height: 640
    },
    {
        id: "71m",
        url: "https://cdn2.thecatapi.com/images/71m.jpg",
        width: 1071,
        height: 1600
    },
    {
        id: "7nu",
        url: "https://cdn2.thecatapi.com/images/7nu.jpg",
        width: 500,
        height: 333
    },
    {
        id: "aec",
        url: "https://cdn2.thecatapi.com/images/aec.jpg",
        width: 500,
        height: 500
    },
    {
        id: "ajv",
        url: "https://cdn2.thecatapi.com/images/ajv.jpg",
        width: 1900,
        height: 2534
    },
    {
        id: "aui",
        url: "https://cdn2.thecatapi.com/images/aui.jpg",
        width: 500,
        height: 340
    },
    {
        id: "dj6",
        url: "https://cdn2.thecatapi.com/images/dj6.jpg",
        width: 1024,
        height: 768,
    },
    {
        id: "MTU4NDY0MQ",
        url: "https://cdn2.thecatapi.com/images/MTU4NDY0MQ.jpg",
        width: 3888,
        height: 2592,
    },
    {
        id: "MTc5NDg0Ng",
        url: "https://cdn2.thecatapi.com/images/MTc5NDg0Ng.jpg",
        width: 600,
        height: 450,
    }
]

export function GetNewCats() {
    const catAPI = axios.create({
        baseURL: "https://api.thecatapi.com/v1/images/search"
    });

    const [newCats, setNewCats] = useState([]);

    const fetchCats = async () => {
        let response = await catAPI.get("?limit=10&mime_types=jpg");
        setNewCats(response.data);
    };

    useEffect(() => {
        fetchCats();
    }, []);

    return (newCats)
}

function updateCats() {
    currentCats.length = 0
    const newCats = GetNewCats()
    newCats.forEach((newCat) => currentCats.push(newCat))
}
/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

export function GameBoard({ setScore }) {
    const [clickedCats, setClickedCats] = useState([])

    shuffleArray(currentCats)

    function handleClick(clickedCatID) {
        if (!clickedCats.includes(clickedCatID)) {
            setScore((score) => score + 1);
            setClickedCats(() => [...clickedCats, clickedCatID])
        }
    }

    return (
        <ul role="list" className="m-1 sm:m-20 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 max-md:">
            {currentCats.map((cat) => (
                <li key={cat.id} className="relative">
                    <CatCard url={cat.url} id={cat.id} handleClick={handleClick} />
                    <button onClick={() => { handleClick(cat.id) }}>PET ME?</button>
                </li>))}
        </ul>

    )
}