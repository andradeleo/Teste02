
import Spinner from "../Spinner";

import { ButtonContainer} from "./styles";

export default function ButtonGroup({ isFormValid, isLoading, buttonLabel }) {
  return (
    <ButtonContainer isLoading={isLoading}>
      <button
        type="submit"
        disabled={!isFormValid || isLoading}
      >
        {buttonLabel }
      </button>

      {isLoading && (
        <div className="loader">
          <Spinner size={16}/>
        </div>
      ) }
    </ButtonContainer>
  );
}