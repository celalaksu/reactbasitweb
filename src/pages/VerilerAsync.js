import { useEffect, useState } from "react";

const VerilerAsync = ()=>{
    const [veri, veriAl] = useState([]);

    useEffect(()=>{

        const fetchData = async () => {
             const data = await fetch("./data.json");
             const response = await data.json();
             return response;
        }
        
        fetchData()
            .then(sonuc => veriAl(sonuc))
            .catch(hata => console.log("Veri Alınamadı",hata));

    },[]);

    if (veri.length === 0) {
        return <div>Loading...</div>;
      }

    return (
        <div>
            <h1>Verilerim</h1>
            {
            <ul>
              {veri.map((eleman) => (
                <li key={eleman.id}>
                  <p>Name: {eleman.name}</p>
                  <p>Age: {eleman.age}</p>
                  <p>Email: {eleman.email}</p>
                </li>
              ))}
            </ul>
          }
        </div>        
    );
}

export default VerilerAsync;