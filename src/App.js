import React  from "react";
import './App.css';


 import 
 {Download, 
  Faq, 
  Features, 
  Header, 
  Navbar, 
  Subscribe, 
  Footer, Question} from "./components/export"

function App() {
  return (
    <main>
      <header className="header_bg">
        <Navbar />
        <Header />
      </header>
      <Features />
      <Download />
      <Subscribe />
      <Faq />
      <Footer />
    </main>
  );
}

export default App;
