
import { useParams } from "next/navigation";

export default function Cadastros() {
  const params = useParams();

  return (
    <div className="">
      <main className="">
        <div>
          <h1>CADASTRAR PAGE</h1>
          <p>Detalhes do cliente {params?.id}</p>
        </div>
      </main>
    </div>
  );
}