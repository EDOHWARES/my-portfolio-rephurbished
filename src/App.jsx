import NavBar from "./components/navbar/NavBar";
import Hero from "./components/hero/Hero";
import Skills from "./components/skills/Skills";


function App() {
  return (
    <section className="">
        <NavBar />
      <section className="max-w-[1300px] mx-auto flex flex-col items-center justify-center w-full relative py-[0.5rem] px-4 mt-28">
        <Hero />
        <Skills />
      </section>
    </section>
  )
}

export default App
