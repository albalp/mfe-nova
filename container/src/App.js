import React, { useEffect, useRef } from 'react';

import Modal from 'modal/modal';
import Navigation from 'header/Navigation';
import BtnModal from './BtnModal';

import { load } from 'web-component-load' ;

// import srcData from '../api/mocks.json';
import { data } from '../api/data';

function App() {
    const ref = useRef(null);

    useEffect(() => {
        const calendar = ref.current;
        calendar.currentDate = new Date();
        calendar.srcData = data;
        load('http://localhost:5000');
        console.log(calendar)
    }, []);

return (
    <div className="App">
       <Navigation />
       <Modal />
       <BtnModal />
       <calendar-component ref={ref} />
       <add-activity-button-component />
    </div>
);

}

export default App;