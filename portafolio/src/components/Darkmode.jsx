import * as React from 'react';
import Image1 from '../assets/price-1.svg';
import DarkmodeToggle from './DarkmodeToggle';

const Darkmode = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    if (isDarkMode) {
      document.querySelector('body').setAttribute('data-theme', 'light');
      localStorage.setItem("selectedTheme", "light");
    } else {
      document.querySelector('body').setAttribute('data-theme', 'dark');
      localStorage.setItem("selectedTheme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  React.useEffect(() => {
    const selectedTheme = localStorage.getItem("selectedTheme");
    if (selectedTheme === "dark") {
      document.querySelector('body').setAttribute('data-theme', 'dark');
      setIsDarkMode(true);
    }
  }, []);

  return (
    <div className="dark_mode">
      <DarkmodeToggle checked={isDarkMode} onChange={toggleDarkMode} />
      
    </div>
  );
};

export default Darkmode;