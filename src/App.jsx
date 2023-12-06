import { useState } from "react";
import Background from "./Components/Background/Background.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
const App = () => {
  let heroData = [
    {
      text1: "Dive into",
      text2: "What you love",
    },
    {
      text1: "Indulge",
      text2: "Your Passions",
    },
    {
      text1: "Give into",
      text2: "Your passion",
    },
  ];
  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  );
};

export default App;
