import React from "react";

const Card = (props) => {
  const { country } = props;
  console.log(country);
  const numberFormat = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <li className="card">
      <img src={country.flag} alt="flag" />
      <div className="data-container">
        <ul>
          <li>{country.name}</li>
          <li>capital: {country.capital}</li>
          <li>population: {numberFormat(country.population)}</li>
        </ul>
      </div>
    </li>
  );
};

export default Card;
