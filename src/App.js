import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react'
import Greet from './components/Greet';
import Counter from './components/Counter';
import Message from './components/Message';
import Functionclick from './components/Functionclick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Product from './components/Product';
import ProductDetails from './components/ProductDetails'

function App() {
  const [isLoading, setLoading] = useState(true);

  function fakeRequest() {
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    });
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <div className="App">
      <header className="App-header">
        <Product />
      </header>
    </div>
  )
}

export default App;
