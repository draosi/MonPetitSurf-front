import { useContext, useState, useEffect } from "react";
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

  // const [count, setCount] = useState(0);
  // let test1 = "00h"
  // let test2 = parseInt(test1)
  // console.log(test2)

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

  // const increment = () => {
  //   if (count <= 0) {
  //     setCount(0)
  //   } else if (count >= 2) {
  //     setCount(2)
  //   } else {
  //     setCount(count + 1);
  //   }
  // };

  // const decrement = () => {
  //   if (count <= 0) {
  //     setCount(0)
  //   } else if (count >= 2) {
  //     setCount(2)
  //   } else {
  //     setCount(count - 1);
  //   }
  // };

  // let day = [];
  // {
  //   if ((count = 0)) {
  //     day = surfingInfos;
  //   } else if ((count = 1)) {
  //     day = surfingInfos.map((e, i) => {
  //       (e.wave_size[i] = e.wave_size[i + 8]),
  //         (e.wave_period[i] = e.wave_period[i + 8]),
  //         (e.wind_speed[i] = e.wind_speed[i + 8]);
  //     });
  //   } else {
  //     day = surfingInfos.map((e, i) => {
  //       (e.wave_size = e.wave_size[i + 16]),
  //         (e.wave_period = e.wave_period[i + 16]),
  //         (e.wind_speed = e.wind_speed[i + 16]);
  //     });
  //   }
  // }

  let surfingInfos = [
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
      whatTime: "21h",
      wave_size: waveHeight[7],
      wave_period: wavePeriod[7],
      wind_speed: windSpeed[7],
    },
    {
      whatTime: "00h",
      wave_size: waveHeight[8],
      wave_period: wavePeriod[8],
      wind_speed: windSpeed[8],
    },
    {
      whatTime: "03h",
      wave_size: waveHeight[9],
      wave_period: wavePeriod[9],
      wind_speed: windSpeed[9],
    },
    {
      whatTime: "06h",
      wave_size: waveHeight[10],
      wave_period: wavePeriod[10],
      wind_speed: windSpeed[10],
    },
    {
      whatTime: "09h",
      wave_size: waveHeight[11],
      wave_period: wavePeriod[11],
      wind_speed: windSpeed[11],
    },
    {
      whatTime: "12h",
      wave_size: waveHeight[12],
      wave_period: wavePeriod[12],
      wind_speed: windSpeed[12],
    },
    {
      whatTime: "15h",
      wave_size: waveHeight[13],
      wave_period: wavePeriod[13],
      wind_speed: windSpeed[13],
    },
    {
      whatTime: "18h",
      wave_size: waveHeight[14],
      wave_period: wavePeriod[14],
      wind_speed: windSpeed[14],
    },
    {
      whatTime: "21h",
      wave_size: waveHeight[15],
      wave_period: wavePeriod[15],
      wind_speed: windSpeed[15],
    },
    {
      whatTime: "00h",
      wave_size: waveHeight[16],
      wave_period: wavePeriod[16],
      wind_speed: windSpeed[16],
    },
    {
      whatTime: "03h",
      wave_size: waveHeight[17],
      wave_period: wavePeriod[17],
      wind_speed: windSpeed[17],
    },
    {
      whatTime: "06h",
      wave_size: waveHeight[18],
      wave_period: wavePeriod[18],
      wind_speed: windSpeed[18],
    },
    {
      whatTime: "09h",
      wave_size: waveHeight[19],
      wave_period: wavePeriod[19],
      wind_speed: windSpeed[19],
    },
    {
      whatTime: "12h",
      wave_size: waveHeight[20],
      wave_period: wavePeriod[20],
      wind_speed: windSpeed[20],
    },
    {
      whatTime: "15h",
      wave_size: waveHeight[21],
      wave_period: wavePeriod[21],
      wind_speed: windSpeed[21],
    },
    {
      whatTime: "18h",
      wave_size: waveHeight[22],
      wave_period: wavePeriod[22],
      wind_speed: windSpeed[22],
    },
    {
      whatTime: "21h",
      wave_size: waveHeight[23],
      wave_period: wavePeriod[23],
      wind_speed: windSpeed[23],
    },
  ];

  // const incrementIndex = (surfingInfos) => {
  //   console.log(count)
  //   if (count === 0 && surfingInfos?.length > 0) {
  //     return surfingInfos.map((e, i) => {
  //       return {
  //         ...e,
  //         wave_size: waveHeight[i],
  //         wave_period: wavePeriod[i],
  //         wind_speed: windSpeed[i],
  //       };
  //     });
  //   } else if (count === 1 && surfingInfos?.length > 0) {
  //     return surfingInfos.map((e, i) => {
  //       return {
  //         ...e,
  //         wave_size: waveHeight[i + 8],
  //         wave_period: wavePeriod[i + 8],
  //         wind_speed: windSpeed[i + 8],
  //       };
  //     });
  //   } else if (count === 2 && surfingInfos?.length > 0){
  //     return surfingInfos.map((e, i) => {
  //       return {
  //         ...e,
  //         wave_size: waveHeight[i + 16],
  //         wave_period: wavePeriod[i + 16],
  //         wind_speed: windSpeed[i + 16],
  //       };
  //     });
  //   } else {
  //     return surfingInfos
  //   }
  // };

  // useEffect(() => {
  //   incrementIndex();
  // }, [count]);

  // console.log(count);
  // console.log(surfingInfos);

  return (
    <div>
      {/* <div className="date-of-the-day">
        <button className="button-date-decrement" onClick={decrement}>
          -
        </button>
        <p style={{ margin: "0px 10px" }}>{DateOfTheDay}</p>
        <button className="button-date-increment" onClick={increment}>
          +
        </button>
      </div> */}
      <div className="card-surf-infos shadow">
        <div className="graph">
          <div className="height-graph">
            <h4 style={{ textAlign: "center" }}>Wave size</h4>
            <ResponsiveContainer width={"100%"} height={400}>
              <AreaChart data={surfingInfos}>
                <defs>
                  <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0258B0" stopOpacity={0.5} />
                    <stop offset="75%" stopColor="#0258B0" stopOpacity={0.15} />
                  </linearGradient>
                </defs>
                <Area dataKey="wave_size" stroke="#0258B0" fill="url(#color)" />
                <XAxis
                  dataKey="whatTime"
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(str) => {
                    const dateToNumber = parseInt(str);
                    if (dateToNumber % 6 === 0) {
                      return str;
                    } else {
                      return "";
                    }
                  }}
                />
                <YAxis
                  dataKey="wave_size"
                  tickFormatter={(number) => `${number} m`}
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
                <defs>
                  <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0258B0" stopOpacity={0.5} />
                    <stop offset="75%" stopColor="#0258B0" stopOpacity={0.15} />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="wave_period"
                  stroke="#0258B0"
                  fill="url(#color)"
                />
                <XAxis
                  dataKey="whatTime"
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(str) => {
                    const dateToNumber = parseInt(str);
                    if (dateToNumber % 6 === 0) {
                      return str;
                    } else {
                      return "";
                    }
                  }}
                />
                <YAxis
                  dataKey="wave_period"
                  tickFormatter={(number) => `${number} s`}
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
                <defs>
                  <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#0258B0" stopOpacity={0.5} />
                    <stop offset="75%" stopColor="#0258B0" stopOpacity={0.15} />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="wind_speed"
                  stroke="#0258B0"
                  fill="url(#color)"
                />
                <XAxis
                  dataKey="whatTime"
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(str) => {
                    const dateToNumber = parseInt(str);
                    if (dateToNumber % 6 === 0) {
                      return str;
                    } else {
                      return "";
                    }
                  }}
                />
                <YAxis
                  dataKey="wind_speed"
                  tickFormatter={(number) => `${number} km/h`}
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
