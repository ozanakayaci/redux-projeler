import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

//get global daily data
export const fetchGlobal = createAsyncThunk("datas/getDatas", async () => {
  const res = await axios("https://covid19.mathdro.id/api/daily");
  const modifiedRes = res.data.map((dailyData) => ({
    confirmed: dailyData.confirmed.total,
    deaths: dailyData.deaths.total,
    date: dailyData.reportDate,
  }));
  return modifiedRes;
});
//get country names
export const fetchCountries = createAsyncThunk(
  "datas/getCountries",
  async () => {
    const res = await axios("https://covid19.mathdro.id/api/countries");
    const resCountries = res.data.countries.map((country) => {
      return country.name;
    });
    return resCountries;
  }
);
//get country data
export const fetchCountry = createAsyncThunk(
  "datas/getCountry",
  async (country) => {
    const res = await axios(
      `https://covid19.mathdro.id/api/countries/${country}`
    );
    const modifiedRes = [
      {
        date: res.data.lastUpdate,
        confirmed: res.data.confirmed.value,
        recovered: res.data.recovered.value,
        deaths: res.data.deaths.value,
      },
    ];

    return modifiedRes;
  }
);

export const covidSlice = createSlice({
  name: "covid",
  initialState: {
    items: [],
    countries: [],
    selectedCountry: "Global",
  },

  reducers: {
    changeCountry: (state, action) => {
      state.selectedCountry = action.payload;
    },
  },
  extraReducers: {
    [fetchGlobal.fulfilled]: (state, action) => {
      state.items = action.payload;
    },
    [fetchCountries.fulfilled]: (state, action) => {
      state.countries = action.payload;
    },
    [fetchCountry.fulfilled]: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { changeCountry } = covidSlice.actions;

export default covidSlice.reducer;
