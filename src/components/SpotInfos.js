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

  const [count, setCount] = useState(0);

  const waveHeight = value2[0].wave_height.filter(
    (el, i) => i % 3 === 0 && i < 72
  );
  const wavePeriod = value2[0].wave_period.filter(
    (el, i) => i % 3 === 0 && i < 72
  );
  const windSpeed = value3[0].windspeed_10m.filter(
    (el, i) => i % 3 === 0 && i < 72
  );
  console.log(waveHeight);

  const dateOption = { weekday: "long", month: "long", day: "numeric" };
  const DateOfTheDay = new Date().toLocaleDateString("fr-FR", dateOption);
  console.log(DateOfTheDay);

  const increment = () => {
    if (count < 4 && count >= 0) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count < 4 && count >= 0) {
      setCount(count - 1);
    }
  };

  const surfingInfos = [
    {
      whatTime: "00h",
      wave_size: waveHeight[0],
      wave_period: wavePeriod[0],
      wind_speed: windSpeed[0],
    },
    {
      whatTime: "03h",
      wave_size: waveHeight[1],
      wave_period: wavePeriod[1],
      wind_speed: windSpeed[1],
    },
    {
      whatTime: "06h",
      wave_size: waveHeight[2],
      wave_period: wavePeriod[2],
      wind_speed: windSpeed[2],
    },
    {
      whatTime: "09h",
      wave_size: waveHeight[3],
      wave_period: wavePeriod[3],
      wind_speed: windSpeed[3],
    },
    {
      whatTime: "12h",
      wave_size: waveHeight[4],
      wave_period: wavePeriod[4],
      wind_speed: windSpeed[4],
    },
    {
      whatTime: "15h",
      wave_size: waveHeight[5],
      wave_period: wavePeriod[5],
      wind_speed: windSpeed[5],
    },
    {
      whatTime: "18h",
      wave_size: waveHeight[6],
      wave_period: wavePeriod[6],
      wind_speed: windSpeed[6],
    },
    {
      name: "21h",
      wave_size: waveHeight[7],
      wave_period: wavePeriod[7],
      wind_speed: windSpeed[7],
    },
  ];

  return (
    <div>
      <div className="date-of-the-day">
        <button className="button-date-decrement">-</button>
        <p style={{ margin: "0px 10px" }}>{DateOfTheDay}</p>
        <button className="button-date-increment">+</button>
      </div>
      <div className="card-surf-infos shadow">
        <div className="graph">
          <div className="height-graph">
            <h4 style={{ textAlign: "center" }}>Wave size</h4>
            <ResponsiveContainer width={"100%"} height={400}>
              <AreaChart data={surfingInfos}>
                <Area dataKey="wave_size" stroke="#0258B0" />
                <XAxis dataKey="whatTime" axisLine={false} tickLine={false} />
                <YAxis
                  dataKey="wave_size"
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
            <h4 style={{ textAlign: "center" }}>Wave period</h4>
            <ResponsiveContainer width={"100%"} height={400}>
              <AreaChart data={surfingInfos}>
                <Area dataKey="wave_period" stroke="#0258B0" />
                <XAxis dataKey="whatTime" axisLine={false} tickLine={false} />
                <YAxis
                  dataKey="wave_period"
                  tickFormatter={(number) => `${number}s`}
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
            <h4 style={{ textAlign: "center" }}>Wind speed</h4>
            <ResponsiveContainer width={"100%"} height={400}>
              <AreaChart data={surfingInfos}>
                <Area dataKey="wind_speed" stroke="#0258B0" />
                <XAxis dataKey="whatTime" axisLine={false} tickLine={false} />
                <YAxis
                  dataKey="wind_speed"
                  tickFormatter={(number) => `${number}km/h`}
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
