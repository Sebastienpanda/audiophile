import { Header } from "./components/Header/Header.jsx";
import { HeroBanner } from "./components/Herobanner.jsx";

function App() {
  return (
    <>
      <Header />
      <main className="lg:px-[80px] 1xl:px-[165px]">
        <HeroBanner />
      </main>
    </>
  );
}

export default App;
