function retornaLista(qtde) {
  var resultado = [];
  for (var i = 1; i <= qtde; i++) {
    resultado.push(<span>{i},</span>);
  }
  return resultado;
}

export default function geraLista() {
  return <div>{retornaLista(10)}</div>;
}
