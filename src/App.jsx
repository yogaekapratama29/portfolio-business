import Nav from "./component/Nav";
import "./index.css";
import SectionOne from "./component/SectionOne";
import SectionTwo from "./component/SectionTwo";
import SectionThree from "./component/SectionThree";
import SectionFour from "./component/SectionFour";
import SectionFive from "./component/SectionFive";
import SectionSix from "./component/SectionSix";
import SectionSeven from "./component/SectionSeven";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function App() {

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(()=> {
    gsap.from(".img-container",{
      xPercent: 100,
      duration : 2,
    });

    gsap.utils.toArray(".img-container img").forEach((img, index) => {
      gsap.fromTo(img, {
        scaleY : 1 * index +1,
        translateY : 0
      },{
        scaleY : 1,
        translateY : (index + 1) % 2 == 0? 15 * index + 1 : 0,
        duration : 1.5
      })
    });


    gsap.from(".text-content > * ", {
      opacity : 0,
      y : 300,
      duration : 2,
      scrollTrigger: {
        trigger : ".text-content",
      }
    });

    gsap.from(".swiper-container-wrapper",{
      xPercent: 100,
      ease : "power3.inOut",
      duration : 2,
      scrollTrigger : {
        trigger : ".swiper-container-wrapper"
      }
    });

    gsap.from(".bg-text",{
      y : 100,
      opacity : 0,
      duration : 2,
      scrollTrigger : {
        trigger : ".bg-text"
      }
    });

    gsap.from(".article",{
      opacity : 0,
      y : 100,
      stagger : {
        amount : 2
      },duration  : 2,
      scrollTrigger : {
        trigger : ".article"
      }
    });

    gsap.from(".box",{
      opacity : 0,
    stagger : {amount : 1},
      duration : 2,
      scrollTrigger : {
        trigger : ".box"}
    })
  })


  return (
    <>
      <Nav />
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <SectionSix/>
      <SectionSeven/>
      <footer className="p-20 flex items-center justify-around ">
        <div className="font-bold text-2xl">Senopati.co</div>
        <ul>
          <li>Product</li>
          <li>Install</li>
          <li>QuickStart</li>
        </ul>
        <ul>
          <li>Blog</li>
          <li>Careers</li>
          <li>About</li>
        </ul>
        <div className="flex items-center gap-4">
          <div className="icon">
            <FaXTwitter />
          </div>
          <div className="icon">
            <FaFacebook />
          </div>
          <div className="icon">
            <FaInstagram />
          </div>
        </div>
      </footer>
    </>
  );
}
