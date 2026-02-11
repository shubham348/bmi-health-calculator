import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import HomePage from "./pages/HomePage";
import BmiPage from "./pages/BmiPage";
import BodyFatPage from "./pages/BodyFatPage";
import CaloriePage from "./pages/CaloriePage";
import ProteinPage from "./pages/ProteinPage";
import BmrPage from "./pages/BmrPage";
import ScrollToTop from "./components/ScrollToTop";
import LeanBodyMassPage from "./pages/LeanBodyMassPage";
import MacroCalculatorPage from "./pages/MacroCalculatorPage";


function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
        <Route path="/bmi" element={<PageWrapper><BmiPage /></PageWrapper>} />
        <Route path="/body-fat" element={<PageWrapper><BodyFatPage /></PageWrapper>} />
        <Route path="/calorie" element={<PageWrapper><CaloriePage /></PageWrapper>} />
        <Route path="/protein" element={<PageWrapper><ProteinPage /></PageWrapper>} />
        <Route path="/bmr" element={<PageWrapper><BmrPage /></PageWrapper>} />
        <Route path="/lean-body-mass" element={<PageWrapper><LeanBodyMassPage /></PageWrapper>} />
        <Route path="/macro-calculator" element={<PageWrapper><MacroCalculatorPage /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <>
      <AnimatedRoutes />
      <ScrollToTop />
    </>
  );
}
