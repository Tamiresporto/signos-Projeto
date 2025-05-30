import { useState, useEffect } from "react";

export default function App() {
  const [dataNascimento, setDataNascimento] = useState("");
  const [signo, setSigno] = useState("");
  const [descricao, setDescricao] = useState("");
  const [signos, setSignos] = useState([]);

  useEffect(() => {
    fetch("http://localhost/signos-app/signos-Projeto/api/signos.php")
      .then((res) => res.json())
      .then((data) => setSignos(data));
  }, []);

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
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f7f7f7", minHeight: "100vh" }}>
      {/* Navbar */}
      <nav
        style={{
          backgroundImage: "linear-gradient(14deg, #6A0DAD, #8A2BE2)",
          padding: "1.5rem",
          color: "#fff",
          textAlign: "center",
          fontSize: "1.8rem",
          fontWeight: "bold",
          letterSpacing: "1px",
        }}
      >
        ✨ AstroConsulta
      </nav>

      {/* Hero */}
      <section style={{ textAlign: "center", padding: "2rem" }}>
        <img
          src="https://images3.alphacoders.com/135/1354173.jpeg"
          alt="astros"
          style={{
            width: "90%",
            maxWidth: "600px",
            height: "auto",
            borderRadius: "10px",
            objectFit: "cover",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
        />
        <h1 style={{ marginTop: "1.5rem", fontSize: "1.8rem", color: "#333", fontStyle: "italic" }}>
          Descubra seu signo e explore o universo dentro de você ✨
        </h1>
      </section>

      {/* Formulário */}
      <section style={{ textAlign: "center", padding: "2rem" }}>
        <h3 style={{ marginBottom: "1rem", color: "#444" }}>Digite sua data de nascimento:</h3>
        <input
          type="date"
          value={dataNascimento}
          onChange={(e) => setDataNascimento(e.target.value)}
          style={{
            padding: "0.7rem",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "1rem",
            width: "90%",
            maxWidth: "300px",
            marginBottom: "1rem",
          }}
        />
        <br />
        <button
          onClick={consultarSigno}
          style={{
            padding: "0.7rem 1.5rem",
            fontSize: "1rem",
            borderRadius: "8px",
            border: "none",
            backgroundImage: "linear-gradient(14deg, #6A0DAD, #8A2BE2)",
            color: "#fff",
            cursor: "pointer",
            transition: "transform 0.2s ease, box-shadow 0.2s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 6px 12px rgba(0,0,0,0.15)";
          }}
          onMouseOut={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "none";
          }}
        >
          Consultar Signo
        </button>

        {signo && (
          <div style={{ marginTop: "2rem" }}>
            <h2 style={{ color: "#6A0DAD" }}>Seu signo é: {signo}</h2>
            <p style={{ maxWidth: "600px", margin: "1rem auto", color: "#555" }}>{descricao}</p>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundImage: "linear-gradient(135deg, #6A0DAD, #8A2BE2)",
          padding: "2rem 1rem",
          color: "#fff",
          textAlign: "center",
          borderTop: "5px solid #fff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          marginTop: "2rem",
        }}
      >
        <p style={{ margin: 0, fontSize: "1rem" }}>
          © 2025 Tamires Porto - Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}