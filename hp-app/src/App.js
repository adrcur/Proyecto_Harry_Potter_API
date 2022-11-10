import logo from './logo.svg';
// import './App.css';
import NavBar from './components/NavBar';
import React from 'react';
import SearchFilters from './components/SearchFilters';
import Dashboard from './components/Dashboard';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function App() {
  return (
    <React.Fragment>
      <div>
        <span> Componente App</span>
      </div>
      <NavBar></NavBar>
      <SearchFilters></SearchFilters>
      <Dashboard></Dashboard>
    </React.Fragment>
  );
}


export default App;
