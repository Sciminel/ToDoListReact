import React, {useState} from 'react';
import Header from "./Composant/Header/Header";
import Content from "./Composant/Content/Content";
import Card from "./Composant/Card/Card"
import './App.css';
import '../node_modules/bulma/css/bulma.min.css'

function App() {
  
  const [monState, setMonState] = useState([
    {tache : "Course", text : "Faire les courses et préparer à manger"},
    {tache : "Promener le chien", text : "Sortir à 6h, 13h et 21h"}
  ]);

  const [tache, setTache] = useState();
  const [text, setText] = useState();


  return (
    <div className="App">
      <Header/>
      <Content
      setMonState = {setMonState}
      monState = {monState}
      setTache = {setTache}
      setText = {setText}
      tache = {tache}
      text = {text}
      />
      
      {
        monState.map((todo, index) => (
          
          <Card
          key = {index}
          tache = {todo.tache}
          text = {todo.text}
          
          />

        ))
      }

    </div>
  );
}

export default App;
