import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { SplitText } from "gsap/dist/SplitText";
import { DrawSVGPlugin } from "gsap/dist/DrawSVGPlugin";

gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin);

export default gsap;
export { ScrollTrigger, SplitText };
