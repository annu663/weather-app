export default function WeatherData({ data }) {

  const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;

  return (
    <div className="card">

      <div className="top">
        <div>
          <h2>{data.name}</h2>
          <h1>{Math.round(data.main.temp)}°C</h1>
          <p>{data.weather[0].description}</p>
        </div>

        <img src={icon} />
      </div>

      <div className="info">
        <div>
          <span>Humidity</span>
          <h3>{data.main.humidity}%</h3>
        </div>
        <div>
          <span>Wind</span>
          <h3>{data.wind.speed} m/s</h3>
        </div>
        <div>
          <span>Feels Like</span>
          <h3>{Math.round(data.main.feels_like)}°C</h3>
        </div>
      </div>

      <style jsx>{`
        .card {
          margin: 0 auto;
          width: 700px;
          padding: 40px;
          border-radius: 25px;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(15px);
          box-shadow: 0 10px 40px rgba(0,0,0,0.4);
        }

        .top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        h2 {
          font-size: 28px;
          opacity: 0.8;
        }

        h1 {
          font-size: 80px;
          margin: 10px 0;
        }

        p {
          font-size: 18px;
        }

        img {
          width: 150px;
        }

        .info {
          display: flex;
          justify-content: space-between;
          margin-top: 30px;
        }

        .info div {
          flex: 1;
          text-align: center;
        }

        span {
          opacity: 0.6;
          font-size: 14px;
        }

        h3 {
          font-size: 20px;
        }

        /* 📱 MOBILE */
@media (max-width: 768px) {

  .card {
    width: 95%;
    padding: 25px;
  }

  .top {
    flex-direction: column;
    text-align: center;
  }

  h1 {
    font-size: 45px;
  }

  img {
    width: 100px;
    margin-top: 10px;
  }

  .info {
    flex-direction: column;
    gap: 15px;
  }
}


      `}</style>



    </div>
  );
}