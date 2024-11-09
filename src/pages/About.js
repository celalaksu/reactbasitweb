import React, { useEffect, useState } from "react";
import Avatar from "../components/Avatar";
import Card from "../components/Card";

const About = () => {
    const kisi = { isim: "eemcs" };
    return (
      <div>
        <h1>About </h1>
        <br></br>
        <Card>
          <Avatar boyut={100} kisi={{ isim: kisi.isim }} />
          <p>{kisi.isim}</p>
        </Card>
      </div>
    );
}

export default About;