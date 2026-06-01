import Navbar from "./components/Navbar";

import Home from "./pages/Home"
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Home />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;