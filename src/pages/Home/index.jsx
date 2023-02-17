import { useState, useEffect } from 'react'
import axios from 'axios'
import './styles.css'

import { Card } from '../../components/Card'

function Home() {

  const [nomePokemon, setNomePokemon] = useState('')
  const [pokemon, setPokemon] = useState({ nome: '', habilidades: [] })


  async function pesquisarPokemon() {

    await axios.get('https://pokeapi.co/api/v2/pokemon/' + nomePokemon.toLowerCase())
      .then(response => {
        const pokenomTemp = {
          nome: response.data.name,
          type: response.data.types[0].type.name,
          habilidades: response.data.abilities.map(
            h => { return {nome: h.ability.name} }
          ),
          sprite: response.data.sprites.front_default
        }
        console.log(response.data)
        console.log(pokenomTemp)

        setPokemon(pokenomTemp)
      })
      .catch((err) => {
        const resp = { nome: '-1', habilidades: [] }
        setPokemon(resp)
      })
  }

  return (
    <div>
      <h1>Pokedex</h1>

      <input
        type="text"
        placeholder='Digite o nome do pokemon...'
        onChange={e => setNomePokemon(e.target.value)}
      />

      <button onClick={pesquisarPokemon}>Pesquisar</button>

      {
        <Card
          nome={pokemon.nome}
          type={pokemon.type}
          habilidades={pokemon.habilidades}
          sprite={pokemon.sprite}
        />
      }

    </div>
  )
}

export default Home
