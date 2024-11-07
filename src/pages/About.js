import React, { useEffect, useState } from "react";

const About = () => {
    const [sayi, sayiArttir] = useState(verial());

    function verial() {
        const veri = localStorage.getItem("sayi");
        return veri ? Number(veri) : 0;
    }
  
    function birEkleSakla(){
        sayiArttir(sayi + 1);
    } 
    
    useEffect(() => {
        localStorage.setItem("sayi", sayi);
    }, [sayi]);
    return ( 
        <div>
            <button onClick={birEkleSakla} name="birEkleSakla">Sayı Arttır</button>
            <p id="sayiDurum">{sayi}</p>
        </div>
    );
}

export default About;