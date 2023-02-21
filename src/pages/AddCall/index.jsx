
import BackHome from "../../components/BackHome";
import Form from "../../components/Form";
import FormGroup from "../../components/FormGroup";
import Input from "../../components/Input/styles";
import ButtonGroup from "../../components/ButtonGroup";

import useErrors from "../../hooks/useErrors";

import { Container, TextArea } from "./styles";
import { useState } from "react";
import {toast} from "react-toastify"

import { api } from "../../services/axios";

export default function AddCall() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [equipment, setEquipment] = useState("");
  const [date, setDate] = useState("");

  const { setError, removeError, getErrorMessageByFieldName, errors } = useErrors();

  const [loading, setLoading ] = useState(false);

  const isFormValid = title && description && date && errors.length == 0;

  function handleChangeTitle(e) {
    setTitle(e.target.value)

    if(!e.target.value) {
      setError({field: "title", message:"Título é obrigatório"})
    } else {
      removeError("title")
    }
  }
  function handleChangeEquipment(e) {
    setEquipment(e.target.value)

    if(!e.target.value) {
      setError({field: "equipment", message:"Equipamento é obrigatório"})
    } else {
      removeError("equipment")
    }
  }
  function handleChangeDescription(e) {
    setDescription(e.target.value)

    if(!e.target.value) {
      setError({field: "description", message:"Descrição é obrigatório"})
    } else {
      removeError("description")
    }
  }
  function handleChangeDate(e) {
    setDate(e.target.value)

    if(!e.target.value) {
      setError({field: "date", message:"Data é obrigatório"})
    } else {
      removeError("date")
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true);

    const newCall = {
      title,
      description,
      equipment,
      date
    }

    try {
      await api.post("/calls", newCall )
      toast.success("Novo chamado registrado!")
    }catch(err) {console.log(err)}
    finally{setLoading(false)}
  }

  return (
    <Container>
      <BackHome path={"/calls"}/>
      
      <Form onSubmit={handleSubmit}>
        <FormGroup error={getErrorMessageByFieldName("title")}>
          <Input 
            value={title}
            onChange={(e) => handleChangeTitle(e)}
            placeholder="Título"
            error={getErrorMessageByFieldName("title")}
          />
        </FormGroup>
        <FormGroup error={getErrorMessageByFieldName("description")}>
          <TextArea 
            value={description}
            onChange={(e) => handleChangeDescription(e)}
            error={getErrorMessageByFieldName("description")}
          />
        </FormGroup>
        <FormGroup error={getErrorMessageByFieldName("equipment")}>
          <Input 
            value={equipment}
            onChange={(e) => handleChangeEquipment(e)}
            placeholder="Equipamento (número de série)"
            error={getErrorMessageByFieldName("equipment")}
          />
        </FormGroup>
      <FormGroup error={getErrorMessageByFieldName("date")}>
          <Input 
            placeholder="Data de abertura"
            value={date}
            onChange={(e) => handleChangeDate(e)}
            type={"date"}
            error={getErrorMessageByFieldName("date")}
          />
        </FormGroup>

        <ButtonGroup
          isFormValid={Boolean(isFormValid)}
          isLoading={loading}
          buttonLabel="Registrar"
        />
      </Form>

    </Container>
  )
}
