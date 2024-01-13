import React, {useEffect} from 'react';
import {Routes, Route, useLocation} from "react-router-dom";
import Game from "./game/game"

const AppRoutes = () => {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="content">
      <Routes>
        <Route path="/" element={<Game/>}/>
      </Routes>
    </div>
  );
};

export default AppRoutes;
