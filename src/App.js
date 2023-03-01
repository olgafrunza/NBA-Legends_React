import { Container } from "react-bootstrap";
import PlayerCard from "./components/PlayerCard";
import Header from "./components/Header";

function App() {
  return (
    <Container className="text-center mt-4">
      <Header />
      <PlayerCard />
    </Container>
  );
}

export default App;
