import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import {BrowserRouter} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <BrowserRouter>
                    <div className="app-container">
                        <AppBar title="Walmart Code Challenge" />
                        <div className="grid-container">
                            <h2>Code Challenge</h2>
                        </div>
                    </div>
                </BrowserRouter>
            </MuiThemeProvider>
        );
    }
}
export default hot(module)(App);
