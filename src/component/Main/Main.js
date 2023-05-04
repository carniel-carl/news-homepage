import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <main>
      <article></article>
      <article>
        <h1 className="heading">The Bright Future of Web 3.0?</h1>
      </article>
      <article>
        <p className="subtext">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>

        <a href="/">Read more</a>
      </article>
      <article>
        <h2 className="subheading">New</h2>

        <div className="features">
          <h3>Hydrogen VS Electric Cars</h3>
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </div>
        <div className="features">
          <h3>The Downsides of AI Artistry</h3>
          <p>
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>
        <div className="features">
          <h3>Is VC Funding Drying Up?</h3>
          <p>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </article>
    </main>
  );
};

export default Main;
