import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <HomePage />
    </Suspense>
  );
}

export default App;
