import { useEffect, useState } from "react";
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
      text2: "Your Passion",
    },
    {
      text1: "Give in to",
      text2: "Your Passions",
    },
  ];
  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);
  // useEffect(() => {
  //   setInterval(() => {
  //     setHeroCount((count) => {
  //       return count === 2 ? 0 : count + 1;
  //     });
  //   }, 3000);
  // }, []);
  return (
    <>
      <Navbar />
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Hero
        setPlayStatus={setPlayStatus}
        heroCount={heroCount}
        playStatus={playStatus}
        heroData={heroData[heroCount]}
        setHeroCount={setHeroCount}
      />
    </>
  );
};

export default App;
