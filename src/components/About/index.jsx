import React, {useRef, useEffect, useState} from "react";
import "./style.scss";
import SectionHeader from "../SectionHeader/index";
import gsap from "gsap";
import SplitText from "../../utils/Split3.min.js";
import useOnScreen from "../../hooks/useOnScreen";
import cn from 'classnames';

export default function About() {
  const ref = useRef(null);
  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if(onScreen) setReveal(onScreen);
  }, [onScreen])

  useEffect(() => {
    if(reveal) {
      
      const split = new SplitText("#headline", {
        type: "lines",
      });
  
      gsap.to(split.lines, {
        duration: 1,
        y: -20,
        opacity: 1,
        stagger: 0.1,
        ease: "power4.out",
      });

    }
  }, [reveal]); 

  return (
    <section className={cn("about-section", {"is-reveal": reveal})} data-scroll-section>
      <SectionHeader title="about" />
      <p ref={ref} id="headline" className={cn({ "is-reveal": reveal })}>
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
