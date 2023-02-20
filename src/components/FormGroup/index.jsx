
import { Container } from "./styles";

export default function FormGroup({error, children}) {
  return (
    <Container>
      {children}
      {error && <small> {error} </small> }
    </Container>
  );
}

