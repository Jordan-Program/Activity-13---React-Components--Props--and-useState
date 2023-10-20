import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import Header from './Header'
import Counter from './Counter';
import Footer from './Footer'

function App() {

  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("Activity 13 - React Componets, Props, and useState");
  const [copyright, setCopyright] = useState("Copyright 2023 © Melchisideck Jordan U. Datuin All rights reserved.");

  return (
    <>
    <main className="d-flex flex-column min-vh-100 ">
        
        <Header title={title} count={count}/>
        <Counter count={count} countStatus={setCount}/>
        <Footer copyright={copyright} />
        
    </main>
    </>
  )
}

export default App
