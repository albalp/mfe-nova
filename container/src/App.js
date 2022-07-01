import { useEffect, useRef, useState } from "react";
import {Observable} from 'windowed-observable';

import Modal from "modal/modal";
import Navigation from "header/Navigation";

import { load } from "web-component-load";
import { helpHttp } from "./helpers/helpHttp";

function App() {
  const [activity, setActivity] = useState([]);
  const [projects, setProjects] = useState([]);
  const [category, setCategory] = useState([]);
  
  const refCalendar = useRef();
  
  const api = helpHttp();

  const urlActivities = 'http://localhost:8080/activity'
  const urlProjects = 'http://localhost:8080/project'

  const observableProject = new Observable('data-projects');
  // const observableCategory = new Observable('data-category');
  observableProject.publish(projects);
  // observableCategory.publish(category);

  useEffect(() => {
    api.get(urlActivities).then((res) => {
      if (!res.err) {
        setActivity(res);
      } else {
        setActivity(null);
      }
    });
    api.get(urlProjects).then((res) => {
      if (!res.err) {
        setProjects(res);
        res.map((elem) => setCategory(elem));
      } else {
        setProjects(null);
      }
    });
  }, []);

  useEffect(() => {
    const calendar = refCalendar.current;
      calendar.currentDate = new Date();
      console.log('actividades del calendario', activity);
      calendar.srcData = activity;
    load("http://localhost:5000");
    // const categories = ()

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
