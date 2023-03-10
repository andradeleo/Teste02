
import Form from "../../components/Form";
import FormGroup from "../../components/FormGroup";
import ButtonGroup from "../../components/ButtonGroup";
import BackHome from "../../components/BackHome";
import Input from "../../components/Input/styles";

import useErrors from "../../hooks/useErrors";

import { Container } from "./styles";

import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { DataContext } from "../../components/App";
import { api } from "../../services/axios";
import { toast } from "react-toastify";

export default function EquipmentVisualize() {
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [serieNumber, setSerieNumber] = useState("")
  const [date, setDate] = useState("")
  const [manufacturer, setManufacturer] = useState("")

  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const {dataEquipments} = useContext(DataContext)

  useEffect(() => {
    const editEquipment = dataEquipments.find((equipment) => {
      return equipment._id == id
    })

    setName(editEquipment.name)
    setPrice(editEquipment.price)
    setSerieNumber(editEquipment.serieNumber)
    setDate(editEquipment.date)
    setManufacturer(editEquipment.manufacturer)
  }, [])

  const { setError, removeError, getErrorMessageByFieldName, errors } = useErrors();

  const isFormValid = name && price && serieNumber && date && manufacturer && errors.length == 0;

  function handleChangeName(e) {
    setName(e.target.value)   
    
    if (!e.target.value) {
      setError({ field: "name", message: "Nome é obrigatório." });
    }else if (e.target.value.length < 6) {
      setError({ field: "name", message: "Nome deve ter no minímo 6 caracteres" });
    } else {
      removeError("name");
    }
  }

  function handleChangePrice(e) {
    setPrice(e.target.value)

    if(!e.target.value) {
      setError({field: "price", message: "Preço é obrigatório"})
    }else {
      removeError("price");
    }
  }

  function handleChangeSerieNumber(e) {
    setSerieNumber(e.target.value)

    if(!e.target.value) {
      setError({field: "serie-number", message: "Número de série é obrigatório"})
    } else {
      removeError("serie-number");
    }
  }

  function handleChangeDate(e) {
    setDate(e.target.value)

    if(!e.target.value) {
      setError({field: "date", message: "Data de fabricação é obrigatório"})
    } else {
      removeError("date");
    }
  }

  function handleChangeManufacturer(e) {
    setManufacturer(e.target.value)

    if(!e.target.value) {
      setError({field: "manufacturer", message: "Fabricante é obrigatório"})
    } else {
      removeError("manufacturer");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true)

    const editedEquipment = {
      name,
      price,
      serieNumber,
      date,
      manufacturer
    }
    
    try {
      await api.put(`/equipments/${id}`, editedEquipment);
      toast.success("Equipamento Atualizado");
    }catch(err) { console.log(err)}
    finally{setLoading(false)}
  }

  return (
    <Container>
      <BackHome path={"/"}/>

      <Form onSubmit={handleSubmit}>
        <FormGroup error={getErrorMessageByFieldName("name")}>
          <Input 
            value={name}
            onChange={(e) => handleChangeName(e)}
            placeholder="Nome"
            error={getErrorMessageByFieldName("name")}
          />
        </FormGroup>
        <FormGroup error={getErrorMessageByFieldName("price")}>
          <Input 
            value={price}
            onChange={(e) => handleChangePrice(e)}
            placeholder="Preço"
            error={getErrorMessageByFieldName("price")}
          />
        </FormGroup>
        <FormGroup error={getErrorMessageByFieldName("serie-number")}>
          <Input 
            value={serieNumber}
            onChange={(e) => handleChangeSerieNumber(e)}  
            placeholder="Número de série"
            error={getErrorMessageByFieldName("serie-number")}
          />
        </FormGroup>
        <FormGroup error={getErrorMessageByFieldName("date")}>
          <Input 
            value={date}
            onChange={(e) => handleChangeDate(e)}
            placeholder="Data de fabricação"
            error={getErrorMessageByFieldName("date")}
            type="date"
          />
        </FormGroup>
        <FormGroup error={getErrorMessageByFieldName("manufacturer")}>
          <Input 
            value={manufacturer}
            onChange={(e) => handleChangeManufacturer(e)}
            placeholder="Fabricante"
            error={getErrorMessageByFieldName("manufacturer")}
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
