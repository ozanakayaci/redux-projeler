import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchGlobal } from "../redux/covidSlice";

import {
  LineChart,
  Line,
  Bar,
  BarChart,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
  ResponsiveContainer,
} from "recharts";

function Graph() {
  const data = useSelector((state) => state.covid.items);
  const selectedCountry = useSelector((state) => state.covid.selectedCountry);
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedCountry === "Global") {
      dispatch(fetchGlobal());
    }
  }, [dispatch, selectedCountry]);

  return (
    <div>
      {selectedCountry === "Global" ? (
        //for global
        <div className="graph">
          <h4>Confirmed</h4>
          <ResponsiveContainer width="90%" height={275}>
            <LineChart
              width={500}
              height={200}
              data={data}
              syncId="anyId"
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="confirmed"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </LineChart>
          </ResponsiveContainer>
          <h4>Deaths</h4>
          <ResponsiveContainer width="90%" height={275}>
            <LineChart
              width={500}
              height={200}
              data={data}
              syncId="anyId"
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="deaths"
                stroke="#FF0000"
                fill="#FF0000"
              />
              <Brush />
            </LineChart>
          </ResponsiveContainer>
        </div>
      ) : (
        //for selected country
        <div className="graph">
          <h4>Current state in {selectedCountry}</h4>
          <ResponsiveContainer width="90%" height={670}>
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 25,
                left: 25,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="confirmed" fill="#8884d8" />
              <Bar dataKey="recovered" fill="#82ca9d" />
              <Bar dataKey="deaths" fill="#FF0000" />
              <Bar dataKey="active" fill="#ECE632" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

export default Graph;
