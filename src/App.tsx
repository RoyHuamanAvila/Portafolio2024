import Header from "./components/Header"
import About from "./sections/About"
import Projects from "./sections/Projects"

function App() {
  return (
    <div>
      <Header />
      <div className="sections-container space-y-4">
        <About />
        <Projects />
      </div>
    </div>
  )
}

export default App
