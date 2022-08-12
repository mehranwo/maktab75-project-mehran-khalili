import { useEffect } from "react";
import { BrowserRouter} from "react-router-dom";
import HandleRouter from "./Routes/HandleRouter";


function App() {
  useEffect(() => {
    document.title = "mui project";
  }, []);

  return (
    <BrowserRouter>
      <HandleRouter/>
    </BrowserRouter>
  );
}

export default App;
