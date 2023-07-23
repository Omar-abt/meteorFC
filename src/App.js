import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./components/Home";
import Search from "./components/Search";

function App() {

  const [french, setFrench] = React.useState(false);

  function handleLanguageToggle() {
    setFrench(prevLangState => !prevLangState)
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home french={french} changeLanguage={handleLanguageToggle} />} />
        <Route path="/search" element={<Search french={french} changeLanguage={handleLanguageToggle}/>} />
      </Routes>
    </Router>
  );
}

export default App;


// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

// import Home from "./components/Home";
// import Search from "./components/Search";

// function App() {

//   const [french, setFrench] = React.useState(false);

//   function handleLanguageToggle() {
//     setFrench(prevLangState => !prevLangState)
//   }

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home french={french} changeLanguage={handleLanguageToggle} />} />
//         <Route path="/*" element={<Home french={french} changeLanguage={handleLanguageToggle} />} />
//         <Route path="/search" element={<Search french={french} changeLanguage={handleLanguageToggle}/>} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
