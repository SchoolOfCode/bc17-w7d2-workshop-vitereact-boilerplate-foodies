import "./App.css";
import { Header } from "./Components/Header/Header.jsx";
import { Main } from "./Components/Main/main.jsx";
import { Footer } from "./Components/Footer/Footer.jsx";
import { BookConsBox } from "./Components/Main/BookConsBox.jsx";
import { Heroimg } from "./Components/Main/Heroimg.jsx";
import { HowitWorks } from "./Components/Main/HowitWorks.jsx";
import { FooterTitles } from "./Components/Footer/FooterTitles.jsx";
import { FindUs } from "./Components/Footer/FindUs.jsx";
import { Card } from "/.Components/Main/Card.jsx";

function App() {
  return (
    <>
      <body>
        <Header />
        <Main />
        <Card>
          {(cardImages = "./images/how-it-works.png")}
          {(cardHeader = "Give us a call..")}
          cardParagraph = "Call us and book in a design consultation on a date
          and time to suit you."
        </Card>
        <Footer />
      </body>
    </>
  );
}

export default App;
