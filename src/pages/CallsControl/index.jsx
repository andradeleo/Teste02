import Header from "../../components/Header";


export default function CallControl() {
  return (
    <div>
      <Header
        adicionar={"/add-call"}
        editar={"/edit-call"}
        excluir={"/remove-call"}
      />
    </div>
  )
}
