import "./LinksCSS.css"

function Links() {
    return (
        <div className="container-total">
            <h1>Quer aprender mais sobre React?</h1>
            <p> Acesse os links abaixo: </p>
            <div className="container-links">      
                    <li> <a target="_blank" href="https://react.dev/"> React DEV </a> </li>
                    <li> <a target="_blank" href="https://www.w3schools.com/REACT/DEFAULT.ASP"> W3Schools - Tutorial React </a> </li>
                    <li> <a target="_blank" href="https://kinsta.com/pt/blog/melhores-praticas-react/"> Kinsta - Melhores Práticas React </a> </li>
                    <li> <a target="_blank" href="https://www.dio.me/articles/react-para-iniciantes-conceitos-dicas-e-exemplos-praticos"> DIO - React para Iniciantes </a> </li>
            </div>
        </div>
    );
}

export default Links;


