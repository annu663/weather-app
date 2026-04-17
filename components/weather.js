"use client";
import React, { useState } from "react";
import Search from "./search";
import WeatherData from "./weatherdata";
import Forecast from "./forecast";
import History from "./history";

export default function Weather() {

  const [city, setCity] = useState("");
  const [current, setCurrent] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState("");
  const [history, setHistory] = useState([]);

  const apiKey = "0ed973757320828b5cc2e4c3d9c74583";

  const getWeather = async () => {

    if (!city.trim()) {
      setError("City name is required");
      return;
    }

    const cityRegex = /^[a-zA-Z\s]+$/;

    if (!cityRegex.test(city)) {
      setError("City name should contain only letters");
      return;
    }

    setError("");

    const res1 = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );

    const data1 = await res1.json();

    if (data1.cod !== 200) {
      setError("City not found");
      return;
    }

    const res2 = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
    );
    const data2 = await res2.json();

    setCurrent(data1);
    setForecast(data2.list);

    const now = Date.now();

    const pastData = data2.list.filter(
      (item) => new Date(item.dt_txt).getTime() < now
    );

    setHistory(pastData.slice(-6)); // last few hours

  };

  return (
    <div className="container">

      <img className="cloud cloud1" src="https://pngimg.com/uploads/cloud/cloud_PNG16.png" />
      <img className="cloud cloud2" src="https://pngimg.com/uploads/cloud/cloud_PNG16.png" />


      <div className="header">
        <h1>🌤️SkyCast</h1>
        <p>Live Weather Dashboard</p>
      </div>

      <Search city={city} setCity={setCity} getWeather={getWeather} />

      {error && <p className="error">{error}</p>}

      {current && <WeatherData data={current} />}
      {forecast.length > 0 && <Forecast data={forecast} />}
      {history.length > 0 && <History data={history} />}



      <style jsx>{`
            
            
            .container {
            min-height: 100vh;
            padding: 50px 20px;
            
              background: linear-gradient(270deg, #0f172a, #1e3a8a, #2563eb);
          color: white;
          background-size: 400% 400%;
          animation: bgMove 10s ease infinite;
          font-family: sans-serif;
            }

 @keyframes bgMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

 .header {
          text-align: center;
          margin-bottom: 40px;
        }

        .header h1 {
          font-size: 64px;
          font-weight: 700;
          letter-spacing: 2px;
        }

        .header p {
          font-size: 18px;
          opacity: 0.7;
          margin-top: 5px;
        }

        .error {
          color: #ff6b6b;
          text-align: center;
          margin-top: 10px;
        }
   
 
.cloud {
          position: absolute;
          width: 220px;
          opacity: 1.5;
        }

        .cloud1 {
          top: 100px;
          left: -200px;
          animation: move 40s linear infinite;
        }

        .cloud2 {
          top: 220px;
          left: -250px;
          animation: move 60s linear infinite;
        }

        @keyframes move {
          0% { transform: translateX(0); }
          100% { transform: translateX(140vw); }

        }
          
        /* 📱 MOBILE RESPONSIVE */
@media (max-width: 768px) {

  .container {
    padding: 30px 10px;
  }

  .header h1 {
    font-size: 36px;
  }

  .header p {
    font-size: 14px;
  }

  .cloud {
    width: 120px;
  }

  .cloud1 {
    top: 80px;
  }

  .cloud2 {
    top: 160px;
  }
}

            `}
      </style>
    </div>


  );
}


