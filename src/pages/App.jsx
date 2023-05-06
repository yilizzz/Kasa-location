import Home from "./Home"
import About from "./About"
import DetailsPage from "./DetailsPage";
import NotFound from "./NotFound"
import { Routes, Route} from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/details/:id" element={<DetailsPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
export default App;
