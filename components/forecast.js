export default function Forecast({ data }) {
  const daily = data.filter((item) =>
    item.dt_txt.includes("12:00:00")
  );

  return (
    <div className="forecast">
      <h2>Weekly Forecast</h2>

      <div className="row">
        {daily.map((item, i) => {
          const icon = `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`;

          return (
            <div className="card" key={i}>
              <p>
                {new Date(item.dt_txt).toLocaleDateString("en-US", {
                  weekday: "short",
                })}
              </p>

              <img src={icon} />
              <h4>{Math.round(item.main.temp)}°C</h4>
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .forecast {
          margin-top: 50px;
          text-align: center;
        }

        h2 {
          font-size: 26px;
          margin-bottom: 20px;
        }

        .row {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .card {
          padding: 20px;
          border-radius: 15px;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          width: 110px;
          transition: 0.3s;
        }

        .card:hover {
          transform: scale(1.05);
        }

        img {
          width: 50px;
        }

        h4 {
          font-size: 18px;
        }
      `}</style>
    </div>
  );
}