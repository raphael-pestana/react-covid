import React from 'react';
import Menu from './components/menu/menu';
import Footer from './components/Footer/footer';

import "./app-style.css"

class App extends React.Component {
   
render() {
   
    return (
        <div className="app-body">
            <Menu />
            <div className="app-footer">
                <Footer/>
            </div>
        </div>

        )
    }
}

export default App;