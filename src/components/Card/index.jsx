

export function Card(props) {
    if(props.nome === ''){
        return (<p>Por favor, insira o nome do pokemon.</p>)
    } else if(props.nome === '-1'){
        return (<p>Pokemon não encontrado!</p>)
    } else {
        return (
            <div>
                <img src={props.sprite} alt={`Imagem do(a) ${props.name}.`} />
                <p>Nome: {props.nome}</p>
                <p>Tipo: {props.type}</p>
                {
                    props.habilidades.map((habilidade, index) => {
                        return (
                            <p key={index}>
                                {`Habilidade ${index + 1}: ${habilidade.nome}`}
                            </p>
                        )
                    })
                }
            </div>
        )
    } 
}

