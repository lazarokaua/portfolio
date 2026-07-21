import { LanguageProvider } from "./components/Utils/LanguageContext";
import { Portfolio } from "./components/Portfolio";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <LanguageProvider>
      <Portfolio />
      <SpeedInsights />
    </LanguageProvider>
  );
}

export default App;