import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "./Card";

const Countries = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag"
      )
      .then((res) => setData(res.data));
  }, [data]);

  return (
    <div className="countries">
      <ul className="countries-list">
        {data.map((country) => (
          <Card country={country} key={country.name} />
        ))}
      </ul>
    </div>
  );
};

export default Countries;
