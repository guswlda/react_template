import { Moon, Sun } from 'lucide-react';
import React, { useState } from 'react';

const ModeCtrl = () => {
  const [darkMode, setdarkMode] = useState(false);

  // const toggleTheme = () => {};

  return (
    <button onClick={() => setdarkMode(!darkMode)}>
      {darkMode ? <Sun /> : <Moon />}
    </button>
  );
};

export default ModeCtrl;
