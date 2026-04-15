// "use client";

// import Weather from "./components/weather";

// export default function Home() {
//   return (
//     <div>
//       {/* <h1>Weather App</h1> */}

//       <Weather/>
//     </div>

    
//   );
// }
"use client";

import Weather from "../components/weather";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200">
      <Weather />
    </div>
  );
}