import "./App.css";
import Footer from "./components/Footer";
import About from "./components/about";
import User from "./components/User";
import Contact from "./components/contact";
// import Header from './components/header'
// import { Header1,Header2 } from './components/header';
import Header from "./components/header";
import Home from "./components/home";
import { BrowserRouter, Route,Routes } from "react-router-dom";

// function Component({classname,name,income=10000}) {
//   return (
//     <>
//     <div className={classname}>
//       {name} : ${income}
//     </div>
//     < hr/>
//     </>
//   );
// }

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/User/:id" element={<User />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    
  );
}

export default App;
