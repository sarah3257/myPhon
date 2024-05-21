import React, { useState } from 'react';

export default function MyPhon(props) {
    const [arr, setArr] = useState([{
        name: "sarah",
        phon: "0533134632"
    }]);
    const [item, setItem] = useState({
        name: "",
        phon: ""
    });

    const fName = (e) => {
        setItem({ ...item, name: e.target.value });
    };

    const fPhone = (e) => {
        setItem({ ...item, phon: e.target.value });
    };

    const add = () => {
        setArr([...arr, item]);
        setItem({ name: "", phon: "" });  // Reset the input fields after adding
    };

    return (
        <div>MyPhon
            <input onChange={fName} value={item.name} placeholder="name" />
            <input onChange={fPhone} value={item.phon} placeholder="phone" />
            <button onClick={add}>add</button>
            {arr.map((item, index) => (
                <p key={index}>{item.name}: {item.phon}</p>
            ))}
        </div>
    );
}