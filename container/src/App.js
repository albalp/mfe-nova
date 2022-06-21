import React, { useEffect, useRef } from "react";

import Modal from "modal/modal";
import Navigation from "header/Navigation";
import { load } from "web-component-load";
import dataAPI from "../api/data";

function App() {
  const refCalendar = useRef();
  useEffect(() => {
    if (refCalendar.current) {
      const calendar = refCalendar.current;
      calendar.currentDate = new Date();
      calendar.srcData = dataAPI;
    }
    load("http://localhost:5000");
  }, []);

  return (
    <div className="App">
      <Navigation />
      <Modal />
      <calendar-component ref={refCalendar} />
      <add-activity-button-component />
    </div>
  );
}

export default App;
