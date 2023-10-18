import { TextDirection, Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "./App.css";
import AudioPlayer from "./AudioPlayer";

function App() {
  const audioUrl = "/01 Demacia Rising.mp3";

  const characterMap = {
    isCompressed: true,

    url: "https://unpkg.com/pdfjs-dist@2.6.347/cmaps/",
  };

  return (
    <div className="container">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <div
          style={{
            border: "1px solid rgba(0, 0, 0, 0.3)",
            height: "750px",
          }}
        >
          <Viewer
            theme={{
              theme: "dark",
              direction: TextDirection.RightToLeft,
            }}
            // initialRotation={90}
            initialPage={2}
            characterMap={characterMap}
            fileUrl="/Essay summer & winter.pdf"
          />
        </div>
      </Worker>
      <AudioPlayer audioUrl={audioUrl} />
    </div>
  );
}

export default App;
