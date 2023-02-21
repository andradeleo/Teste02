
import { FormContainer } from "./styles";

export default function Form({ onSubmit, children}) {
  return (
    <FormContainer onSubmit={onSubmit}>
      { children }
    </FormContainer>
  );
}