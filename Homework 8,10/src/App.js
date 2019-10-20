import React from "react";

import '../src/styles/App.scss';
import Header from './components/Header/Header'



class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>My React App!</h1>
                </div>
                <Header />
            </div>
        );
    }
}

export default App; 