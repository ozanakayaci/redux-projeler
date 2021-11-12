import { useEffect, useState } from "react";

import { useSelector } from "react-redux";

function Card() {
  const data = useSelector((state) => state.covid.items);
  const [country, setCountry] = useState([]);

  useEffect(() => {
    if (data[data.length - 1].confirmed) {
      setCountry(data[data.length - 1]);
    }
  }, [data]);

  return <div class="cards">{country.confirmed}</div>;
}

export default Card;
