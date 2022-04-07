import React from "react";
import BgMobile from "./assets/images/bg-pattern-mobile.svg";
import WomanMobile from "./assets/images/illustration-woman-online-mobile.svg";
import WomanDesktop from "./assets/images/illustration-woman-online-desktop.svg";
import BgDesktop from "./assets/images/bg-pattern-desktop.svg";
import BoxDesktop from "./assets/images/illustration-box-desktop.svg";

function App() {
  return (
    <React.Fragment>
      <main>
        <img className="img__box-desktop" src={BoxDesktop} alt="" />
        <div className="main__grid--wrapper">
          <div className="img__container">
            <img className="img__logo" src={WomanMobile} alt="" />
            <img className="img__shadow" src={BgMobile} alt="" />
            <img className="img__logo-desktop" src={WomanDesktop} alt="" />
            <img className="img__shadow-desktop" src={BgDesktop} alt="" />
          </div>
          <section className="accordian">
            <h1 className="title__primary">FAQ</h1>
            <details>
              <summary className="title__accordian">
                <strong>How many team members can I invite?</strong>
              </summary>
              <p className="content">
                You can invite up to 2 additional users on the Free plan. There
                is no limit on team members for the Premium plan.
              </p>
            </details>
            <details>
              <summary className="title__accordian">
                <strong>What is the maximum file upload size?</strong>
              </summary>
              <p className="content">
                No more than 2GB. All files in your account must fit your
                allotted storage space.
              </p>
            </details>
            <details>
              <summary className="title__accordian">
                <strong>How do I reset my password?</strong>
              </summary>
              <p className="content">
                Click “Forgot password” from the login page or “Change password”
                from your profile page. A reset link will be emailed to you.
              </p>
            </details>
            <details>
              <summary className="title__accordian">
                <strong>Can I cancel my subscription?</strong>
              </summary>
              <p className="content">
                Yes! Send us a message and we’ll process your request no
                questions asked.
              </p>
            </details>
            <details>
              <summary className="title__accordian">
                <strong>Do you provide additional support?</strong>
              </summary>
              <p className="content">
                Chat and email support is available 24/7. Phone lines are open
                during normal business hours. to you.
              </p>
            </details>
          </section>
        </div>
      </main>

      <footer className="content__attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="#footer">Brian Johnson</a>.
      </footer>
    </React.Fragment>
  );
}

export default App;
