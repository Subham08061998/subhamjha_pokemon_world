import logo from './assets/images/searchicon.png';
import pokemonImg from './assets/images/pokemon.jpg'
import card from './assets/images/card.png'
import logo2 from './assets/images/logo.png'
import './App.css';
import { useState } from 'react';
import Axios from 'axios';

function App() {
  const [pokemonName, setpokemonName] = useState("");
  const [pokemonChosen,setpokemonChosen] = useState(false)
  const [pokemon, setpokemon] = useState({
    name:"",
    species:"",
    img:"",
    hp:"",
    attack:"",
    defense:"",
    type:""
  });
  console.log(pokemon,"pokemon========")
  const searchPokemon = ()=>{
    Axios.get('https://pokeapi.co/api/v2/pokemon/'+pokemonName)
    .then((response)=>{
      setpokemon({
        name:pokemonName,
        species:response.data.species.name,
        img:response.data.sprites.front_default,
        hp:response.data.stats[0].base_stat,
        attack:response.data.stats[1].base_stat,
        defense:response.data.stats[2].base_stat,
        type:response.data.types[0].type.name,

      })
      setpokemonChosen(true);
    })
  }
  return (
    <>
    <div className="div1">
      <div className="header1">
        <h1 className='searchText'>SEARCH BOX</h1>
        <input className='searchBox' type="text"
        onChange={(event)=>{
          setpokemonName(event.target.value)
        }}></input>
        
        <button onClick={searchPokemon} className='button'></button>
        </div>
      <div className="header2">
      <img src={logo2}  className="img4"/>
      </div>
    </div>
    
    <div className="div4">  </div> 
    <div className="div2">
      <div className='div5'>
        <h2>{pokemon.name}</h2>
      <img src={pokemon.img} className="img2"></img>
      </div>
    
   
    </div>
    <div className="div3">
      {
        !pokemonChosen?(<div className='div7'><h1 className='subh3'> Please choose a pokemon</h1></div>):
        (
          <div className='div6'>
            <h3 className='subh1'>Name:{pokemon.name}</h3>
            <h3 className='subh2'>Species:{pokemon.species}</h3>
            <h3 className='subh1'>Hp:{pokemon.hp}</h3>
            <h3 className='subh2'>Attack:{pokemon.attack}</h3>
            <h3 className='subh1'>Defense:{pokemon.defense}</h3>
            <h3 className='subh2'>Type:{pokemon.type}</h3>
            <div className='div8'>
            <img src={pokemon.img} className="img3"></img>
            </div>
          </div>
        
        )
      }
    
    </div>
    </>
  );
}

export default App;
