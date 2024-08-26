import { useState } from 'react';
import './App.css';
import Header from "./components/Header";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Form from './components/form';



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Banner/>
      <Cards/>
      <Form />
    </>
  )
}

export default App
