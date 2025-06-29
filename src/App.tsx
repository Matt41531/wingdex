import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";
function App() {
  const navigate = useNavigate();

  function navigateToCards() {
    navigate("/cards");
  }
  return (
    <main className="flex flex-col items-center justify-center h-screen w-full">
      <h1 className="text-3xl font-bold hover:text-chart-4">Wingspan Cards</h1>
      <Button
        className="bg-chart-4 text-foreground hover:bg-chart-4/50 hover:animate-bounce m-4"
        onClick={navigateToCards}
      >
        Go To Cards
      </Button>
    </main>
  );
}

export default App;
