import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { routes } from './Helpers/Constants/routes';
import { Main } from './Containers/Main';
import { List } from './Containers/List';

function App() {
  return (
    <Routes>
      <Route path={routes.main} element={<Main />} />
      <Route path={routes.characters} element={<List />} />
    </Routes>
  );
}

export default App;
