import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import React from 'react'

import { useState, useEffect } from 'react'
// import { useFetch } from "../../hooks/useFecth";
// import { useFetch } from "../../hooks/useFecth";
import Character from "./Character";

const ShowCharacter = () => {

  // const [datos] =  useFetch();
  // console.log(datos)

  // const url = 'https://hp-api.herokuapp.com/api/characters'
  // const url = 'https://hp-api.onrender.com/api/characters'
  // const url = 'https://pokeapi.co/api/v2/pokemon'
  
  const url = 'https://breakingbadapi.com/api/characters'
  const [datos, setDatos] = useState([]);

  const fetchApi = async () => {
    const responde = await fetch(url)
    console.log(responde.status)
    const respondeJSON = await responde.json()
    setDatos(respondeJSON)
  }


  useEffect(() => {
    fetchApi()
  }, [])
  // console.log(datos)


  return (
    <>
    <Container class="overflow-auto">
      
      <Row>
        {
        datos.map((item, index) => (
        
          <Character key={item.name} character={item} />
          
        )
        )}
      <div >
       
      </div></Row>
    </Container>
    
    </>
  )
}

export default ShowCharacter