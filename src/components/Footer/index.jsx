import React, {useEffect, useState, useRef} from "react";
import "./style.scss";
import SectionHeader from "../SectionHeader";
import gsap from 'gsap';
import SplitText from "../../utils/Split3.min";
import cn from 'classnames';
import useOnScreen from "../../hooks/useOnScreen";

export default function Footer() {
  const ref = useRef(null);
  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if(onScreen) setReveal(onScreen);
  }, [onScreen])

  useEffect(() => {
    if(reveal) {
      const split = new SplitText("#email", {
        type: "lines",
        linesClass: "lineChildren",
      });
  
      const splitParent = new SplitText("#email", {
        type: "lines",
        linesClass: "lineParent",
      });
  
      gsap.to(split.lines, {y: 200}, {
        duration: 1,
        y: 0,
        // opacity: 1,
        stagger: 0.1,
        ease: "power2",
      });
    }
  }, [reveal])

  return (
    <section className="footer" data-scroll-section>
      <SectionHeader title="Say Hi" />
      <h1 className={cn("email", {'is-reveal': reveal})} id="email" ref={ref} >info@ madeleine enberg.com</h1>
    </section>
  );
}

// import React, { useEffect, useRef, useState } from "react";
// import useOnScreen from "../../hooks/useOnScreen";
// import SectionHeader from "../SectionHeader";
// import gsap from "gsap";
// import SplitText from "../../utils/Split3.min";
// import cn from "classnames";

// import "./style.scss";

// export default function Footer() {
//   const ref = useRef(null);

//   const [reveal, setReveal] = useState(false);
//   const onScreen = useOnScreen(ref);

//   useEffect(() => {
//     if (onScreen) setReveal(onScreen);
//   }, [onScreen]);

//   useEffect(() => {
//     if (reveal) {
//       const split = new SplitText("#email", {
//         type: "lines",
//         linesClass: "lineChildren",
//       });
//       const splitParent = new SplitText("#email", {
//         type: "lines",
//         linesClass: "lineParent",
//       });
//       gsap.fromTo(
//         split.lines,
//         { y: 200 },
//         {
//           duration: 1,
//           y: 0,
//           // opacity: 1,
//           stagger: 0.1,
//           ease: "power2",
//         }
//       );
//     }
//   }, [reveal]);

//   return (
//     <section className="footer" data-scroll-section>
//       <SectionHeader title="Say Hi" />

//       <h1
//         className={cn("email", { "is-reveal": reveal })}
//         id="email"
//         ref={ref}
//       >
//         info @madeleine enberg.com
//       </h1>
//     </section>
//   );
// }
