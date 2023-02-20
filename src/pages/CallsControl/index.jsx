import Header from "../../components/Header";


export default function CallControl() {
  return (
    <div>
      <Header
        visualizar={"/call-visualizar={}"}
        adicionar={"/call-adicionar"}
        editar={"/call-editar"}
        excluir={"/call-excluir"}
      />
    </div>
  )
}
