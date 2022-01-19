import "./App.css";
import Footer from "./Footer/Footer";
import SemiFooter from "./Footer/SemiFooter";
import Header from "./Header/Header";
import Feed from "./SectionOne/Feed";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Feed />
      </div>
      <SemiFooter />
      <Footer />
    </>
  );
}

export default App;
