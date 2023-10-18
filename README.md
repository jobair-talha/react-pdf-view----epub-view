#EPUB VIEW
import { useState } from "react";
import { ReactReader } from "react-reader";
const [location, setLocation] = useState(0);
const epubUrl = "FILE_LOCATION.epub";

    <ReactReader
          url={epubUrl}
          location={location}
          locationChanged={(epubcifi) => setLocation(epubcifi)}
        />
      </div>
    </div>
