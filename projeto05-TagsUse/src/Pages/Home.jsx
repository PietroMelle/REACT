// Style 
import './Styles/Home.css';

function Home() {
  return (
    <div>
        <h1>Home</h1>
        <section className="container-todo">
        <section className="borda">
          <a href="http://localhost:5173/exercicios"> Ir para a página de Exercicios </a>
        </section>

        <section className="borda">
          <a href="http://localhost:5173/exemplos"> Ir para a página de Exemplos </a>
        </section>
      </section>
    </div>
  );
}

export default Home;
