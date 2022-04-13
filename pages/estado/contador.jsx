import { useState } from "react";

export default function contador() {
  const [valor, setValor] = useState(0);

  const adicionar = () => setValor(valor + 1);

  const subtrair = () => setValor(valor - 1);

  return (
    <div>
      <h1>Contador</h1>
      <div>Valor: {valor}</div>
      <button onClick={adicionar}>+</button>
      <button onClick={subtrair}>-</button>
    </div>
  );
}
