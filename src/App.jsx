import { useState } from 'react';
import './App.css';
import Header from "./components/Header";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import Form from './components/form';
import Footer from './components/footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Banner/>
      <Cards/>
      <Form />
      <Footer/>
    </>
  )
}

export default App
