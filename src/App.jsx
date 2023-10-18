import "@react-pdf-viewer/core/lib/styles/index.css";
import { useState } from "react";
import { ReactReader } from "react-reader";
import "./App.css";

function App() {
  const [location, setLocation] = useState(0);
  const epubUrl = "/Around the World in 28 Languages.epub";

  return (
    <div className="container">
      <div style={{ height: "100vh" }}>
        <ReactReader
          url={epubUrl}
          location={location}
          locationChanged={(epubcifi) => setLocation(epubcifi)}
        />
      </div>
    </div>
  );
}

export default App;
