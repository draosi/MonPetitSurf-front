import { useContext, useState } from "react";
import { MpsContext } from "../context/MpsContext";
import "../css/SpotInfos.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const SpotInfos = () => {
  const { value2, value3, value6 } = useContext(MpsContext);
  const [surfData, setSurfData] = value2;
  const [windData, setWindData] = value3;
  const [comments, setComments] = value6;

  console.log(value2);
  console.log(value3);

  const waveHeightArray = value2[0].wave_height;
  const wavePerriodArray = value2[0].wave_period;

  const waveHeight = waveHeightArray.filter((el, i) => i % 3 === 0 && i < 24);

  const height = [
    {
      name: "00h00",
      h: 0.82,
    },
    {
      name: "03h00",
      h: 0.8,
    },
    {
      name: "06h00",
      h: 0.84,
    },
    {
      name: "09h00",
      h: 0.94,
    },
    {
      name: "12h00",
      h: 1.04,
    },
    {
      name: "15h00",
      h: 1.16,
    },
    {
      name: "18h00",
      h: 1.38,
    },
    {
      name: "21h00",
      h: 1.54,
    },
  ];

  console.log(waveHeight);
  console.log(value2);

  return (
    <div className="card-surf-infos shadow">
      <div className="graph">
        <div className="height-graph">
          <ResponsiveContainer width='30%' height='100%'>
            <LineChart data={height}>
              <Line type="monotone" dataKey="h" stroke="#8884d8" />
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default SpotInfos;
