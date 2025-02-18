import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import { motion } from "framer-motion";
function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
    };
    const timeout = setTimeout(() => {
      if (document.readyState === "complete") {
        setLoading(false);
      } else {
        window.addEventListener("load", handleLoad);
      }
      return () => {
        window.removeEventListener("load", handleLoad);
      };
    }, 1500);
  }, []);
  return (
    <>
      {loading ? (
        <div className="loader">
          <Loader />
          <h1>Loading...</h1>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.3 }}
        >
          <Navbar />
          <Home />
          <About />
          <Projects />
          <Contact />
        </motion.div>
      )}
    </>
  );
}

export default App;
