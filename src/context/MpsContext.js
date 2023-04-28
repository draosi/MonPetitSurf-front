import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MpsContext = createContext();

export const MpsController = ({ children }) => {
  const [surfData, setSurfData] = useState([]);
  const [windData, setWindData] = useState([]);
  const [meteoData, setMeteoData] = useState([])
  const [locationData, setLocationData] = useState([]);

  const [users, setUsers] = useState([]);
  const [spots, setSpots] = useState([]);
  const [comments, setComments] = useState([]);

  // const [favoriteSpots, setFavoriteSpots] = useState([])

  const [query, setQuery] = useState("Lacanau-Océan");
  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);
  const [surfLoader, setSurfLoader] = useState(false)
  const [windLoader, setWindLoader] = useState(false)
  const [meteoLoader, setMeteoLoader] = useState(false)

  const fetchLocationData = async () => {
    try {
      const callTheData = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${query}`
      );
      setLocationData(callTheData.data.results[0]);
      setLoading(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchLocationData();
  }, [query]);

  const fetchSurfData = async () => {
    try {
      const callTheData = await axios.get(
        `https://marine-api.open-meteo.com/v1/marine?latitude=${locationData.latitude}&longitude=${locationData.longitude}&hourly=wave_height,wave_direction,wave_period`
      );
      setSurfData(callTheData.data.hourly);
      setSurfLoader(true);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchWindData = async () => {
    try {
      const callTheData = await axios.get(
        `https://api.open-meteo.com/v1/meteofrance?latitude=${locationData.latitude}&longitude=${locationData.longitude}&hourly=windspeed_10m,winddirection_10m`
      );
      setWindData(callTheData.data.hourly);
      setWindLoader(true);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchMeteoData = async () => {
    try {
      const callTheData = await axios.get(`https://api.open-meteo.com/v1/meteofrance?latitude=${locationData.latitude}&longitude=${locationData.longitude}&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum,precipitation_hours&timezone=auto`)
      setMeteoData(callTheData.data.daily)
      setMeteoLoader(true)
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    locationData.latitude && locationData.longitude && fetchSurfData();
    locationData.latitude && locationData.longitude && fetchWindData();
    locationData.latitude && locationData.longitude && fetchMeteoData();
  }, [locationData.latitude, locationData.longitude]);

  console.log(surfData)

  const fetchUsers = async () => {
    try {
      const callTheData = await axios.get("http://localhost:8000/api/users");
      setUsers(callTheData.data);
      setLoading(true);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchSpots = async () => {
    try {
      const callTheData = await axios.get("http://localhost:8000/api/spots");
      setSpots(callTheData.data);
      setLoading(true);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchComments = async () => {
    try {
      const callTheData = await axios.get("http://localhost:8000/api/comments");
      setComments(callTheData.data);
      setLoading(true);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchSpots();
    fetchComments();
  }, []);

  return (
    <MpsContext.Provider
      value={{
        value1: [locationData, setLocationData],
        value2: [surfData, setSurfData],
        value3: [windData, setWindData],
        value4: [users, setUsers],
        value5: [spots, setSpots],
        value6: [comments, setComments],
        value7: [query, setQuery],
        value8: [input, setInput],
        value9: [meteoData, setMeteoData],
        // value10: [favoriteSpots, setFavoriteSpots],
      }}
    >
      {loading && children}
    </MpsContext.Provider>
  );
};
