import React, {useState} from 'react';
import Header from "./Composant/Header/Header";
import Content from "./Composant/Content/Content";
import Card from "./Composant/Card/Card"
import './App.css';
import '../node_modules/bulma/css/bulma.min.css'

function App() {
  
  const [monState, setMonState] = useState([
    {tache : "Tache", text : "Un texte"},
    {tache : "Tache", text : "Un texte"},
    {tache : "Tache", text : "Un texte"}
  ]);


  return (
    <div className="App">
      <Header/>
      <Content/>
      
      {
        (monState.map((todo, text) => {
          console.log(todo.tache);
          <Card/>

        }))
      }
          <Card/>

    </div>
  );
}

export default App;
