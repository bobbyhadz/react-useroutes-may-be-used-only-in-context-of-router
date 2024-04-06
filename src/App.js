import './App.css';

import React from 'react';
import {useRoutes} from 'react-router-dom';

export default function App() {
  let element = useRoutes([
    {path: '/', element: <Home />},
    {path: '/about', element: <About />},
  ]);

  return element;
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}
