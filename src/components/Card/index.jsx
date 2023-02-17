import './styles.css'

export function Card(props) {
    if (props.nome === '') {
        return (
            <div className='card'>
                <p>Por favor, insira o nome do pokemon.</p>
            </div>

        )
    } else if (props.nome === '-1') {
        return (
            <div className='card'>
                <p>Pokemon não encontrado!</p>
            </div>
        )
    } else {
        return (
            <div className='card'>
                <img src={props.sprite} alt={`Imagem do(a) ${props.name}.`} />
                <p>Nome: {props.nome}</p>

                <p> Tipos:
                    {
                        props.types.map((tipo, index) => {
                            return (
                                ' ' +
                                tipo.nome +
                                (index < props.types.length - 1 ? ',' : ''))
                        })
                    }
                </p>

                <p> Habilidades:
                    {

                        props.habilidades.map((habilidade, index) => {
                            return (
                                ' ' +
                                habilidade.nome +
                                (index < props.habilidades.length - 1 ? ',' : ''))
                        })
                    }
                </p>
            </div>
        )
    }
}

