export default function History({ data }) {
  return (
    <div className="history">
      <h2>Recent Hours</h2>

      <div className="row">
        {data.map((item, i) => (
          <div key={i} className="card">
            <p>
              {new Date(item.dt_txt).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>

            <h4>{Math.round(item.main.temp)}°C</h4>
          </div>
        ))}
      </div>

      <style jsx>{`
        .history {
          margin-top: 40px;
          text-align: center;
        }

        .row {
          display: flex;
          justify-content: center;
          gap: 20px;
        }

        .card {
          padding: 10px;
          border-radius: 10px;
          background: rgba(255,255,255,0.1);
          width: 90px;
        }

        /*  MOBILE */
        @media (max-width: 768px) {

        .row {
        flex-wrap: wrap;
        }

        .card {
         width: 70px;
         font-size: 12px;
         }
    }


      `}</style>
    </div>
  );
}