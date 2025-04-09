

import Header from "../Components/Header";
import Navbar from "../Components/Navbar";

import RouteLocalStorage from "../Components/Exercicios/Exercicio1-InputTextLocalStorageAPI";

function Home() {
  return (
    <>
      <Header />

      <Navbar />

      <br />
      <br />

      <center>
      <RouteLocalStorage />
      </center>
    </>
  );
}

export default Home;
