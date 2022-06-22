import React, { useEffect, useRef, useState } from "react";

import Modal from "modal/modal";
import Navigation from "header/Navigation";
import { load } from "web-component-load";

import { helpHttp } from "./helpers/helpHttp";
import dataAPI from "../api/data";

function App() {
  const [activity, setActivity] = useState([]);
  const refCalendar = useRef();
  const api = helpHttp();

  const urlActivities = 'http://localhost:8080/activity'

  useEffect(() => {
    api.get(urlActivities).then((res) => {
      if (!res.err) {
        console.log(res)
        setActivity(res);
      } else {
        setActivity(null);
      }
    });
  })

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
