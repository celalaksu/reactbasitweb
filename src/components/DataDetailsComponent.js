import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../data/data.json";

const DataDetailsListComponent = () => {
  const [veri, veriAyarla] = useState(null);
  const { id } = useParams();

  console.log(id);

  const yonlendir = useNavigate();

  useEffect(() => {
    fetch("/data.json")
      .then(response => response.json())
      .then(veri => {
        const eleman = veri.find(d => d.id === parseInt(id));
        if ( eleman === undefined){
            console.log("Eleman bulunamadı.")
            yonlendir('/not-found');
            return;
        }
        veriAyarla(eleman);
        console.log(veri);
        console.log(id);
      })
      .catch(error=>console.error('Hata oluştu',error));
  }, [id,yonlendir]);

  if (!veri) {
    return <div>Loading...</div>;
  } else{
    return (
        <div>
          <h1>Details for {veri.name}</h1>
          <p>ID: {veri.id}</p>
          <p>Name: {veri.name}</p>
          <p>Age: {veri.age}</p>
          <p>Email: {veri.email}</p>
        </div>
      );
  }

  
};

export default DataDetailsListComponent;
