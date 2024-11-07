import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../data/data.json";

const DataListComponent = () => {
    const [veri, setData] = useState([]);

    // useEffect(()=>{
    //     fetch('../data.json') // dkfdlfjoejeowrfjıowefofjşosjdfjo - api key
    //     .then(response => response.json())
    //     .then(veri => {
    //         setData(veri);
    //         console.log(veri);
    //     })
    //     .catch(error=>console.error("Veri alınamadı", error));
       
    // },[])

    useEffect(()=>{
        setData(data);
    })

    if (veri.length === 0){
        return <div>Yükleniyor....</div>
    }

    return(
        <div>
            <ul>
                {
                    veri.map((eleman)=>(
                        <li key = {eleman.id}>
                            <p>Name : {eleman.name}</p>
                            <p>Name : {eleman.age}</p>
                            <p>Name : {eleman.email}</p>
                            <p><Link to={`/details/${eleman.id}`}>Ayrıntılar</Link></p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );    
}

export default DataListComponent;