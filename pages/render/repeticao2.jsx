import listaProdutos from "../../data/listaProdutos";

export default function repeticao2() {
  function renderizarLinhas() {
    return listaProdutos.map((produto) => {
      return (
        <tr key={produto.id}>
          <td>{produto.id}</td>
          <td>{produto.nome}</td>
          <td>{produto.preco}</td>
        </tr>
      );
    });
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Código</td>
            <td>Nome</td>
            <td>Preço</td>
          </tr>
        </thead>
        <tbody>{renderizarLinhas()}</tbody>
      </table>
    </div>
  );
}
