import { useState } from "react";

const signos = [
  {
    nome: "Áries",
    inicio: "03-21",
    fim: "04-19",
    descricao: "Homem de Áries é intenso, direto e apaixonado, costuma tomar a iniciativa no amor. Já a mulher ariana é independente, decidida e valoriza parceiros com energia e atitude."
  },
  {
    nome: "Touro",
    inicio: "04-20",
    fim: "05-20",
    descricao: "Homem taurino é romântico, leal e gosta de estabilidade nos relacionamentos. A mulher de Touro busca segurança emocional e valoriza gestos de carinho e fidelidade."
  },
  {
    nome: "Gêmeos",
    inicio: "05-21",
    fim: "06-20",
    descricao: "Homem geminiano é comunicativo, curioso e gosta de relações leves e divertidas. A mulher de Gêmeos é versátil, inteligente e aprecia conversas profundas e humor."
  },
  {
    nome: "Câncer",
    inicio: "06-21",
    fim: "07-22",
    descricao: "Homem canceriano é sensível, protetor e romântico, valoriza o lar e a família. Mulher de Câncer é carinhosa, emocional e se entrega com profundidade quando ama."
  },
  {
    nome: "Leão",
    inicio: "07-23",
    fim: "08-22",
    descricao: "Homem leonino é charmoso, generoso e gosta de ser admirado. A mulher de Leão é intensa, confiante e espera um amor que a valorize como uma rainha."
  },
  {
    nome: "Virgem",
    inicio: "08-23",
    fim: "09-22",
    descricao: "Homem virginiano é cuidadoso, leal e demonstra amor através de gestos práticos. A mulher de Virgem é reservada, criteriosa e busca um relacionamento equilibrado e sincero."
  },
  {
    nome: "Libra",
    inicio: "09-23",
    fim: "10-22",
    descricao: "Homem de Libra é sedutor, elegante e busca harmonia no amor. Mulher libriana é gentil, vaidosa e valoriza relações justas, com troca emocional verdadeira."
  },
  {
    nome: "Escorpião",
    inicio: "10-23",
    fim: "11-21",
    descricao: "Homem escorpiano é intenso, misterioso e profundamente emocional. A mulher de Escorpião é sedutora, leal e exige entrega total nos relacionamentos."
  },
  {
    nome: "Sagitário",
    inicio: "11-22",
    fim: "12-21",
    descricao: "Homem sagitariano é aventureiro, sincero e valoriza a liberdade. Mulher de Sagitário é otimista, espontânea e busca conexões leves, mas com significado."
  },
  {
    nome: "Capricórnio",
    inicio: "12-22",
    fim: "01-19",
    descricao: "Homem capricorniano é sério, confiável e demonstra amor com atitudes. A mulher de Capricórnio é determinada, prática e valoriza estabilidade e compromisso."
  },
  {
    nome: "Aquário",
    inicio: "01-20",
    fim: "02-18",
    descricao: "Homem aquariano é criativo, livre e busca parceiros com mente aberta. Mulher de Aquário é original, independente e precisa de liberdade emocional no amor."
  },
  {
    nome: "Peixes",
    inicio: "02-19",
    fim: "03-20",
    descricao: "Homem pisciano é romântico, sonhador e muito empático. Mulher de Peixes é doce, sensível e vive o amor com intensidade e entrega emocional."
  }
];

export default function App() {
  const [dataNascimento, setDataNascimento] = useState("");
  const [signo, setSigno] = useState("");
  const [descricao, setDescricao] = useState("");

  const consultarSigno = () => {
    if (!dataNascimento) return;

    const [ano, mes, dia] = dataNascimento.split("-");
    const dataFormatada = `${mes}-${dia}`;

    const encontrado = signos.find((s) => {
      if (s.inicio > s.fim) {
        return dataFormatada >= s.inicio || dataFormatada <= s.fim;
      }
      return dataFormatada >= s.inicio && dataFormatada <= s.fim;
    });

    setSigno(encontrado?.nome || "Signo não encontrado");
    setDescricao(encontrado?.descricao || "");
  };

  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center", backgroundColor: "rgb(247, 247, 247)" }}>
      {/* Navbar */}
      <nav
        style={{
          backgroundImage: "linear-gradient(14deg, rgb(106, 13, 173), rgb(138, 43, 226))",
          padding: "1rem",
          color: "rgb(51, 51, 51)",
        }}
      >
        <h2 style={{ margin: 0 }}>✨ AstroConsulta</h2>
      </nav>

      {/* Giphy e frase */}
      <div>
        <img
          src="https://images3.alphacoders.com/135/1354173.jpeg"
          alt="astros"
          style={{
            width: "100%",
            height: "40vh",
            borderRadius: "0px",
            objectFit: "cover",
          }}
        />
        <h1
          style={{
            color: "rgb(51, 51, 51)",
            marginTop: "1rem",
            fontStyle: "italic",
            fontSize: "2rem",
          }}
        >
          Descubra seu signo e explore o universo dentro de você ✨
        </h1>
      </div>

      {/* Cards lado a lado */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          flexWrap: "wrap",
          margin: "2rem auto",
          maxWidth: "90%",
        }}
        className="cards-container"
      >
        {/* Card explicativo */}
        <div
          style={{
            flex: "200px",
            backgroundColor: "rgb(255, 255, 255)",
            padding: "0.5rem",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h3 style={{ color: "rgb(108, 99, 255)", fontSize: "1.5rem" }}>✨ Os signos influenciam quem somos</h3>
          <p style={{ fontSize: "1rem", color: "rgb(68, 68, 68)", fontFamily: "Times Squad, serif" }}>
            Desde a antiguidade, os signos do zodíaco têm sido usados para entender traços de personalidade,
            emoções e até caminhos de vida. Ao descobrir seu signo, você pode se conectar mais com sua essência e
            com o universo ao seu redor.
          </p>
        </div>

        {/* Card com imagem */}
        <div
          style={{
            flex: "300px",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <img
            src="https://img.freepik.com/vetores-gratis/roda-do-zodiaco-em-um-fundo-de-espaco_23-2148201936.jpg?semt=ais_hybrid&w=740"
            alt="Roda do Zodíaco"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Formulário */}
      <div style={{ marginBottom: "3rem", color: "rgb(68, 68, 68)" }}>
        <h3>Digite sua data de nascimento:</h3>
        <input
          type="date"
          value={dataNascimento}
          onChange={(e) => setDataNascimento(e.target.value)}
          style={{
            padding: "0.5rem",
            borderRadius: "5px",
            border: "1px solid rgb(204, 204, 204)",
            fontSize: "1rem",
            width: "90%",
            maxWidth: "300px",
          }}
        />
        <br />
        <button
          onClick={consultarSigno}
          style={{
            marginTop: "1rem",
            padding: "0.6rem 1.2rem",
            fontSize: "1rem",
            borderRadius: "6px",
            border: "none",
            backgroundImage: "linear-gradient(14deg, rgb(106, 13, 173), rgb(138, 43, 226))",
            color: "rgb(255, 255, 255)",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          Consultar Signo
        </button>
        {signo && (
          <div style={{ marginTop: "1.5rem" }}>
            <h2 style={{ color: "rgb(68, 68, 68)" }}>Seu signo é: {signo}</h2>
            <p style={{ maxWidth: "500px", margin: "0 auto", color: "rgb(68, 68, 68)" }}>{descricao}</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer
        style={{
          backgroundImage: "linear-gradient(135deg, #6A0DAD, #8A2BE2)",
          padding: "2rem 1rem",
          color: "#fff",
          textAlign: "center",
          borderTop: "5px solid #fff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <p style={{ margin: 0, fontSize: "1rem", fontFamily: "'Roboto', sans-serif" }}>
          © 2025 Tamires Porto - Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}