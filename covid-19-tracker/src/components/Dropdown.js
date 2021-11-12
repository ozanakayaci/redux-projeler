import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  fetchCountries,
  fetchCountry,
  changeCountry,
} from "../redux/covidSlice";

function Dropdown() {
  const countries = useSelector((state) => state.covid.countries);
  const selectedCountry = useSelector((state) => state.covid.selectedCountry);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
    if (selectedCountry === "Global") {
      return false;
    } else {
      dispatch(fetchCountry(selectedCountry));
    }
  }, [dispatch, selectedCountry]);

  let handleChange = (e) => {
    dispatch(changeCountry(e.target.value));
  };

  return (
    <div>
      <select onChange={handleChange} name="countries" id="countries">
        <option value="Global">Global</option>
        {countries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
