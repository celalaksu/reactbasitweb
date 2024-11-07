import React from "react";
import { useState } from "react";

const HomePage = () => {
    // kodlar
    function birEkle(){
        let p_etiketi = document.getElementById("sayi");
        p_etiketi.textContent = Number(p_etiketi.textContent) + 1 ;

    }

    // useState

    const [sayi, sayiArttir] = useState(0);

    function birEkleDurum(){
        sayiArttir(sayi + 1);
    }

    return ( 
        <div>
            <h1>home page sayfası</h1>
            <button name="birEkle" onClick={birEkle}>Sayı Arttır</button>
            <p id="sayi">0</p>

            <button name="birEkleDurum" onClick={birEkleDurum}>Sayı Arttır Durum</button>
            <p id="sayiDurum">{sayi}</p>
        </div>
    );
}

export default HomePage;