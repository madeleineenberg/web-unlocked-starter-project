import React from "react";
import "./style.scss";
import SectionHeader from "../SectionHeader";

export default function Footer() {
  return (
    <section className="footer" data-scroll-section>
      <SectionHeader title="Say Hi" />
      <h1 className="email">info@ madeleine enberg.com</h1>
    </section>
  );
}
