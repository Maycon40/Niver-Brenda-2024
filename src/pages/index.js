import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Brendinha</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>      
      <style jsx>{`
        .background {
          margin: 0;
          padding: 0;
          height: 100vh;
          width: 100vw;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-image: url('/brendinha.jpg');
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
        }

        .overlay {
          position: absolute; /* Posiciona em relação ao elemento pai (.background) */
          display: flex;
          flex-direction: column; /* Mantém os elementos em coluna */
          justify-content: center; /* Centraliza o texto verticalmente */
          align-items: center; /* Centraliza o texto horizontalmente */
          width: calc(100vw - (100vw - 100%)); /* Largura total da área visível da imagem */
          height: 100%; /* Altura total da área visível da imagem */
          text-align: center; /* Centraliza o texto dentro da área */
        }

        h1 {
          margin: 100px;
          color: #ffffff;
          font-family: Arial, sans-serif;
          font-size: 2rem;
          text-align: justify;
        }

        p {
          color: #ffffff;
          font-family: Arial, sans-serif;
          font-size: 1.5rem;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 1.5rem; /* Tamanho ainda menor em telas médias */
          }

          p {
            font-size: 1rem; /* Tamanho ajustado do parágrafo */
          }
        }

        @media (max-width: 450px) {
          h1 {
            font-size: 1.2rem; /* Tamanho ainda menor em telas médias */
          }

          p {
            font-size: 0.8rem; /* Tamanho ajustado do parágrafo */
          }
        }
      `}</style>
      <main className="background">
        <div className="overlay">
          <h1>Brendinha, muito obrigado por ser essa pessoa incrível, por sempre estar ao meu lado mim defendendo. Parabéns por mais um ano de vida, por mais um ano mim aturando, e que você continue sendo essa pessoa tão especial!</h1>
          <p>Atenciosamente Maycon</p>
        </div>
      </main>
    </>
  );
}
