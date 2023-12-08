import { useState } from 'react'
import foto1 from './assets/img/foto1.png'
import foto2 from './assets/img/foto2.png'
import foto3 from './assets/img/foto3.png'
import foto4 from './assets/img/foto4.png'
import foto5 from './assets/img/foto5.png'
import './App.css'

import "bootstrap/dist/css/bootstrap.css"; 

import Header from './components/Header'
import MyCard from './components/MyCard'
import Footer from './components/Footer'

function App() {

  return (
    <>
      
      <Header titulo="Adopta un Perrito"></Header>      
      <div class="container">
        <div class="row">      
          <MyCard imagen={foto1} nombre = "Doki" detalle="Detalle perro 1" colorTag="primary" textoTag="Visitar a Doki"></MyCard>      
          <MyCard imagen={foto2} nombre = "Terry" detalle="Detalle perro 2" colorTag="dark" textoTag="Visitar a Terry"></MyCard>      
          <MyCard imagen={foto3} nombre = "Luna" detalle="Detalle perro 3" colorTag="warning" textoTag="Visitar a Luna"></MyCard>      
          <MyCard imagen={foto4} nombre = "Trueno" detalle="Detalle perro 4" colorTag="info" textoTag="Visitar a Trueno"></MyCard>      
          <MyCard imagen={foto5} nombre = "Duque" detalle="Detalle perro 5" colorTag="danger" textoTag="Visitar a Duque"></MyCard>      
        </div>
      </div>

      <Footer></Footer>
      
    </>
  )
}

export default App
