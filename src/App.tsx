import Navbar from "./scenes/navbar/index";
import { useState } from "react";


function App() {  
  const [selectedPage, setselectedPage] = useState("home");
  return (<div className="app bg-gray-20">
    <Navbar
    selectedPage={selectedPage}
    setSelectedPage={setselectedPage}
    />
    </div>
    );
}

export default App
