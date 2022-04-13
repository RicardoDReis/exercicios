function acao1() {
  console.log("acao1");
}

function acao3(e) {
  console.log(e);
}

export default function botao() {
  return (
    <div>
      <button onClick={acao1}>Click</button>
      <button onClick={() => console.log("acao2")}>Click2</button>
      <button onClick={acao3}>Click3</button>
    </div>
  );
}
