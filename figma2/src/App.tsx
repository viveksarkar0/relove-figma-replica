import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import AboutMeForm from "./components/AboutMe";
import FigmaExamplesShowcase from "./components/ExampleWindow";
import FigmaProfile from "./components/FigmaProfile";
import PublishWindow from "./components/PublishWindow";
import StickerWindow from "./components/StickerWindow";
import ConfigBadgeBuilder from "./components/WelcomeWindow";
import Card from "./pages/Card";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const isCardPage = location.pathname === "/card";

  return (
    <div className="p-4">
      <button
        onClick={() => navigate(isCardPage ? "/" : "/card")}
        className="rounded-full bg-blue-600 text-white px-6 py-2 mb-4"
      >
        {isCardPage ? "Back to Main UI" : "Switch to Card UI"}
      </button>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <ConfigBadgeBuilder />
              <AboutMeForm />
              <StickerWindow />
              <FigmaProfile />
              <PublishWindow />
              <FigmaExamplesShowcase />
            </>
          }
        />
        <Route path="/card" element={<Card />} />
      </Routes>
    </div>
  );
}

export default App;
