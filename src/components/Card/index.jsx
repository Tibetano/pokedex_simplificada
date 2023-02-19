import './styles.css'

export function Card(props) {
    if (props.nome === '') {
        return (
            <div className='card'>
                <p>Por favor, informe o nome do pokemon.</p>
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
                <p> <strong> Nome: </strong> {props.nome}</p>
                <p> <strong>Tipos: </strong>
                    {
                        props.types.map((tipo, index) => {
                            return (
                                ' ' +
                                tipo.nome +
                                (index < props.types.length - 1 ? ',' : ''))
                        })
                    }
                </p>

                <p> <strong> Habilidades: </strong>
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

