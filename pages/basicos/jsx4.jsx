export default function jsx4() {
  const subtitulo = "Estou no javascript";

  return (
    <div>
      <h1>Integração JSX</h1>
      <h2>{subtitulo}</h2>
      <h3>{entre(8, 1, 10)}</h3>
    </div>
  );
}

function entre(valor, min, max) {
  if (valor >= min && valor <= max) {
    return "Sim";
  } else {
    return "Não";
  }
}
