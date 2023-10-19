import Wrapper from "../styles/NotFound";
import notFoundImg from "../assets/not-found.png";

function NotFound() {
  return (
    <Wrapper>
      <img src={notFoundImg} alt="Error - image not found" />
      <br />
      <p>This page is not available. Sorry.</p>
      <p>Try again!</p>
    </Wrapper>
  );
}

export default NotFound;
