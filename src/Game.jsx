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

export function GameBoard() {

    return (
        <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {currentCats.map((cat) => (
                <li key={cat.id} className="relative">
                    <CatCard url={cat.url} id={cat.id} />
                </li>))}
        </ul>

    )
}