import React, { useEffect } from 'react';

import Modal from 'modal/modal';
import Navigation from 'header/Navigation';
import { load } from 'web-component-load' ;

function App() {
    const currentDate = new Date();

    useEffect(() => {
        load('http://localhost:5000');
    }, []);

return (
    <div className="App">
       <Navigation />
       <h1>Mfe Container Nova</h1>
       <Modal />
       <calendar-component current-date={currentDate} />
    </div>
);

}

export default App;