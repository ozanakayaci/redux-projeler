import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

const intialCards = ["confirmed", "recovered", "deaths", "active"];

function Card() {
  const data = useSelector((state) => state.covid.items);
  const [countryData, setCountryData] = useState({
    date: "0",
    confirmed: 0,
    recovered: 0,
    deaths: 0,
    active: 0,
  });

  useEffect(() => {
    if (data[0] !== undefined) {
      setCountryData(data[data.length - 1]);
    }
  }, [data]);

  return (
    <div className="cards">
      {intialCards.map((item, i) => {
        return (
          <div className={`card ${item}`} key={i}>
            <h3>{item}</h3>
            <h2>{countryData[item].toLocaleString("en")}</h2>
            <p>
              Last updated at: <br />
              {new Date(countryData.date).toDateString()}
            </p>
            <div>Number of {item} cases of COVID-19</div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
