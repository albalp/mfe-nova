import React, { useEffect, useRef } from 'react';

import Modal from 'modal/modal';
import Navigation from 'header/Navigation';
import { load } from 'web-component-load' ;
import styled from 'styled-components';
import dataAPI from '../api/data';

function App() {
    const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
    cursor: pointer;
    &:hover {
        background-color: palevioletred;
        color: white;
    }
    `
    const refCalendar = useRef();
    useEffect(() => {
        if (refCalendar.current){
        const calendar = refCalendar.current;
        calendar.currentDate = new Date;
        calendar.srcData = dataAPI;
    }
        load('http://localhost:5000');
    }, []);

return (
    <div className="App">
        <Navigation />
       <Modal />
       <Button>Add Activity</Button>
       <calendar-component ref={refCalendar} />
       <add-activity-button-component />
    </div>
);

}

export default App;