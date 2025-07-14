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
  document.body.style.overflow = loading ? "hidden" : "auto";

  return () => {
    document.body.style.overflow = "auto"; // Cleanup on unmount
  };
}, [loading]);


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
    }, 1500);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>
      {loading && (
        <motion.div
          className="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 3.5, ease: "easeInOut" }}
          style={{
            pointerEvents: "all",
            position: "absolute",
            top: "0",
            left: "0",
            zIndex: 9999,
            overflow: "hidden",
            display: loading ? "flex" : "none",
          }}
        >
          <Loader />
          <h1>Loading...</h1>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 1.3, ease: "easeInOut" }}
        style={{ position: "relative" }}
      >
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Contact />
      </motion.div>
    </div>
  );
}

export default App;
