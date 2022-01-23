import React from "react";
import "./style.scss";
import SectionHeader from "../SectionHeader/index";

export default function About() {
  return (
    <section className={"about-section"} data-scroll-section>
      <SectionHeader title="about" />
      <p id="headline">
        "Her style is beautiful and somewhat dark and moody, but intensely
        dreamlike. If it was music it would certainly translate to Portishead on
        film. Her work consists of lots of blue and purple tones and some
        occasional black and white photography as well. A lot of organics and
        cityscape that play off each other and I personally love her use of
        diptychs. She also uses a lot of expired film and you can see how that
        attributes the look to her style."
      </p>
    </section>
  );
}
