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
          types: response.data.types.map(t => {
            return {nome: t.type.name}
          }),
          habilidades: response.data.abilities.map(h => {
            return { nome: h.ability.name }
          }
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
    <div className='container'>
      <h1>Pokedex</h1>

      <input
        type="text"
        placeholder='Nome do pokemon...'
        onChange={e => setNomePokemon(e.target.value)}
      />

      <button onClick={pesquisarPokemon}>Pesquisar</button>

      {
        <Card
          nome={pokemon.nome}
          types={pokemon.types}
          habilidades={pokemon.habilidades}
          sprite={pokemon.sprite}
        />
      }

    </div>
  )
}

export default Home
