"use client";

export default function Search({ city, setCity, getWeather }) {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button onClick={getWeather}>Search</button>

      <style jsx>{`

      .search {
      display:flex;
      justify-content: center;
      margin-bottom: 40px;
      }

       input {
          padding: 18px;
          width: 450px;
          border-radius: 30px 0 0 30px;
          border: none;
          outline: none;
          font-size: 16px;
        }
      
         button {
          padding: 18px 30px;
          border-radius: 0 30px 30px 0;
          border: none;
          background: #3b82f6;
          color: white;
          font-size: 16px;
          cursor: pointer;
          transition: 0.3s;
        }

        button:hover {
          background: #2563eb;
        }
      
      `}</style>


    </div>
  );
}