import { useState } from "react";
const Darkmode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const darkModeStyles = {
    backgroundColor: "black",
    color: "white",
  };
  return (
    <div style={isDarkMode ? darkModeStyles : {}}>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      <h1>My Web App</h1>
      <p>Welcome to my website in {isDarkMode ? "Dark" : "Light"} Mode!</p>
    </div>
  );
};

export default Darkmode;
