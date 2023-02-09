import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { routes } from './Helpers/Constants/routes';
import { Main } from './Containers/Main';
import { List } from './Containers/List';
import { AllHouses } from 'Containers/Houses';
import { Gryffindor } from 'Containers/Houses/Gryffindor';
import { Slytherin } from 'Containers/Houses/Slytherin';
import { Ravenclaw } from 'Containers/Houses/Ravenclaw';
import { Hufflepuff } from 'Containers/Houses/Hufflepuff';
import { OneCharacter } from 'Containers/OneCharacter';

function App() {
  return (
    <Routes>
      <Route path={routes.main} element={<Main />} />
      <Route path={routes.gryffindor} element={<List />} />
      <Route path={routes.houses} element={<AllHouses />} />
      <Route path={routes.house1} element={<Gryffindor />} />
      <Route path={routes.house2} element={<Ravenclaw />} />
      <Route path={routes.house3} element={<Slytherin />} />
      <Route path={routes.house4} element={<Hufflepuff />} />
      <Route path={routes.oneCharacter} element={<OneCharacter />} />
    </Routes>
  );
}

export default App;
