/* eslint-disable react/prop-types */
import axios from "axios";
import { useState, useEffect } from "react";
import { CatCard } from "./CatCard";
import { Modal } from "./Modal";

let currentCats = []

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
    const newCats = GetNewCats()
    currentCats = newCats
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
    const [gameInPlay, setGameInPlay] = useState(true)
    const [openModal, setOpenModal] = useState(false)

    updateCats()
    if (gameInPlay) { shuffleArray(currentCats) }

    function handleClick(clickedCatID) {
        if (gameInPlay && !clickedCats.includes(clickedCatID)) {
            setScore((score) => score + 1);
            setClickedCats(() => [...clickedCats, clickedCatID])
            if (currentCats.length === clickedCats.length) {
                // updateCats()
            }
        }
        else if (clickedCats.includes(clickedCatID)) {
            setGameInPlay(() => setGameInPlay(false))
            // updateCats()
            setScore(0)
            setClickedCats([])
            setOpenModal(true)
        }
    }

    return (
        <div>
            <Modal open={openModal} setOpen={setOpenModal} setGameInPlay={setGameInPlay} />
            <ul role="list" className="m-1 sm:mx-20 sm:my-2 p-3 rounded-lg bg-slate-50/10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-5 xl:gap-x-5 max-md:">
                {currentCats.map((cat) => (
                    <li key={cat.id} className="relative grid-cols-1 place-items-stretch gap-2 space-x-1">
                        <CatCard url={cat.url} id={cat.id} handleClick={handleClick} />
                        <button className="m-2 min-w-full place-self-center bg-white/40 text-gray-800 border border-grey-800 hover:bg-gray-800 hover:text-white font-bold py-2 px-4 rounded-full" onClick={() => { handleClick(cat.id) }}>PET ME?</button>
                    </li>))}
            </ul>
        </div>
    )
}