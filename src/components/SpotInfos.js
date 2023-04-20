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
  Area,
  AreaChart,
  Tooltip,
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

  const heightOfWaves = [
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

  // const CustomTooltip = ({ active, payload, label }) => {
  //   console.log(active)
  //   console.log(payload)
  //   console.log(label)
  //   if (active && payload && payload.length) {
  //     return (
  //       <div className="tooltip">
  //         <h4>{label}</h4>
  //       </div>
  //     );
  //   }
  //   return null;
  // };

  return (
    <div>
    <div className="card-surf-infos shadow">
      <div className="graph">
        <div className="height-graph">
          <ResponsiveContainer width={"100%"} height={400}>
            <AreaChart data={heightOfWaves}>
              <Area dataKey="h" stroke="#0258B0" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis
                dataKey="h"
                tickFormatter={(number) => `${number}m`}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip />
              <CartesianGrid opacity={0.8} vertical={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
    <div className="card-surf-infos shadow">
      <div className="graph">
        <div className="height-graph">
          <ResponsiveContainer width={"100%"} height={400}>
            <AreaChart data={heightOfWaves}>
              <Area dataKey="h" stroke="#0258B0" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis
                dataKey="h"
                tickFormatter={(number) => `${number}m`}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip />
              <CartesianGrid opacity={0.8} vertical={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
    <div className="card-surf-infos shadow">
      <div className="graph">
        <div className="height-graph">
          <ResponsiveContainer width={"100%"} height={400}>
            <AreaChart data={heightOfWaves}>
              <Area dataKey="h" stroke="#0258B0" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis
                dataKey="h"
                tickFormatter={(number) => `${number}m`}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip />
              <CartesianGrid opacity={0.8} vertical={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SpotInfos;
