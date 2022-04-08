import React from "react";
import { questions } from "./data";
import ImageContainer from "./components/images-container/image-container";
import AccordianMenu from "./components/accordion/accordionMenu";
import Footer from "./components/footer/footer";
import BoxDesktop from "./assets/images/illustration-box-desktop.svg";

function App() {
  return (
    <React.Fragment>
      <main>
        <img
          className="img__box-desktop"
          src={BoxDesktop}
          alt="orange box with @ symbol on top"
        />
        <div className="main__grid--wrapper">
          <ImageContainer />
          <section className="accordian">
            <h1 className="title__primary">FAQ</h1>
            {questions.map(({ id, title, content }) => (
              <AccordianMenu key={id} title={title} content={content} />
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
