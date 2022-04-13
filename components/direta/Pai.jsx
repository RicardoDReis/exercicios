import Filho from "./FIlho";

export default function Pai() {
  return (
    <div>
      <Filho nome="Pedro" familia="Albuquerque" />
      <Filho nome="Ana" familia="Albuquerque" />
      <Filho nome="Carlos" familia="Albuquerque" />
    </div>
  );
}
