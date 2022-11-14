// import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import React from 'react';
// import SearchFilters from './components/SearchFilters';
// import Dashboard from './components/Dashboard';
import CreatePages from './pages/CreatePages';
// import SearchPages from './pages/SearchPages';
import FooterPages from './components/Footer';
// import AboutPages from './pages/AboutPages';

// import ShowCharacter from './components/character/ShowCharacter';



function App() {

  // const url = 'https://hp-api.herokuapp.com/api/characters'
  // const url = 'https://hp-api.onrender.com/api/characters'

  // const [datos, setDatos] = useState()

  // const fetchApi = async () => {
  //   const responde = await fetch(url)
  //   console.log(responde.status)
  //   const respondeJSON = await responde.json()
  //   setDatos(respondeJSON)
  // }


  // useEffect(() => {
  //   fetchApi()
  // }, [])



  return (
    <React.Fragment>
      {/* <div>
        <span> Componente App</span>
      </div> */}

      <div class="d-flex h-100 text-center text-white bg-dark">

        <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <NavBar />


        {/* <SearchFilters></SearchFilters> */}

        {/* <Dashboard></Dashboard> */}

        {/* <SearchPages/> */}
        {/* <CreatePages/> */}
        {/* <AboutPages/> */}



        <div class="d-flex h-100 text-center text-white bg-dark" >


          {/* 
      <ShowCharacter/> */}
          {/* 
        <SearchPages /> */}


          <scroll-container>
            <CreatePages />
          </scroll-container>


        </div>
      </div>
      
      </div>
      <FooterPages></FooterPages>
    </React.Fragment>
  );
}


export default App;
