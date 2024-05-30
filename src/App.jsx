import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div>
        <NavBar />
      </div>
      <section className="max-w-[1300px] mx-auto relative py-[0.5rem] px-4 mt-10">
        <Hero />
      </section>
    </>
  )
}

export default App
