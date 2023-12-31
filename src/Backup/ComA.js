import React, { useEffect, useState } from "react";
import axios from "axios";

const ComA = () => {
    const [num, setNum] =  useState();
    const [name, setName] = useState();
    const [move, setMove] = useState();

    useEffect(() =>{
        // alert("hi");

        async function getData() {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/aegislash/${num}`);
            console.log(res.data);
            setName(res.data.name);
            setMove(res.data.move.length);
        }
         getData();
    });

    return (
        <>
            <h1>You Choose {num} Value</h1>
            <h1>My name is  {name} </h1>
            <h1>I Have {move} moves</h1>
            <select value={num} onChange={(event) => {
                setNum(event.target.value);
            }}>
                <option value='1'>1</option>
                <option value='25'>25</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
            </select>
        </>

    )
}

export default ComA;