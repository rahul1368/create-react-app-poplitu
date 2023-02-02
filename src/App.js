import { Switch, ThemeProvider } from '@mui/material';
import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './apps/pre-release/Home';
import { history } from './apps/routing/history/history';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter history={history}>
        <Suspense fallback={<>Loading...</>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product' element={<Home />} />
            <Route path='/pricing' element={<Home />} />
          </Routes>
        </Suspense>
        {/* <Home /> */}
      </BrowserRouter>
    );
  }
}

export default App;
