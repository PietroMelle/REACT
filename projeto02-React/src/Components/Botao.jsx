import './BotaoCSS.css'

function Botao(props) {
    return (
        <button className={props.classe}>
            {props.texto}
        </button>
    )
}

export default Botao;